'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import CustomNavbar from "@/components/MainNavbar";

const scrollToTarget = () => {
  const targetHeading = document.getElementById('content');
  if (targetHeading) {
    targetHeading.scrollIntoView({ behavior: 'smooth' });
  }
};


export default function Home() {
  const router = useRouter();

  return (
    // <main className="flex flex-col items-center justify-between p-24 bg-gradient-to-br from-gradient_0 to-gradient_1">
    
    <main className="">
      <style jsx>{`
          .gradient-background {
            background-size: 150% 100%;
            background-position: -200px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
            background-image: radial-gradient(25% 33% at 24% 50%, #B85FD3FF 3%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #FE49FE59 21%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #4F355CFF 7%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #7946AFFF 2%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #4B218FFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #6C246DFF 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #5F3779FF 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #D06DFF9C 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #4E2A8EF5 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #C46DFFF5 24%, #073AFF00 100%),linear-gradient(125deg, #372C78FF 0%, #0A061BFF 99%);
          }
          .video-text {
            margin-top: 1100px
          }
          .bg-gradient-radial {
            background-image: radial-gradient(circle, rgba(160, 92, 195, 1) 0%, rgba(160, 92, 195, 0.8) 50%, rgba(160, 92, 195, 0) 100%);
          }
        `}</style>
      <CustomNavbar></CustomNavbar> 
      <div className="flex flex-col items-center justify-between p-24 bg-gradient-radial gradient-background w-full">
        <div className="flex flex-col min-h-svh justify-center items-center">
          <TypewriterEffect className="-mt-96 ml-5" words={titleWords} />
          <div className="flex justify-center w-auto pb-10 ">
            <text className="font-main text-xl pr-2 pt-4">Evolve the way you</text>
            <text className="font-input text-xl pr-1 pt-4">Learn,</text>
            <text className="font-input text-xl pr-1 pt-4">Improve,</text>
            <text className="font-main text-xl pr-2 pt-4">and</text>
            <text className="font-input text-xl pt-4">Recall</text>
          </div>
          <div className="flex justify-center w-auto">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="font-main font-bold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl text-white backdrop-blur-3xl hover:bg-gradient_1">
                Sign Up
              </span>
            </button>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] ml-10">
              <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_100%,#E2CBFF_100%,#E2CBFF_100%)]" />
              <span className="font-main inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-medium text-white backdrop-blur-3xl hover:bg-gradient_1">
                Login
              </span>
            </button>
          </div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] justify-center w-72 mt-10" onClick={scrollToTarget}>
              <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_100%,#E2CBFF_100%,#E2CBFF_100%)]" />
              <span className="font-main inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-5 py-2 text-2xl font-medium text-white backdrop-blur-3xl hover:bg-gradient_1">
                <text className="ml-14 mr-3">See More</text>
              
              <svg
                fill="none"
                height="49"
                viewBox="0 0 300 49"
                width="71"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2337 0.187119L0.0727539 13.3481L35.1687 48.444L70.2646 13.3481L57.1036 0.187119L35.1687 22.1221L13.2337 0.187119Z"
                  fill="white"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              </span>
          </button>
        </div>

        <div className="flex flex-col min-h-screen text-center items-center" id="content" style={{ scrollMarginTop: '100px' }}>
          <text className="font-main text-6xl pr-2 pb-5">a new way to grow</text>

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
          
          <text className="font-main text-6xl pr-2 pb-5">all in one place</text>
          <svg
            fill="none"
            height="49"
            viewBox="0 0 71 49"
            width="71"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-16"
          >
            <path
              d="M13.2337 0.187119L0.0727539 13.3481L35.1687 48.444L70.2646 13.3481L57.1036 0.187119L35.1687 22.1221L13.2337 0.187119Z"
              fill="white"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            </svg>
        </div>
        <div className="absolute z-30 video-text rounded-full pt-11 pb-11 pr-28 pl-28 bg-gradient-radial">
            <text className="font-input font-bold text-6xl pr-2">with the content you love</text>
        </div>
        <div className="flex flex-col min-h-screen text-center items-center w-screen -mt-10" id="content" style={{ scrollMarginTop: '100px' }}>
          <StickyScroll content={content} className="w-screen"/>
        </div>



        <div className="flex flex-col justify-center items-center -mt-80 mb-20 h-60 rounded-2xl bg-background_complement w-96">
          <div className="flex justify-center w-auto pb-10">
            <text className="font-main text-3xl pr-2 pt-4">Get started</text>
            <text className="font-input text-3xl pr-1 pt-4">today</text>
          </div>
          <div className="flex justify-center w-auto">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="font-main font-bold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl text-white backdrop-blur-3xl hover:bg-gradient_1">
                Sign Up
              </span>
            </button>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] ml-10">
              <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_100%,#E2CBFF_100%,#E2CBFF_100%)]" />
              <span className="font-main inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-medium text-white backdrop-blur-3xl hover:bg-gradient_1">
                Login
              </span>
            </button>
          </div>
        </div>
      </div>
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

const content = [
  {
    title: "learn from videos",
    description:
      "Dive into a world of knowledge with JotGenius, where you can watch videos from diverse channels covering a range of topics. Enhance your learning experience by practicing your skills while absorbing valuable information from expert creators. Whether you're exploring new interests or deepening existing knowledge, you will be introduced to new topics while honing your abilities.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <text className="font-input text-6xl">
          learn
        </text>
      </div>
    ),
  },
  {
    title: "improve your note taking skills",
    description:
      "Elevate your note-taking and typing skills with AI-driven insights and automatic scoring. Receive personalized feedback to enhance your efficiency and accuracy in capturing essential information from the videos you watch, while improving your ability to do so in real world scenarios. Track your progress over time and continually refine your abilities, ensuring that you make the most out of every learning opportunity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <text className="font-input text-6xl">
          improve
        </text>
      </div>
    ),
  },
  {
    title: "recall what you learned",
    description:
      "Build your personal repository of notes encompassing a vast array of topics, curated to your interests and learning objectives. Easily revisit and review your notes at any time, enabling efficient recall and reinforcement of key concepts. By organizing your knowledge library within JotGenius, you can build a personal knowledge base passively while practicing your note taking skills.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <text className="font-input text-6xl">
          recall
        </text>
      </div>
    ),
  },
];
