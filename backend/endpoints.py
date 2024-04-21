from flask import Flask, request
from flask_cors import CORS
from flask_cors import CORS
from gemini import get_rating
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

        video_id = info['videoId']
        user_notes = info['content']
        user_id = info['userId']

        video_transcript = database.accessVideoInfo(video_id)["transcription"]

        score, feedback = get_rating(user_notes, video_transcript)

        note_info = database.attemptNoteUpload(user_id, user_notes, video_id, score, feedback)
        note_id = note_info['note_id']

        return note_id
    
@app.route('/notebyid', methods=['POST'])
def note_by_id():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        info = request.json

        note_id = info['noteId']

        note_info = database.accessNoteInfo(note_id)

        return note_info
    

@app.route('/notesforuser', methods=['POST'])
def notes_for_user():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        info = request.json

        user_id = info['user_id']

        note_info = database.accessUserNoteVideoInfo(user_id)

        return note_info


@app.route('/videoIDs', methods=["POST"])
def get_video_ids():
    return database.accessVideoIDs()


if __name__ == '__main__':
    # Change the host to '0.0.0.0' to listen on all network interfaces
    app.run(host='0.0.0.0', port=8080)
