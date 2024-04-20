from flask import Flask, request
import database

app = Flask(__name__)

@app.route('/login', methods=['GET'])
def login():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'json'):
        info = request.json
        return database.attemptLogin(info['username'], info['password'])


@app.route('/signup', methods=['POST'])
def signup():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'json'):
        info = request.json
        return database.attemptSignUp(info['username'], info['email'], info['password'],
                                      info['password_conf'], info['first'], info['last'])
    
