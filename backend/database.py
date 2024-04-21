from pocketbase import PocketBase  # Client also works the same
from pocketbase.client import FileUpload
from pocketbase.utils import ClientResponseError
from flask import jsonify
from flask import jsonify

CLIENT = PocketBase('http://127.0.0.1:8090')


def attemptLogin(username, password):
    try:
        received = CLIENT.collection(
            'jot_users').auth_with_password(username, password)
        login_data = {
            "code": 200,
            "message": "Login successful.",
            "user_id": received.record.id
        }
        return jsonify(login_data)
    except ClientResponseError as err:
        login_data = {
            "code": err.status,
            "message": err.data['identity']['message']
        }
        return jsonify(result_data)
    except ClientResponseError as err:
        if err.status == 400:
            result_data = {
                "code": 400,
                "message": err.data['identity']['message']
            }
            return jsonify(result_data)
        elif err.status == 403:
            result_data = {
                "code": 403,
                "message": err.data['message']
            }
            return jsonify(result_data)


def giveNoteToUser(user_id, note_id):
    user_data = CLIENT.collection(
        'jot_users').get_first_list_item(f"id=\"{user_id}\"")


def attemptNoteUpload(user_id, content, video_id):
    note_data = {
        "note_content": content,
        "video_id": video_id
    }
    try:
        note_data = CLIENT.collection('jot_notes').create(note_data)

    except ClientResponseError as err:
        if err.status == 400:
            note_data = {
                "code": 400,
                "message": err.data['identity']['message']
            }
            return jsonify(note_data)
        elif err.status == 403:
            note_data = {
                "code": 403,
                "message": err.data['message']
            }
            return jsonify(note_data)

# giveNoteToUser('l3kwmiryni8i0il', 'l3kwmiryni8i0il')


def attemptNoteUpload(user_id, content, video_id):
    note_data = {
        "note_content": content,
        "video_id": video_id
    }
    try:
        note_data = CLIENT.collection('jot_notes').create(note_data)

    except ClientResponseError as err:
        if err.status == 400:
            note_data = {
                "code": 400,
                "message": err.data['identity']['message']
            }
            return jsonify(note_data)
        elif err.status == 403:
            note_data = {
                "code": 403,
                "message": err.data['message']
            }
            return jsonify(note_data)
