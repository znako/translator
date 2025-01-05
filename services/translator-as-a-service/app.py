
from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

token_path = os.getenv("TOKEN_PATH")
folder_id = os.getenv("FOLDER_ID")


def translate_text(source_language, target_language, text):
    # Загружаем токен из файла
    IAM_TOKEN = os.path.join(os.getcwd(), token_path)

    with open(IAM_TOKEN) as f:
        IAM_TOKEN = f.read().strip()

    body = {
        "sourceLanguageCode": source_language,
        "targetLanguageCode": target_language,
        "texts": [text],
        "folderId": folder_id,
    }

    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer {0}".format(IAM_TOKEN)
    }

    response = requests.post(
        'https://translate.api.cloud.yandex.net/translate/v2/translate',
        json=body,
        headers=headers
    )

    if response.status_code == 200:
        return response.json()['translations'][0]['text']
    else:
        return None

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()

    source_language = data.get('source_language')
    target_language = data.get('target_language')
    texts = data.get('text')

    if not source_language or not target_language or not texts:
        return jsonify({"error": "source_language, target_language, and text are required fields"}), 400

    translated_text = translate_text(source_language, target_language, texts)

    if translated_text is not None:
        return jsonify({"text": translated_text})
    else:
        return jsonify({"error": "Translation failed"}), 500

if __name__ == '__main__':
    app.run(debug=True)
