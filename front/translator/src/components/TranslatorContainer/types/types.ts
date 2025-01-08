export type GetTranslatedTextRequest = {
  text: string;
  target_language: string;
};

export type GetTranslatedTextResponse = {
  data: { text: string; source_language: string };
};
