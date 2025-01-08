from flask import Flask, request, jsonify
from language_detector import LanguageDetector
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

logger.info("language detector model initialization started")
language_detector = LanguageDetector()
logger.info("Detector Initialized")

app = Flask(__name__)
logger.info("flask app is ready")


@app.route("/detect-language", methods=["POST"])
def detect_language():
    try:
        data = request.get_json()
        text = data.get("text")
        if not text:
            return jsonify({"error": "Text is required"}), 400

        result = language_detector.detect_language(text)
        return jsonify(result)
    except Exception as e:
        logging.exception("Ошибка при обработке запроса:")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == "__main__":
    app.run(debug=True)
