export type GetTranslatedTextRequest = {
  text: string;
  target_language: string;
};

export type GetTranslatedTextResponse = {
  text: string;
  source_language: string;
};
