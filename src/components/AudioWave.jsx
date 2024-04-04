"use client";
"use client";
import React, { useCallback, useRef, useState } from "react";

import { WaveSurfer, WaveForm } from "wavesurfer-react";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline";

function AudioWave() {
  const [isLoaded, setIsLoaded] = useState(false);
  const wavesurferRef = useRef();

  const plugins = [
    {
      key: "top-timeline",
      plugin: TimelinePlugin,
      options: {
        height: 20,
        insertPosition: "beforebegin",
        style: {
          color: "#ffffff",
        },
      },
    },
  ];

  const handleWSMount = useCallback((waveSurfer) => {
    wavesurferRef.current = waveSurfer;

    if (wavesurferRef.current) {
      wavesurferRef.current.load("/bensound-ukulele.mp3");

      wavesurferRef.current.on("ready", () => {
        console.log("WaveSurfer is ready");
        setIsLoaded(true);
      });
    }
  }, []);

  // const play = useCallback(() => {
  //   wavesurferRef.current.playPause();
  // }, []);

  // const setZoom50 = () => {
  //   wavesurferRef.current.zoom(50);
  // };

  return (
    <div className="bg-slate-800">
      <WaveSurfer
        plugins={plugins}
        onMount={handleWSMount}
        cursorColor="transparent"
        container="#waveform"
        height={52}
      >
        <div plugins={plugins}></div>
        <div>
          <WaveForm />
        </div>
        <div id="timeline" />
      </WaveSurfer>

      {isLoaded && (
        <>
          <div className=" border border-white/3 h-[3.1rem]"> </div>
        </>
      )}
    </div>
  );
}

export default AudioWave;
