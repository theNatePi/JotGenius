from flask import Flask, request
from flask_cors import CORS
from flask_cors import CORS
import database

app = Flask(__name__)

CORS(app, origins='http://localhost:3000',
     methods=['GET', 'POST'], allow_headers=['Content-Type'])


@app.route('/login', methods=['POST'])
def login():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        info = request.json
        print(database.attemptLogin(info['username'], info['password']))
        return database.attemptLogin(info['username'], info['password'])


@app.route('/signup', methods=['POST'])
def signup():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        info = request.json
        print(info)
        return database.attemptSignUp(info['email'], info['password'],
                                      info['confirmpassword'], info['firstname'], info['lastname'])


@app.route('/type', methods=['POST'])
def evaluate_type():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        info = request.json
        print(info)
        return '1'


@app.route('/videoIDs', methods=["GET"])
def get_video_ids():
    return database.accessVideoIDs()


if __name__ == '__main__':
    # Change the host to '0.0.0.0' to listen on all network interfaces
    app.run(host='0.0.0.0', port=8080)
