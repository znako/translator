import { Flex, Icon } from "@gravity-ui/uikit";
import { useState } from "react";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { CircleArrowRightFill } from "@gravity-ui/icons";
import { InputArea } from "./components/InputArea";
import { TranslatedArea } from "./components/TranslatedArea";
import { detectLanguage, getTranslatedText } from "./utlis/getTranslatedText";
import { LANGUAGE_MAP } from "./utlis/languageMap";

export const TranslatorContainer = () => {
  const [originalText, setOriginalText] = useState<string>();
  const [translatedText, setTranslatedText] = useState<string>();
  const [detectedLanguage, setDetectedLanguage] = useState<string>();
  const [translateLanguage, setTranslateLanguage] = useState<string>("ru");

  const onChangeInputText = useDebounce((text: string) => {
    setOriginalText(text);
    if (!text) {
      setTranslatedText("");
      setDetectedLanguage("");
      return;
    }

    detectLanguage(text)
      .then(({ data: languageData }) =>
        getTranslatedText(text, translateLanguage, languageData.language)
          .then(({ data: translatedData }) => {
            setTranslatedText(translatedData.text);
            setDetectedLanguage(LANGUAGE_MAP[languageData.language] ?? "");
          })
          .catch((error) => console.log(error))
      )
      .catch((error) => console.log(error));
  }, 300);

  const setTranslateLanguageCallback = (language: string) => {
    setTranslateLanguage(language);
    if (!originalText) {
      return;
    }

    detectLanguage(originalText)
      .then(({ data: languageData }) =>
        getTranslatedText(originalText, language, languageData.language)
          .then(({ data: translatedData }) => {
            setTranslatedText(translatedData.text);
            setDetectedLanguage(LANGUAGE_MAP[languageData.language] ?? "");
          })
          .catch((error) => console.log(error))
      )
      .catch((error) => console.log(error));
  };

  return (
    <Flex
      maxWidth="m"
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <InputArea
        detectedLanguage={detectedLanguage}
        onChange={onChangeInputText}
      />
      <Icon data={CircleArrowRightFill} width={30} height={30} />
      <TranslatedArea
        translatedText={translatedText}
        setTranslateLanguage={setTranslateLanguageCallback}
      />
    </Flex>
  );
};
