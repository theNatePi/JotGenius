'use client'

import { Button } from "@nextui-org/button";
import { LoginForm } from "@/components/ui/login-form";
import CustomNavbar from "@/components/MainNavbar";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link"

let userId = {}

const  VideoCard = ({videoUrl, videoId, videoSrc}) => {
  const [title, setTitle] = useState("Loading...");
  const router = useRouter();

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
  }

  useEffect(() => {
    getTitle(videoId);
  }, [videoId]);

  return (
    <main onClick={() => router.push(`/type/${userId}/${videoId}`)} className='cursor-pointer hover:cursor-pointer'>
      <CardContainer className="inter-var -mt-28">
        <CardBody className="bg-gradient-to-tr from-card_2 to-card_3 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  h-auto sm:w-[25rem] sm:h-[18rem] rounded-xl p-6 border border-navbar_button_secondary">
          <CardItem
            translateZ="20"
            className="font-main text-xl font-bold text-white"
          >
            {title ? (title.length > 33 ? `${title.slice(0, 33)}...` : `${title}`) : 'Loading...'}
          </CardItem>
          <CardItem translateZ="50" className="w-full mt-4">
            <Image
              src={videoSrc}
              height="1000"
              width="1000"
              className="h-42 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="mt-5">
          </div>
        </CardBody>
      </CardContainer>
    </main>
  )
};

export default function Home({ params }) {
  userId = params.slug[0]

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <CustomNavbar second={true} userId={userId} />
      <div className='flex pt-10 w-screen items-center flex-col z-10 bg-background'>
        <text className='font-main font-bold text-white pb-2 text-3xl'>
            What will you learn next?
        </text>
        <text className='pb-10 font-main text-sub_0'>select a video to begin</text>
      </div>
      <div className='flex flex-wrap w-screen gap-x-4 justify-center mt-10'>
        {videos.map((video, index) => (
          <VideoCard key={index} video_url={video.url} videoId={video.id} videoSrc={video.image_path} />
        ))}
      </div>
    </main>
  );
}

const videos = [
  {
    image_path: "https://img.youtube.com/vi/GIgc4viI2Vg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=GIgc4viI2Vg",
    id: "GIgc4viI2Vg"
  },
  {
    image_path: "https://img.youtube.com/vi/GIgc4viI2Vg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=GIgc4viI2Vg",
    id: "GIgc4viI2Vg"
  },
  {
    image_path: "https://img.youtube.com/vi/GIgc4viI2Vg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=GIgc4viI2Vg",
    id: "GIgc4viI2Vg"
  },
  {
    image_path: "https://img.youtube.com/vi/GIgc4viI2Vg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=GIgc4viI2Vg",
    id: "GIgc4viI2Vg"
  },
  {
    image_path: "https://img.youtube.com/vi/3AGYCjZjSR8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=3AGYCjZjSR8",
    id: "3AGYCjZjSR8"
  },
]
