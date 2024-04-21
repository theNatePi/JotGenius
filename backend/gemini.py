import google.generativeai as genai
from contacts import gemini_api_key
from IPython.display import Markdown
import textwrap
import json

genai.configure(api_key=gemini_api_key)

speed = "compared to the average person, how good is this wpm? out of 100"
'''
timeliness = "How on time was I when taking notes compared to the video. Draw from start end times of the user and the listed time stanps
of the deep gram"
'''

content = "Overall content of the notes, overall content of the video... did I capture the overall content of the video "

score = "out of 100 give me a score"

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content(
    "What is the meaning of life? Give it to me in the form of a JSON object withe ach field being one reason")
text = response.candidates[0].content.parts[0].text
print(text)
'''

def generate_response(text):
    """
    Given this JSON object, look at the field named content which is a list where each element is a JSON object that contains a field named 
    note (which is the note made), start (which is when the first letter was typed in the note), end (which is when the enter key was hit 
    for each note), and wpm (which is the words per minute for each note) and give me a score out of 100 for speed 
    (looking at the wpm for each note and comparing it with the average wpm), another for timeliness
    (based on looking at the timestamp of the deepgram and each elements start and stop times) and for content 
    (looking at each elements notes overall and comparing it to the deepgram transcript). After you obtain your scores, give me a 
    JSON object with fields: score (which is your overall score of speed, timeliness, and content) and feedback 
    (which is your feedback on what to improve on)
    """
    prompt = "be lenient with gramamr"
    start = "When you hit the first letter of the statement"
    End = "When you hit enter"
    speed_prompt = "Compared to the average person, how good is the words per minute?"
    response = model.generate_content("What is the meaning of life")
    return response

'''
