from contacts import deepgram_api_key
from youtube_transcript_api import YouTubeTranscriptApi


def getTranscript(video_id):
    response = YouTubeTranscriptApi.get_transcript(video_id)
    return response
