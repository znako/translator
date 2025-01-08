import { Flex, Icon } from "@gravity-ui/uikit";
import { useState } from "react";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { CircleArrowRightFill } from "@gravity-ui/icons";
import { InputArea } from "./components/InputArea";
import { TranslatedArea } from "./components/TranslatedArea";
import { getTranslatedText } from "./utlis/getTranslatedText";

export const TranslatorContainer = () => {
  const [originalText, setOriginalText] = useState<string>();
  const [translatedText, setTranslatedText] = useState<string>();
  const [detectedLanguage, setDetectedLanguage] = useState<string>();
  const [translateLanguage, setTranslateLanguage] = useState<string>("RUS");

  const onChangeInputText = useDebounce((text: string) => {
    setOriginalText(text);
    getTranslatedText(text, translateLanguage)
      .then(({ text, source_language }) => {
        setTranslatedText(text);
        setDetectedLanguage(source_language);
      })
      .catch((error) => console.log(error));
  }, 300);

  const setTranslateLanguageCallback = (language: string) => {
    setTranslateLanguage(language);
    if (!originalText) {
      return;
    }

    getTranslatedText(originalText, language)
      .then(({ text, source_language }) => {
        setTranslatedText(text);
        setDetectedLanguage(source_language);
      })
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
