from pocketbase import PocketBase  # Client also works the same
from pocketbase.client import FileUpload
from pocketbase.utils import ClientResponseError
from flask import jsonify
from flask import jsonify
import json

CLIENT = PocketBase('http://127.0.0.1:8090')


def attemptLogin(email, password):
    try:
        received = CLIENT.collection(
            'jot_users').auth_with_password(email, password)
        login_data = {
            "code": 200,
            "message": 'Login successful.',
            "user_id": received.record.id
        }
        return jsonify(login_data)
    except ClientResponseError as err:
        if err.status == 400:
            login_data = {
                "code": 400,
                "message": err.data,
                "user_id": ''
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
        "note_library": {'notes': []}
    }
    try:
        received = CLIENT.collection('jot_users').create(signup_data)
        result_data = {
            "code": 200,
            "message": 'Sign up successful.',
            "user_id": received.id
        }
        return jsonify(result_data)
    except ClientResponseError as err:
        if err.status == 400:
            result_data = {
                "code": 400,
                "message": err.data,
                "user_id": ''
            }
            return jsonify(result_data)
        elif err.status == 403:
            result_data = {
                "code": 403,
                "message": err.data['message'],
                "user_id": ''
            }
            return jsonify(result_data)


def giveNoteToUser(user_id, note_id):
    try:
        user_return = CLIENT.collection('jot_users').get_one(user_id)
        note_string = user_return.note_library
        note_dict = json.loads(note_string)
        new_notes = list(note_dict['notes']).append(note_id)
        CLIENT.collection('jot_users').update(user_id, {'notes': new_notes})
        note_data = {
            "code": 200,
            "message": 'Note added successfully.',
            "note_id": note_id
        }
        return jsonify(note_data)
    except ClientResponseError as err:
        if err.status == 404:
            note_data = {
                "code": 404,
                "message": err.message,
                "note_id": ''
            }
            return jsonify(note_data)
        elif err.status == 400:
            note_data = {
                "code": 400,
                "message": err.data,
                "note_id": ''
            }
            return jsonify(note_data)
        elif err.status == 403:
            note_data = {
                "code": 403,
                "message": err.message,
                "note_id": ''
            }
            return jsonify(note_data)


def attemptNoteUpload(user_id, content, video_id, score, feedback):
    note_info = {
        "note_content": content,
        "video_id": video_id,
        "score": score,
        "feedback": feedback
    }
    try:
        received = CLIENT.collection('jot_notes').create(note_info)
        return giveNoteToUser(user_id, received.id)
    except ClientResponseError as err:
        if err.status == 400:
            note_data = {
                "code": 400,
                "message": err.data,
                "note_id": ''
            }
            return jsonify(note_data)
        elif err.status == 403:
            note_data = {
                "code": 403,
                "message": err.data['message'],
                "note_id": ''
            }
            return jsonify(note_data)


def accessNoteInfo(note_id):
    try:
        note_return = CLIENT.collection('jot_notes').get_one(note_id)
        note_data = {
            "code": 200,
            "note_id": note_return.id,
            "video_id": note_return.video_id,
            "note_content": note_return.note_content,
            "score": note_return.score,
            "feedback": note_return.feedback
        }
        return jsonify(note_data)
    except ClientResponseError as err:
        if err.status == 404:
            note_data = {
                "code": 404,
                "message": err.message,
                "note_id": ''
            }
            return jsonify(note_data)
        elif err.status == 400:
            note_data = {
                "code": 400,
                "message": err.data,
                "note_id": ''
            }
            return jsonify(note_data)
        elif err.status == 403:
            note_data = {
                "code": 403,
                "message": err.message,
                "note_id": ''
            }
            return jsonify(note_data)


def attemptVideoUpload(video_id, transcription):
    vid_info = {
        "video_id": video_id,
        "transcription": transcription
    }
    try:
        received = CLIENT.collection('jot_videos').create(vid_info)
        vid_data = {
            "code": 200,
            "message": 'Video uploaded successfully.'
        }
        return jsonify(vid_data)
    except ClientResponseError as err:
        if err.status == 400:
            vid_data = {
                "code": 400,
                "message": err.data
            }
            return jsonify(vid_data)
        elif err.status == 403:
            vid_data = {
                "code": 403,
                "message": err.data['message']
            }
            return jsonify(vid_data)


def accessVideoIDs():
    try:
        results = CLIENT.collection(
            'jot_videos').get_full_list({'sort': '-created'})
        id_list = []
        for result in results:
            id_list.append(result.id)
        vid_data = {
            "code": 200,
            "video_ids": id_list
        }
        return jsonify(vid_data)
    except ClientResponseError as err:
        if err.status == 400:
            vid_data = {
                "code": 400,
                "message": err.message,
            }
            return jsonify(vid_data)
