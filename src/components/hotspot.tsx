import * as THREE from "three";
import { Billboard } from "@react-three/drei";
import { useRef } from "react";

type Props = {
  position: [number, number, number];
  isVisible: boolean;
  color?: string;
};

export default function Hotspot({
  position,
  isVisible,
  color = "#dda15e",
}: Props) {
  const hotspotRef = useRef<THREE.Mesh>(null);

  return (
    <Billboard follow position={position}>
      <mesh visible={isVisible}>
        <circleGeometry />
        <meshBasicMaterial color={color} transparent opacity={1} />
      </mesh>

      <mesh
        ref={hotspotRef}
        visible={isVisible}
        onPointerOver={() => {
          if (!isVisible) return;
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <circleGeometry args={[1.5]} />
        <meshStandardMaterial color={color} transparent opacity={0.5} />
      </mesh>
    </Billboard>
  );
}
