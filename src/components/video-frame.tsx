"use client";

import { MASK_CLASSES } from "@/sections/video";
import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
};

export default function VideoFrame({
  src = "/assets/video/skateboard.mp4",
}: Props) {
  const myVideo = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentVideo = myVideo.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0, rootMargin: "1500px" }
    );

    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  });

  return (
    <div ref={myVideo} className={MASK_CLASSES}>
      {isInView && <video src={src} autoPlay loop muted />}
    </div>
  );
}
