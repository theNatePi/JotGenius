from pocketbase import PocketBase  # Client also works the same
from pocketbase.client import FileUpload
from pocketbase.utils import ClientResponseError
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
        return login_data
    except ClientResponseError as err:
        login_data = {
            "code": err.status,
            "message": err.data,
            "user_id": ''
        }
        return login_data


def attemptSignUp(email, password, password_conf, first, last):
    username_split = email.split('@')
    signup_data = {
        "username": username_split[0],
        "email": email,
        "emailVisibility": True,
        "password": password,
        "passwordConfirm": password_conf,
        "first_name": first,
        "last_name": last,
        "note_library": {}
    }
    try:
        received = CLIENT.collection('jot_users').create(signup_data)
        result_data = {
            "code": 200,
            "user_id": received.id,
            "message": 'Sign up successful.'
        }
        return jsonify(result_data)
    except ClientResponseError as err:
        if err.status == 400:
            result_data = {
                "code": 400,
                "user_id": '',
                "message": err.data
            }
            return jsonify(result_data)
        elif err.status == 403:
            result_data = {
                "code": 403,
                "user_id": '',
                "message": err.data['message']
            }
            return jsonify(result_data)


def giveNoteToUser(user_id, note_id):
    user_data = CLIENT.collection('jot_users').get_one(
        user_id)
    # print(user_data.note_library)


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
