"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Skateboard3D } from "./skateboard-3d";

export default function InteractiveSkateboard() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
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
      <Skateboard3D />
      <ContactShadows opacity={0.6} />
    </group>
  );
}
