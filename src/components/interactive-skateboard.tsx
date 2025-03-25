"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from '@react-three/drei'
import { Skateboard3D } from "./skateboard-3d";


export default function InteractiveSkateboard() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: [0, 0, 0]
          // , fov: 55 
        }}
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
      <OrbitControls/>
      {/* <pointLight position={[1, 1, 1]} intensity={5} /> */}
      <Environment preset="forest"
      // background 
      />

      {/* <mesh> */}
        {/* <meshBasicMaterial/> */}
        {/* <meshStandardMaterial /> */}
        {/* <boxGeometry /> */}
      {/* </mesh> */}

      <Skateboard3D/>
    </group>
  );
}
