'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import CustomNavbar from "@/components/MainNavbar";



export default function Home() {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push('/signup');
  };
  const handleLoginClick = () => {
    router.push('/login');
  };
  return (
    // <main className="flex flex-col items-center justify-between p-24 bg-gradient-to-br from-gradient_0 to-gradient_1">

    <main className="">
      <style jsx>{`
          .gradient-background {
            background-size: 100% 100%;
            background-position: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
            background-image: radial-gradient(25% 33% at 24% 50%, #B85FD3FF 3%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #FE49FE59 21%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #4F355CFF 7%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #7946AFFF 2%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #4B218FFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #6C246DFF 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #5F3779FF 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #D06DFF9C 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #4E2A8EF5 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #C46DFFF5 24%, #073AFF00 100%),linear-gradient(125deg, #372C78FF 1%, #0A061BFF 100%);
          }
        `}</style>
      <CustomNavbar></CustomNavbar>
      <div className="flex flex-col items-center justify-between p-24 bg-gradient-radial gradient-background w-full">
        <div className="flex flex-col min-h-svh justify-center">
          <TypewriterEffect className="-mt-80 ml-5" words={titleWords} />
          <div className="flex justify-center w-auto pb-10">
            <text className="font-main text-xl pr-2 pt-4">Evolve the way you</text>
            <text className="font-input text-xl pr-1 pt-4">Learn,</text>
            <text className="font-input text-xl pr-1 pt-4">Improve,</text>
            <text className="font-main text-xl pr-2 pt-4">and</text>
            <text className="font-input text-xl pt-4">Recall</text>
          </div>
          <div className="flex justify-center w-auto">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]" onClick={handleSignUpClick}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="font-main inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-medium text-white backdrop-blur-3xl hover:bg-gradient_1">
                Sign Up
              </span>
            </button>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] ml-10" onClick={handleLoginClick}>
              <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_100%,#E2CBFF_100%,#E2CBFF_100%)]" />
              <span className="font-main inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-medium text-white backdrop-blur-3xl hover:bg-gradient_1">
                Login
              </span>
            </button>
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
