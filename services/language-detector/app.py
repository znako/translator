from flask import Flask, request, jsonify
from language_detector import LanguageDetector

app = Flask(__name__)
language_detector = LanguageDetector()

@app.route("/detect-language", methods=["POST"])
def detect_language():
    data = request.get_json()
    text = data.get("text")
    if not text:
        return jsonify({"error": "Text is required"}), 400

    result = language_detector.detect_language(text)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
