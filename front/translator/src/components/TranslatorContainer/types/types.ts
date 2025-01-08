export type DetectLanguageRequest = {
  text: string;
};

export type GetTranslatedTextRequest = {
  text: string;
  target_language: string;
  source_language: string;
};

export type GetTranslatedTextResponse = {
  data: { text: string };
};

export type DetectLanguageResponse = {
  data: { language: string };
};
