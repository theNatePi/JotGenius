'use client'

import React from 'react';
import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';
import {Progress} from "@nextui-org/react";

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

    videoIdSlug = params.slug[1];

    useEffect(() => {
        const intervalId = setInterval(() => {
            try {
                setCurrentTime(player.getCurrentTime());
                setDuration(player.getDuration());
            }
            catch {
                setCurrentTime(0);
                setDuration(0);
            }
        }, 100);
    
        return () => clearInterval(intervalId);
    }, [player]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-background">
            <style jsx>{`
            .loading-div {
                width: 640px
            }
            `}</style>
            <text>When you are ready, click the video to begin</text>
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
            <text>{params.slug[0]}</text>
            <text>{}</text>
        </main>
    );
}
