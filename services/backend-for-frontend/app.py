
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# URL внешнего сервиса
EXTERNAL_SERVICE_URL = 'TODO: edit'

@app.route('/get-translated-text', methods=['POST'])
def get_translated_text():
    max_chars_in_target_lang = 6
    data = request.get_json()

    if not data or 'text' not in data or 'target_language' not in data:
        return jsonify({'error': 'Text or target language not provided'}), 400

    text = data['text']
    target_language = data['target_language']

    if len(target_language) > max_chars_in_target_lang:
        return jsonify({'error': f'Target language code should not exceed {max_chars_in_target_lang} characters'}), 400

    payload = {
        'text': text,
        'target_language': target_language
    }

    try:
        response = requests.post(EXTERNAL_SERVICE_URL, json=payload)
        response.raise_for_status()
    except requests.RequestException as e:
        return jsonify({"error": "Failed to reach the language detection service", "details": str(e)}), 500

    language_data = response.json()

    if 'source_language' or 'text' not in language_data:
        return jsonify({'error': 'Invalid response from language detection service'}), 500

    result = {
        'text': language_data['text'],
        'source_language': language_data['source_language']
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
