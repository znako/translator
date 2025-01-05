import { Box, Flex, TextArea } from "@gravity-ui/uikit";
import "./styles.css";

type InputAreaProps = {
  detectedLanguage?: string;
  onChange: (value: string) => void;
};

export const InputArea = ({ detectedLanguage, onChange }: InputAreaProps) => {
  return (
    <Box>
      <Flex width={150} height={40} alignItems="center">
        {detectedLanguage}
      </Flex>
      <TextArea
        placeholder="Введите текст"
        rows={12}
        size="xl"
        className="InputArea-textArea"
        controlProps={{ style: { resize: "both" } }}
        onChange={(e) => onChange(e.target.value)}
        hasClear
      />
    </Box>
  );
};
