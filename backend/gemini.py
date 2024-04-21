import google.generativeai as genai
from contacts import gemini_api_key
import json

def get_rating(user_content, transcript):
    PROMPT = f"""A user is taking notes on an educational video, and I would like you to rate them on their performance.
Their notes will be in short blurbs, please avoid rating based off of grammar and only rate on the criteria I provide.

Before I explain the criteria, I will give you the user input and the transcript of the video.

Here is the transcript of the video:
```
{transcript}
```
This is a list of json objects with the following content
- The text the speaker was saying in the video ("text")
- The time they started talking ("start")
- The duration of this sentence ("duration")


Here is the user input
```
{user_content}
```
This is a list of json objects with the following content
- The note the user took ("note")
- The time the user started typing ("start")
- The time the user entered the note ("end")
- The words per minute that the user typed at ("wpm")

----------------------
Now for the grading criteria:

First, grade the user out of 100 on their typing speed.
Take the WPM from each of their notes, and use them to determine if they are a fast typer or not.

Second, grade the user out of 100 on the content of their notes. Understand the overall content of the video
through it's transcript, and see if the user captured all of the important points. For example, you may add points
each time a user mentions an important part of the video, or subtract them when the user does not write something down
or takes note of something unimportant.

Last, grade the user out of 100 on the timeliness of their notes. Look at the timestamps for when the user takes note of a
topic, and for when the speaker mentions it. Make sure the user is not falling behind, and deduct points if they take note of
something long after it was said, or if they skip content to catch up.

Take the average of these three scores with a little less weight on typing speed, and provide a final score out of 100.
Be harsh but give bonus points if they think outside of the box, and dont just copy directly what the speaker says (although stay on topic).
Be very harsh if they deviate from the topic in a way which is not educational.

----------------------
Please return in the following format:

```
"score": <integer score 1 to 100 inclusive> ||| "feedback": <short 2 - 3 sentence feedback on how the user can improve next time based off of the criteria provided>
```

Only replace the content in and including the < and >. Do not change any other content.
"""
    genai.configure(api_key=gemini_api_key)

    model = genai.GenerativeModel('gemini-pro')

    response = model.generate_content(PROMPT)
    text = response.candidates[0].content.parts[0].text
    score, feedback = text.split(" ||| ")
    score = score.strip('"score": ')
    feedback = feedback.strip('"feedback": ')
    print("TEXT", text)
    print(score, feedback)
    return score, feedback
