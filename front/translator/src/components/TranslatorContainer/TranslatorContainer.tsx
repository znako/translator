import { Flex, Icon } from "@gravity-ui/uikit";
import { useState } from "react";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { CircleArrowRightFill } from "@gravity-ui/icons";
import { InputArea } from "./components/InputArea";
import { TranslatedArea } from "./components/TranslatedArea";

export const TranslatorContainer = () => {
  const [translatedText, setTranslatedText] = useState<string>();
  const [detectedLanguage, setDetectedLanguage] = useState<string>();
  const [translateLanguage, setTranslateLanguage] = useState<string>();

  const onChangeInputText = useDebounce((value: string) => {
    setTranslatedText(value);
    setDetectedLanguage("Русский");
  }, 300);

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
        setTranslateLanguage={setTranslateLanguage}
      />
    </Flex>
  );
};
