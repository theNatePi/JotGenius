from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import JSONFormatter
import json


def getTranscript(video_id):
    response = YouTubeTranscriptApi.get_transcript(video_id)

    formatter = JSONFormatter()

    json_formatted = formatter.format_transcript(response)
    
    print(json_formatted)

    j = json.loads(json_formatted)
