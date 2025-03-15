"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

type Props = {
  foregroundImage: string;
  alt: string;
};

export default function ParallaxImages({ foregroundImage, alt }: Props) {
  const foregroundRef = useRef<HTMLImageElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const currentPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const RangeX = (event.clientX / innerWidth - 0.5) * 2; //Range between -1 and +1
      const RangeY = (event.clientY / innerHeight - 0.5) * 2; //Range between -1 and +1
      targetPosition.current = {
        x: RangeX,
        y: RangeY,
      };
    };

    const animationFrame = () => {
      const { x: targetX, y: targetY } = targetPosition.current;
      const { x: currentX, y: currentY } = currentPosition.current;

      const newX = (currentX + (targetX - currentX)) * -10;
      const newY = (currentY + (targetY - currentY)) * -10;

      currentPosition.current = { x: newX, y: newY };

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translate(${newX * 2.1}px, ${
          newY * 2.5
        }px) rotate(${newX * 5}deg)`;
      }
      requestAnimationFrame(animationFrame);
    };

    const frameId = requestAnimationFrame(animationFrame);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 items-center">
      <Image
        ref={backgroundRef}
        src="/assets/background/paint-background.png"
        alt=""
        width={250}
        height={250}
        className="row-start-1 col-start-1 justify-self-center transition-transform"
      />
      <Image
        ref={foregroundRef}
        src={foregroundImage}
        alt={alt}
        width={200}
        height={200}
        className="row-start-1 col-start-1 justify-self-center transition-transform"
      />
    </div>
  );
}
