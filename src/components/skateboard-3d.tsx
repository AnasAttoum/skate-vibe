import * as THREE from "three";
import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
  };
  materials: {
    TexturedTable: THREE.MeshStandardMaterial;
    greenPlasticTires: THREE.MeshStandardMaterial;
    whiteAxle: THREE.MeshStandardMaterial;
    yellowmetal: THREE.MeshStandardMaterial;
    blackmetal: THREE.MeshStandardMaterial;
  };
};

export function Skateboard3D() {
  const { nodes, materials } = useGLTF("/glb/skateboard.glb") as unknown as GLTFResult;

  // const gripTapeDiffuse = useTexture("/assets/background/texture/griptape-diffuse.webp");
  // const gripTapeRoughness = useTexture("/assets/background/texture/griptape-roughness.webp");
  // const logo = useTexture("/assets/icons/skate-vibe.png");
  // // logo.flipY = false

  // const gripTapeMaterial = useMemo(() => {
  //   const material = new THREE.MeshStandardMaterial({
  //     // map: gripTapeDiffuse,
  //     map: logo,
  //     bumpMap: gripTapeRoughness,
  //     roughnessMap: gripTapeRoughness,
  //     bumpScale: 3.5,
  //     roughness: 0.8,
  //     color: "#777",
  //   });
  //   if (gripTapeDiffuse) {
  //     gripTapeDiffuse.wrapS = THREE.RepeatWrapping;
  //     gripTapeDiffuse.wrapT = THREE.RepeatWrapping;
  //     gripTapeDiffuse.repeat.set(9, 9);
  //     gripTapeDiffuse.needsUpdate = true;

  //     gripTapeRoughness.wrapS = THREE.RepeatWrapping;
  //     gripTapeRoughness.wrapT = THREE.RepeatWrapping;
  //     gripTapeRoughness.repeat.set(9, 9);
  //     gripTapeRoughness.needsUpdate = true;

  //     gripTapeRoughness.anisotropy = 8;
  //   }
  //   return material;
  // }, []);

  const metalMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      color: "#ddd",
      metalness: 0.5,
      roughness: 0,
    });
    return material;
  }, []);

  const wheelMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      color:'#777',
    });
    return material;
  }, []);

  return (
    <group dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="skateboardobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.TexturedTable}
              // material={gripTapeMaterial}
            />
            {/* 4 wheels */}
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              // material={materials.greenPlasticTires}
              material={wheelMaterial}
            />
            {/* white metal */}
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              // material={materials.whiteAxle}
              material={metalMaterial}
            />
            {/* colored metal */}
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.yellowmetal}
            />
            {/* black metal */}
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.blackmetal}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/skateboard.glb");
