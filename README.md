<img width="vw" alt="Screenshot 2024-04-25 at 11 04 53 AM" src="https://github.com/theNatePi/JotGenius/assets/78774649/1cedaead-b135-46d6-8c5a-14d91d7c7a64">

# JotGenius

This project was built for LA Hacks 2024, see the Devpost [here](https://devpost.com/software/jotgenius)!

JotGenius gamifies the process of taking notes through timing, scoring, and suggesting improvements based on your notes -- all supported by [Google Gemini](https://gemini.google.com/). Learn more with educational videos, improve your timeliness and note content through LLM suggestions, and recall what you have learned in your dashboard of past videos.

<details>
  <summary>
    <b>Images / Examples</b>
  </summary>

   -|-
  :-------------------------:|:-------------------------:
  **YouTube Based Content Libary** <img src="https://github.com/theNatePi/JotGenius/assets/78774649/64080e61-f53d-4268-a2a8-a78bece54ea5" width="1000" />  |  **Custom Note Taking Page** <img src="https://github.com/theNatePi/JotGenius/assets/78774649/4abe66d5-5826-473c-bef5-c72370e63792" width="1000" />
  **Note Summary Page** <img src="https://github.com/theNatePi/JotGenius/assets/78774649/05138612-131d-4f77-9e1a-8ba87dfee700" width="1000" />  |  **Custom Gemini Suggestions** <img src="https://github.com/theNatePi/JotGenius/assets/78774649/5f5f85d0-be06-4a49-84c5-61b7cc1084a6" width="1000" />
</details>

## Features

- **Simultaneous Note-taking**: Users take notes in a bullet-point style while watching a YouTube video.
- **Dynamic Scoring**: After the video ends, users receive a score out of 100 based on typing speed, content quality, and timeliness. The score is determined using Google's Gemini API and our WPM management system.
- **Timestamped Notes**: Each note made by the user and sentence fragment in the transcript is timestamped with start time and duration.
- **Gemini Suggestions**: Gemini API suggests improvements to the user's notes, which are linked to the notes themselves in order to improve long-lasting learning.
- **Video Library**: Users are given access to a library of a variety of educational videos, curated by the authors.
- **Dashboard**: Users can view all of their previously taken notes on their dashboard for review and further learning.

## Technologies Used

Frontend

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- [Aceternity](https://www.aceternity.com/components)
- [DaisyUI](https://daisyui.com/)

Backend

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
- [PocketBase](https://pocketbase.io/)
- [Gemini API](https://gemini.google.com)
- [YouTube API](https://developers.google.com/youtube/iframe_api_reference)

## Future Plans

- Allow users to enter their own YouTube links for note-taking.
- Deploy the app for public use.
- Scale up the app with additional functionality and features.

## Installation

1. Clone the repository.
2. Download [PocketBase](https://pocketbase.io/) from their website and follow installation instructions.
3. Run PocketBase locally.
4. Find the database schema (db-template) in the backend directory and use pb_schema_2.json to import the tables into local PocketBase UI.
     - With PocketBase running, navigate to the Admin Pannel (http://127.0.0.1:8090/_/).
     - Sign in, go to settings, and upload the schema.
6. In PocketBase, create a user with the following attributes:

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

1. Sign in or sign up on the landing page.
2. Choose a video from the available library.
3. Start watching the video and take notes as prompted.
4. After the video ends, review your score and Gemini suggestions.
5. Access your dashboard to review all your previously taken notes, scores, and suggestions.
6. Access your library to watch another video, and improve with Gemini's suggestions.

## Contributors

- Nathan Pietrantonio (@thenatepi)
- Kyle Huynh (@huynh-kyle23)
- Trystan Camden Vasquez (@trystancfv)
