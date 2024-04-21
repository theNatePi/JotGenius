from pocketbase import PocketBase  # Client also works the same
from pocketbase.client import FileUpload
from pocketbase.utils import ClientResponseError
from flask import jsonify
from flask import jsonify
import json

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
            "message": err.data
        }
        return jsonify(login_data)


def attemptSignUp(email, password, password_conf, first, last):
    user_split = email.split('@')
    signup_data = {
        "username": user_split[0],
        "email": email,
        "emailVisibility": True,
        "password": password,
        "passwordConfirm": password_conf,
        "first_name": first,
        "last_name": last,
        "note_library": {"notes": []}
    }
    try:
        CLIENT.collection('jot_users').create(signup_data)
        result_data = {
            "code": 200,
            "message": "Sign up successful."
        }
        return jsonify(result_data)
    except ClientResponseError as err:
        if err.status == 400:
            result_data = {
                "code": 400,
                "message": err.data
            }
            return jsonify(result_data)
        elif err.status == 403:
            result_data = {
                "code": 403,
                "message": err.data['message']
            }
            return jsonify(result_data)


def giveNoteToUser(user_id, note_id):
    try:
        user_data = CLIENT.collection('jot_users').get_one(user_id)
        note_string = user_data.note_library
        note_dict = json.loads(note_string)
        new_notes = list(note_dict['notes']).append(note_id)
        CLIENT.collection('jot_users').update(user_id, {'notes': new_notes})
        note_data = {
            "code": 200,
            "message": "Successfully added note."
        }
        return jsonify(note_data)
    except ClientResponseError as err:
        if err.status == 404:
            note_data = {
                "code": 404,
                "message": err.message
            }
            return jsonify(note_data)
        elif err.status == 400:
            note_data = {
                "code": 400,
                "message": err.data
            }
            return jsonify(note_data)
        elif err.status == 403:
            note_data = {
                "code": 404,
                "message": err.message
            }
            return jsonify(note_data)


def attemptNoteUpload(user_id, content, video_id):
    note_data = {
        "note_content": content,
        "video_id": video_id
    }
    try:
        note_data = CLIENT.collection('jot_notes').create(note_data)
        return giveNoteToUser(user_id, note_data.id)
    except ClientResponseError as err:
        if err.status == 400:
            note_data = {
                "code": 400,
                "message": err.data
            }
            return jsonify(note_data)
        elif err.status == 403:
            note_data = {
                "code": 403,
                "message": err.data['message']
            }
            return jsonify(note_data)
