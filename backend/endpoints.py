from flask import Flask, request
from flask_cors import CORS
from flask_cors import CORS
import database

app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['POST'])
def login():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        info = request.json
        return database.attemptLogin(info['username'], info['password'])
    else:
        return content_type


@app.route('/signup', methods=['POST'])
def signup():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'json'):
        info = request.json
        return database.attemptSignUp(info['username'], info['email'], info['password'],
                                      info['password_conf'], info['first'], info['last'])
