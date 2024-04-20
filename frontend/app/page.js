'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-24 bg-gradient-to-br from-gradient_0 to-gradient_1">
      <div className="flex flex-col min-h-svh justify-center ">
        <TypewriterEffect className="-mt-80" words={titleWords} />
        <div className="flex justify-center w-auto pb-10">
          <text className="font-main text-xl pr-2 pt-4">Evolve the way you</text>
          <text className="font-input text-xl pr-1 pt-4">Learn,</text>
          <text className="font-input text-xl pr-1 pt-4">Improve,</text>
          <text className="font-main text-xl pr-2 pt-4">and</text>
          <text className="font-input text-xl pr-2 pt-4">Recall</text>
        </div>
        <div className="flex justify-center w-auto">
          <text>t</text>
          <text>t</text>
        </div>
      </div>

      <InfiniteMovingCards
        items={videos}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={videos}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards
        items={videos}
        direction="right"
        speed="slow"
      />
    </main>
  );
};

const titleWords = [
  {
    text: "JotGenius",
    className: "font-main pb-8 font-main text-8xl text-white",
  },
];

const CARDS = [
  {
    id: 0,
    name: "",
    designation: "",
    content: (
      <p className="font-input text-xl">
        Learn
      </p>
    ),
  },
  {
    id: 1,
    name: "",
    designation: "",
    content: (
      <p className="font-input text-xl">
        Improve
      </p>
    ),
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: (
      <p className="font-input text-xl">
        Recall
      </p>
    ),
  },
];

const videos = [
  {
    image_path:
      "https://img.youtube.com/vi/Xj_VDOZjds8/maxresdefault.jpg",
    url:
      "https://www.youtube.com/watch?v=Xj_VDOZjds8",
  },
  {
    image_path:
      "https://img.youtube.com/vi/1UTjWy-vnOo/maxresdefault.jpg",
    url:
      "https://www.youtube.com/watch?v=1UTjWy-vnOo",
  },
  {
    image_path:
      "https://img.youtube.com/vi/pjoQdz0nxf4/maxresdefault.jpg",
    url:
      "https://www.youtube.com/watch?v=pjoQdz0nxf4",
  },
  {
    image_path:
      "https://img.youtube.com/vi/Zrv1EDIqHkY/maxresdefault.jpg",
    url:
      "https://www.youtube.com/watch?v=Zrv1EDIqHkY",
  },
  {
    image_path:
      "https://img.youtube.com/vi/t6Wc7OMks4U/maxresdefault.jpg",
    url:
      "https://www.youtube.com/watch?v=t6Wc7OMks4U",
  },
  {
    image_path:
      "https://img.youtube.com/vi/wjZofJX0v4M/maxresdefault.jpg",
    url:
      "https://www.youtube.com/watch?v=wjZofJX0v4M",
  },
  {
    image_path:
      "https://img.youtube.com/vi/QqRREz0iBes/maxresdefault.jpg",
    url:
      "https://www.youtube.com/watch?v=QqRREz0iBes",
  },
];
