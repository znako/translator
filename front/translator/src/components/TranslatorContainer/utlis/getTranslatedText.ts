import { api } from "../../../shared/api/api";
import {
  GetTranslatedTextRequest,
  GetTranslatedTextResponse,
  DetectLanguageRequest,
  DetectLanguageResponse,
} from "../types/types";

export const detectLanguage = (text: string) => {
  return api.post<string, DetectLanguageResponse, DetectLanguageRequest>(
    "/detect-language",
    {
      text,
    }
  );
};

export const getTranslatedText = (
  text: string,
  target_language: string,
  source_language: string
) => {
  return api.post<string, GetTranslatedTextResponse, GetTranslatedTextRequest>(
    "/get-translated-text",
    {
      text,
      target_language,
      source_language,
    }
  );
};
