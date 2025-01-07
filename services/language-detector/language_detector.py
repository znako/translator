from transformers import pipeline

class LanguageDetector:
    def __init__(self):
        self.detector = pipeline(task="text-classification", model="papluca/xlm-roberta-base-language-detection")

    def detect_language(self, text):
        result = self.detector(text)[0]
        return {"language": result['label'], "confidence": result['score']}
