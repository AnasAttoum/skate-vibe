"use client";

import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Skateboard3D } from "./skateboard-3d";
import gsap from "gsap";

export default function InteractiveSkateboard() {
  return (
    <div className="absolute inset-0 flex justify-center items-center border">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: [40, 25, 50], fov: 90 }}
      >
        <Suspense fallback={<>Loading...</>}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  const SkateboardRef = useRef<THREE.Group>(null);

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();

    const skateboard = SkateboardRef.current;
    if (!skateboard) return;

    const { name } = event.object;

    gsap
      .timeline()
      .to(skateboard.position, {
        y: 25,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.25,
      })
      .to(skateboard.position, {
        y: 0,
        duration: 0.4,
        ease: "power2.in",
      });

    gsap
      .timeline()
      .to(skateboard.rotation, {
        x: -0.6,
        duration: 0.2,
        ease: "none",
      })
      .to(skateboard.rotation, {
        x: 0.4,
        duration: 0.8,
        ease: "power2.in",
      })
      .to(skateboard.rotation, {
        x: 0,
        duration: 0.15,
        ease: "none",
      });
  };

  return (
    <group>
      <OrbitControls />
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
      <group ref={SkateboardRef} position={[0, 0, -25]}>
        <group position={[0, 0, 25]}>
          <Skateboard3D />
        </group>
      </group>
      <mesh name="middle" onClick={onClick}>
        <boxGeometry args={[15, 10, 80]} />
        <meshStandardMaterial visible={false} />
      </mesh>
      <ContactShadows
        opacity={1}
        scale={80}
        blur={5}
        position={[0, -10, 0]}
      />
    </group>
  );
}
