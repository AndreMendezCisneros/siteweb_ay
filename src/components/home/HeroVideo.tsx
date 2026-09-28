"use client";

import { useEffect, useRef } from "react";

const VIDEO_ID = "EVap1L_cTRQ";

type YTPlayer = {
  playVideo: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          width?: string;
          height?: string;
          playerVars?: Record<string, string | number>;
          events?: { onReady?: (event: { target: YTPlayer }) => void };
        },
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function HeroVideo({ title }: { title: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    let cancelled = false;

    function enableSound() {
      const player = playerRef.current;
      if (!player) return;
      player.unMute();
      player.setVolume(100);
      player.playVideo();
    }

    function onGesture() {
      enableSound();
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
    }

    function createPlayer() {
      if (cancelled || !hostRef.current || !window.YT?.Player || playerRef.current) return;
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: VIDEO_ID,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
    }

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        createPlayer();
      };
      if (!document.querySelector("script[data-youtube-iframe-api]")) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.dataset.youtubeIframeApi = "true";
        document.body.appendChild(script);
      }
    }

    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("keydown", onGesture);

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
    };
  }, []);

  return (
    <div className="relative aspect-video w-full [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full">
      <div ref={hostRef} className="absolute inset-0" title={title} />
    </div>
  );
}
