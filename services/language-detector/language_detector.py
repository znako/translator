import torch
from transformers import pipeline

class LanguageDetector:
    def __init__(self):
        print("init language_detector")
        self.detector = pipeline(
            task="text-classification",
            model="papluca/xlm-roberta-base-language-detection",
            device = -1,
        )
        self.detector.model.eval()
        self._warmup()

    def _warmup(self):
        try:
            self.detector("Warmup")
        except Exception as e:
            print(f"Error on model initialization: {e}")

    def detect_language(self, text):
        result = self.detector(text)[0]
        score = result["score"]
        language = result["label"]
        
        if score < 0.5:
            return {"language": "en"}  

        return {"language": language}
