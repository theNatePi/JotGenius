# JotGenius

JotGenius is a web application designed to gamify learning and skill-building through customizable mediums such as typing and note-taking. The app allows users to watch a YouTube video of their choosing while simultaneously being prompted to take bullet-point style notes as the video plays. 

## Features

- **Simultaneous Note-taking**: Users take notes in a bullet-point style while watching a YouTube video.
- **Dynamic Scoring**: After the video ends, users receive a score out of 100 based on typing speed, content quality, and timeliness. The score is determined using Google's Gemini API and our WPM management system.
- **Timestamped Notes**: Each note made by the user and sentence fragment in the transcript is timestamped with start time and duration.
- **Gemini Suggestions**: Gemini API suggests improvements to the user's notes, which are linked to the notes themselves in order to improve long-lasting learning.
- **Video Library**: Users are given access to a library of a variety of educational videos, curated by the authors.
- **Dashboard**: Users can view all of their previously taken notes on their dashboard for review and further learning.

## Technologies Used

- Python
- NextJS
- PocketBase
- Flask
- Gemini API
- YouTube API
- DaisyUI
- Aceternity

## Future Plans

- Allow users to enter their own YouTube links for note-taking.
- Deploy the app for public use.
- Scale up the app with additional functionality and features.

## Installation

1. Clone the repository.
2. Download PocketBase from their website and follow installation instructions.
3. Run PocketBase locally.
4. Find the database schema (db-template) in the backend directory and use pb_schema_2.json to import the tables into local PocketBase UI.
5. In PocketBase, create a user with the following attributes:

guest000account as ID
```
{
  "notes": [
    "h28xij0k9ni7ge8"
  ]
}
```
for note_library and set all other attributes at your discretion.

7. Change directory into backend folder.
8. Install the required dependencies using `pip install -r requirements.txt`.
9. Create a file called contacts.py in the /backend folder and add a variable called gemini_api_key, setting it equal to your Gemini API key.
10.  Run the Flask server.
11.  Change directory into frontend folder.
12. Run `npm install`
13. Run `npm run dev`
14. Access the web app in your browser.

## Usage

1. Sign in to your account.
2. Choose a video from the available library.
3. Start watching the video and take notes as prompted.
4. After the video ends, review your score and Gemini suggestions.
5. Access your dashboard to review all your previously taken notes, scores, and suggestions
6. Access your library to watch another video.

## Contributors

- Nathan Pietrantonio (@thenatepi)
- Kyle Huynh (@huynh-kyle23)
- Trystan Camden Vasquez (@trystancfv)
