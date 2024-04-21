'use client'

import { Button } from "@nextui-org/button";
import { LoginForm } from "@/components/ui/login-form";
import CustomNavbar from "@/components/MainNavbar";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

let userId = {}
let noteId = {}

export default function Home({ params }) {
  const [title, setTitle] = useState(null);

  let videoId = noteContent.videoId;

  userId = params.slug[0]
  noteId = params.slug[1]

  const getTitle = (videoIdString) => {
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

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <CustomNavbar userId={userId} />
      <div className="flex flex-row w-3/4 gap-5 h-screen pt-5 pb-20 justify-between">
        <div className="w-1/2 rounded-3xl bg-navbar_button_secondary bg-opacity-5 border border-navbar_button_secondary pl-10 pt-6">
            <text className="font-main text-3xl font-bold">Your Notes:</text>
            <div className="flex flex-col mt-5 pl-4 mr-9 overflow-y-scroll h-5/6 hover:border-navbar_button_secondary border rounded-lg border-transparent">
                {noteContent.lines.map((item, index) => (
                    <text key={index} className="text-input pt-2">- {item.note}<br /></text>
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
            <div className="w-full h-1/2 rounded-3xl bg-navbar_button_secondary bg-opacity-5 border border-navbar_button_secondary overflow-hidden pl-10 pt-6">
                <text className="font-main text-3xl font-bold truncate w-full inline-block pr-10">{title ? `${title}` : 'Loading...'}</text>
            </div>
            <div className="w-full h-1/2 rounded-3xl bg-navbar_button_secondary bg-opacity-5 border border-navbar_button_secondary">

            </div>
        </div>
      </div>
    </main>
  );
}

const noteContent = {
    'lines': [
        {
            'note': 'This is the first line'
        },
        {
            'note': 'This is the second line qeifjoqejif iqjo  oqijf oijeoijdo jefoiqjeoi oqeij oijefoifjoeijo eq fqo jf'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the hiiii line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the thirs line'
        },
        {
            'note': 'This is the okokok line'
        }
    ],
    'videoId': 'Oc6ID1tvFNw',
    'geminiSuggestion': 'blah blah blah blah blah blah'
}
