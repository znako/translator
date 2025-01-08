import { api } from "../../../shared/api/api";
import {
  GetTranslatedTextRequest,
  GetTranslatedTextResponse,
} from "../types/types";

export const getTranslatedText = (text: string, target_language: string) => {
  return api.post<string, GetTranslatedTextResponse, GetTranslatedTextRequest>(
    "/get-translated-text",
    {
      text,
      target_language,
    }
  );
};
