"use client";

import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { Skateboard3D } from "./skateboard-3d";
import { backJump, frontJump, jumpSkateboard, middleJump } from "@/utils/gsap";
import Hotspot from "./hotspot";
import gsap from "gsap";

const INITIAL_CAMERA_POSITION = [40, 25, 50] as const;

export default function InteractiveSkateboard() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="h-full w-full z-40">
        <Canvas
          className="h-full w-full"
          camera={{ position: INITIAL_CAMERA_POSITION, fov: 90 }}
        >
          <Suspense fallback={<>Loading...</>}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

function Scene() {
  const SkateboardRef = useRef<THREE.Group>(null);
  const containerRef = useRef<THREE.Group>(null);

  const [showHotspot, setShowHotspot] = useState({
    front: true,
    middle: true,
    back: true,
  });
  const [isAnimated, setIsAnimated] = useState(false);

  const { camera } = useThree();

  useEffect(() => {
    if (!SkateboardRef || !containerRef) return;

    if (containerRef.current?.position)
      gsap
        .timeline()
        .to(containerRef.current.position, {
          x: 10,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
        .to(containerRef.current.position, {
          x: -10,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

    // if (SkateboardRef.current?.rotation)
    //   gsap.to(SkateboardRef.current.rotation, {
    //     y: Math.PI/64,
    //     duration: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "sine.inOut",
    //   });
  }, []);

  useEffect(() => {
    camera.lookAt(new THREE.Vector3(-10, -5, 0));

    const handleZoom = () => {
      const scale = Math.max(Math.min(1000 / window.innerWidth, 1.7), 1);
      console.log("🚀 ~ handleZoom ~ scale:", window.innerWidth, scale);

      camera.position.x = INITIAL_CAMERA_POSITION[0] * scale;
      camera.position.y = INITIAL_CAMERA_POSITION[1] * scale;
      camera.position.z = INITIAL_CAMERA_POSITION[2] * scale;
    };
    handleZoom();

    window.addEventListener("resize", handleZoom);

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, [camera]);

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();

    const skateboard = SkateboardRef.current;
    const container = containerRef.current;
    if (!skateboard || !container || isAnimated) return;

    const { name } = event.object;

    setShowHotspot((prev) => ({ ...prev, [name]: false }));

    setIsAnimated(true);
    jumpSkateboard(skateboard, setIsAnimated);
    if (name === "back") backJump(skateboard);
    else if (name === "front") frontJump(skateboard, container);
    else middleJump(skateboard);
  };

  return (
    <group>
      {/* <OrbitControls /> */}
      {/* <pointLight position={[1, 1, 1]} intensity={5} /> */}
      <directionalLight intensity={1} position={[0, 3, 2]} />
      <Environment
        files="/hdr/warehouse-256.hdr"
        // preset="forest"
        // background
      />

      {/* <mesh> */}
      {/* <meshBasicMaterial/> */}
      {/* <meshStandardMaterial /> */}
      {/* <boxGeometry /> */}
      {/* </mesh> */}
      {/* <Skateboard3D/> */}
      <group ref={containerRef}>
        <group ref={SkateboardRef} position={[0, 0, -25]}>
          <Hotspot
            position={[0, 2, 58]}
            isVisible={!isAnimated && showHotspot.front}
          />
          <Hotspot
            position={[0, 2, 35]}
            isVisible={!isAnimated && showHotspot.middle}
            color="#588157"
          />
          <Hotspot
            position={[0, 2, 0]}
            isVisible={!isAnimated && showHotspot.back}
            color="#5c677d"
          />

          <group position={[0, 0, 25]}>
            <Skateboard3D />
          </group>
        </group>
      </group>

      <mesh name="front" position={[0, 0, 32]} onClick={onClick}>
        <boxGeometry args={[15, 10, 17]} />
        <meshStandardMaterial visible={false} />
      </mesh>

      <mesh name="middle" position={[0, 0, 5]} onClick={onClick}>
        <boxGeometry args={[15, 10, 37]} />
        <meshStandardMaterial visible={false} />
      </mesh>

      <mesh name="back" position={[0, 0, -27]} onClick={onClick}>
        <boxGeometry args={[15, 10, 27]} />
        <meshStandardMaterial visible={false} />
      </mesh>

      <ContactShadows opacity={1} scale={80} blur={5} position={[0, -10, 0]} />
    </group>
  );
}
