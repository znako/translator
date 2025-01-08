import { Box, Flex, Select, TextArea, useToaster } from "@gravity-ui/uikit";
import { Copy } from "@gravity-ui/icons";

import "./styles.css";

const SELECT_TRANSLATE_LANGUAGE_OPTIONS = [
  { value: "RUS", content: "Русский" },
  { value: "ENG", content: "Английский" },
  { value: "UZB", content: "Узбекский" },
  { value: "TATAR", content: "Татарский" },
];

const DEFAULT_TRANSLATE_LANGUAGE = ["RUS"];

type TranslatedAreaProps = {
  translatedText?: string;
  setTranslateLanguage: (value: string) => void;
};

export const TranslatedArea = ({
  translatedText,
  setTranslateLanguage,
}: TranslatedAreaProps) => {
  const { add } = useToaster();

  return (
    <Box>
      <Flex width={150} height={40}>
        <Select
          options={SELECT_TRANSLATE_LANGUAGE_OPTIONS}
          defaultValue={DEFAULT_TRANSLATE_LANGUAGE}
          onUpdate={(value) => setTranslateLanguage(value[0])}
        />
      </Flex>
      <Box position="relative">
        <TextArea
          value={translatedText}
          rows={12}
          size="xl"
          className="TranslatedArea-textArea"
          controlProps={{ style: { resize: "both" } }}
          onChange={() => {}}
        />
        <div className="TranslatedArea-copy_container">
          {!!translatedText && (
            <Copy
              className="TranslatedArea-copy_icon"
              onClick={() => {
                navigator.clipboard.writeText(translatedText);
                add({ title: "Текст скопирован", name: "copy" });
              }}
            />
          )}
        </div>
      </Box>
    </Box>
  );
};
