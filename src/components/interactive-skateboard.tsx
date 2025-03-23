"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from '@react-three/drei'


export default function InteractiveSkateboard() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: [1.5, 1, 1.4], fov: 55 }}
      >
        <Suspense fallback={<>Loading...</>}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <group>
      {/* <pointLight position={[1, 1, 1]} intensity={5} /> */}
      <Environment preset="forest" />

      <mesh>
        {/* <meshBasicMaterial/> */}
        <meshStandardMaterial />
        <boxGeometry />
      </mesh>
    </group>
  );
}
