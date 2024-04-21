'use client'

import { Button } from "@nextui-org/button";
import { LoginForm } from "@/components/ui/login-form";
import CustomNavbar from "@/components/MainNavbar";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import {Chip} from "@nextui-org/react";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

let userId = {}
let noteId = {}

export default function Home({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [noteContent, setNoteContent] = useState({
        'lines': [
            {
                'note': 'Loading...'
            },
        ],
        'videoId': 'Oc6ID1tvFNw',
        'geminiSuggestion': 'Loading...'
    }
  );
  const [score, setScore] = useState(0);

  userId = params.slug[0]
  noteId = params.slug[1]

  const getTitle = (videoIdString) => {
    if (!videoIdString) {
        return;
    }
    const https = require('https');
    const querystring = require('querystring');

    const params = { format: "json", url: `https://www.youtube.com/watch?v=${videoIdString}` };
    const url = "https://www.youtube.com/oembed";
    const query = querystring.stringify(params);
    const requestUrl = `${url}?${query}`;

    https.get(requestUrl, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const jsonData = JSON.parse(data);
        setTitle(jsonData.title);
    });

    }).on('error', (error) => {
        console.error(error);
    });
  };

  useEffect(() => {
    getTitle(videoId);
  }, [videoId]);
 

  useEffect(() => {
    let request_data = {
        'noteId': noteId
    }

    const fetchData = async () => {
        let response = await fetch('http://127.0.0.1:8080/notebyid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request_data),
        });

        let note_content = await JSON.parse(await response.text());

        setVideoId(note_content.video_id);
        setNoteContent(
            {
                'lines': note_content.note_content,
                'videoId': videoId,
                'geminiSuggestion': note_content.feedback
            }
        );
        setScore(note_content.score)
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <CustomNavbar userId={userId} />
      <div className="flex flex-row w-3/4 gap-5 h-screen pt-5 pb-20 justify-between">
        <div className="w-1/2 rounded-3xl bg-navbar_button_secondary bg-opacity-5 border border-navbar_button_secondary pl-10 pt-6">
            <div className="flex flex-row justify-between">
                <text className="font-main text-3xl font-bold">Your Notes:</text>
                <Chip color="success" variant="shadow" className="mr-10 mt-1.5"><text className="font-main font-bold">Score: {score}/100</text></Chip>
            </div>
            <div className="flex flex-col mt-5 pl-4 mr-9 overflow-y-scroll h-5/6 hover:border-navbar_button_secondary border rounded-lg border-transparent">
                {noteContent.lines.map((item, index) => (
                    <text key={index} className="text-input pt-2">- {item.note}<br /></text>
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2 h-full">
            <div className="w-full max-h-full flex-shrink-0 rounded-3xl bg-navbar_button_secondary bg-opacity-5 border border-navbar_button_secondary overflow-hidden pl-10 pt-6 pr-10">
                <text className="font-main text-3xl font-bold truncate w-full inline-block pb-5">{title ? `${title}` : 'Loading...'}</text>
                <Image
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    height="1000"
                    width="1000"
                    className="h-42 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
                <button className='bg-navbar_button_secondary border-2 border-navbar_button_selected text-bold w-full h-10 rounded-xl mt-8 mb-8'
                    onClick={() => router.push(`/dashboard/${userId}`)}
                >Return To Dashboard</button>
            </div>
            <div className="w-full h-1/3 rounded-3xl bg-navbar_button_secondary bg-opacity-5 border border-navbar_button_secondary pl-10 pt-6 pr-10">
                <text className="font-main text-3xl font-bold">Gemini Suggests:</text>
                <div className="flex flex-col font-main mt-5 mr-9 overflow-y-scroll h-2/3 hover:border-navbar_button_secondary border rounded-lg border-transparent">
                    {noteContent.geminiSuggestion}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
