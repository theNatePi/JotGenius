'use client'

import React from 'react';
import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';
import {Progress} from "@nextui-org/react";
import CustomNavbar from '@/components/MainNavbar';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


let player = {};
let videoIdSlug = {};

class Video extends React.Component {
render() {
    const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        disablekb: 1,
    },
    };

    return <YouTube videoId={videoIdSlug} opts={opts} onReady={this._onReady} onPause={this._onPause} />;
}

_onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    player = event.target;
}

_onPause(event) {
    event.target.playVideo();
}
};

export default function Home({ params }) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [title, setTitle] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [notes, setNotes] = useState([]);

    const [notesWithTimes, setNotesWithTimes] = useState([]);
    const [firstLetter, setFirstLetter] = useState(true);
    const [startTime, setStartTime] = useState(0);

    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1} = useDisclosure();
    const {isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const handleOpen = () => {
        setBackdrop('blur')
        onOpen();
    }

    const handleOpen1 = () => {
        setBackdrop('blur')
        onOpen1();
    }

    const handleOpen2 = () => {
        setBackdrop('blur')
        onOpen2();
    }

    videoIdSlug = params.slug[1];

    useEffect(() => {
        const intervalId = setInterval(() => {
            try {
                setCurrentTime(player.getCurrentTime());
                setDuration(player.getDuration());

                setIsPlaying(player.getPlayerState() === 1);
                if (player.getPlayerState() === 0) {
                    console.log(notesWithTimes);
                }
            }
            catch {
                setCurrentTime(0);
                setDuration(0);
            }
        }, 100);

        getTitle(videoIdSlug);
    
        return () => clearInterval(intervalId);
    }, [player, notesWithTimes]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setNotes([inputValue, ...notes]);
          setNotesWithTimes([...notesWithTimes, [inputValue, startTime, currentTime]]);
          setFirstLetter(true);
          setInputValue('');
        } else {
            if (firstLetter) {
                setStartTime(currentTime);
                setFirstLetter(false);
            }
        }
      };
    
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };

    return (
        <main className="flex min-h-screen flex-col items-center bg-background">
            <style jsx>{`
            .loading-div {
                width: 640px
            }
            `}</style>

            <CustomNavbar />
            <div className='flex flex-row'>
                <div className='flex flex-col items-center absolute left-10 w-52 z-0 pt-40'>
                    <div className='mb-3'>
                        <text className='font-main text-xl'>Need help?</text>
                    </div>
                    <text className='font-main text-sm mb-4 text-center'>Take better notes by improving:</text>
                    <button 
                        className="relative inline-flex h-10 w-40 overflow-hidden rounded-2xl p-[1px]"
                        onClick={()=>handleOpen()}
                    >
                        <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_100%,#E2CBFF_100%,#E2CBFF_100%)]" />
                        <span className="font-input inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-5 py-2 text-xl text-white backdrop-blur-3xl hover:bg-gradient_1">
                            Speed
                        </span>
                    </button>
                    <button 
                        className="relative inline-flex h-10 w-40 overflow-hidden rounded-2xl p-[1px] mt-5"
                        onClick={()=>handleOpen1()}
                    >
                        <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_100%,#E2CBFF_100%,#E2CBFF_100%)]" />
                        <span className="font-input inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-5 py-2 text-xl text-white backdrop-blur-3xl hover:bg-gradient_1">
                            Content
                        </span>
                    </button>
                    <button 
                        className="relative inline-flex h-10 w-40 overflow-hidden rounded-2xl p-[1px] mt-5"
                        onClick={()=>handleOpen2()}
                    >
                        <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_100%,#E2CBFF_100%,#E2CBFF_100%)]" />
                        <span className="font-input inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-5 py-2 text-xl text-white backdrop-blur-3xl hover:bg-gradient_1">
                            Analysis
                        </span>
                    </button>
                </div>
                <div className='flex pt-10 flex-col z-10 bg-background p-10'>
                    <text className='font-main font-bold text-white pb-2 text-3xl text-left'>
                        {title ? (title.length > 35 ? `Watch: ${title.slice(0, 35)}...` : `Watch: ${title}`) : 'Loading...'}
                    </text>
                    <text className='pb-10 font-main text-sub_0'>When you are ready, click the video to begin</text>
                    <Video/>
                    <div className='flex flex-row loading-div justify-between items-center pt-4'>
                        <Progress aria-label="Loading..." value={(currentTime / duration) * 100 + 1} className="w-auto mr-10"
                            classNames={{
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-r from-navbar_button_selected to-navbar_button_secondary",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60",
                            }}
                        />
                        <p className="text-lg w-48 text-right font-input"> {formatTime(currentTime)} / {formatTime(duration)} </p>
                    </div>
                    <div className='wfull mt-5 mb-10'>
                        <text className='font-main text-sub_0'>{isPlaying ? 'Take a note below, then press ENTER' : 'Press play to start...'}</text>
                        <input 
                            type="text" 
                            placeholder="Jot something down..." 
                            className="font-input input input-bordered w-full border-navbar_button_selected text-white focus:border-sub_0 mt-2"
                            value={inputValue}
                            onKeyDown={handleKeyDown}
                            onChange={handleChange} 
                            disabled={!isPlaying}
                        />
                        <text className='flex font-main text-sub_0 mt-5 mb-2 text-lg'>Notes:</text>
                        {notes.map((note, index) => (
                            <text key={index} className='flex font-main text-white mt-0 ml-4 text-lg'>- {note}</text>
                        ))}
                    </div>
                </div>
            </div>


            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
                <ModalContent className='bg-background'>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 text-main">Improve Your Speed</ModalHeader>
                    <ModalBody>
                        <p className='text-main text-title_0'> 
                            Your score is partially based off of your words per minute!
                        </p>
                        <p className='text-input'>
                            When typing your notes, try to type as quickly and accurately as possible.
                            We only count your time when you press the first key, and stop it when you hit enter.
                            This helps you focus on the content of the video, digest your own thoughts and ideas, and then
                            put them into writing as efficiently as possible.
                        </p>
                        <p className='text_input'>
                            In the real world, typing with increased speed can help you Jot down notes at the speed of thought.
                            This helps your get back to the content as quickly as possible, while also helping you to have
                            time to get all of your thoughts into writing!
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>

            <Modal backdrop={backdrop} isOpen={isOpen1} onClose={onClose1}>
                <ModalContent className='bg-black'>
                {(onClose1) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Improve Your Content</ModalHeader>
                    <ModalBody>
                        <p className='text-main text-title_0'> 
                            Your score is partially based off how well you understand the content of the video!
                        </p>
                        <p className='text-input'>
                            Content is key! Make sure you pay close attention to what is being talked about in
                            the video you are watching. Take a moment to process what is being taught,
                            then quickly Jot down your ideas, questions, thoughts, or a summary.
                        </p>
                        <p className='text_input'>
                            In your everyday life, it is important to understand what you are committing to your notes.
                            If you don't know what the content means, don't just blindly write it down! Instead, write down
                            questions, ideas, or other similar topics which could help get you thinking when you look
                            back at your notes!
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose1}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>

            <Modal backdrop={backdrop} isOpen={isOpen2} onClose={onClose2}>
                <ModalContent className='bg-black'>
                {(onClose2) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Improve Your Analysis</ModalHeader>
                    <ModalBody>
                        <p className='text-main text-title_0'> 
                            Your score is partially based off of additional ideas, thoughts, and connections that you make on your own!
                        </p>
                        <p className='text-input'>
                            When taking notes, it is important to perform some analysis on the ideas you are hearing.
                            Connect what you hear to what you have seen before, and think of some new questions, comments,
                            or concerns you may have about the topic. This analysis gets your brain thinking about the topic, and
                            helps you to retain more of the information while drawing new connections in your mind.
                        </p>
                        <p className='text_input'>
                            In the real world, this is where true learning takes place. When you are introduced to a new topic,
                            don't just take it at face value. Perform analysis to deepen your understanding and find new meaning
                            behind what you learn.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose2}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </main>
    );
}
