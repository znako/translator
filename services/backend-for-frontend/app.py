
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

EXTERNAL_SERVICE_URL = 'TODO: edit'

@app.route('/get-translated-text', methods=['POST'])
def get_translated_text():
    data = request.get_json()

    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text = data['text']

    try:
        response = requests.post(EXTERNAL_SERVICE_URL, json={'text': text})
        response.raise_for_status() 
    except requests.RequestException as e:
        return jsonify({"error": "Failed to reach the language detection service", "details": str(e)}), 500

    language_data = response.json()

    if 'language' not in language_data:
        return jsonify({'error': 'Invalid response from language detection service'}), 500

    result = {
        'text': text,
        'language': language_data['language']
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
