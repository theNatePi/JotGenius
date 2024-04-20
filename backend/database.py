from pocketbase import PocketBase  # Client also works the same
from pocketbase.client import FileUpload
from pocketbase.utils import ClientResponseError

CLIENT = PocketBase('http://127.0.0.1:8090')

def attemptLogin(username, password):
    try:
        received = CLIENT.collection('jot_users').auth_with_password(username, password)
        login_data = {
            "code": 200,
            "message": "Login successful."
        }
        return login_data
    except ClientResponseError as err:
        login_data = {
            "code": err.status,
            "message": err.data['identity']['message']
        }
        return login_data

