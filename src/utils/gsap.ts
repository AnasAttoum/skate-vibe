import * as THREE from "three";
import gsap from "gsap";

export const jumpSkateboard = (skateboard: THREE.Group) => {
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
};

export const rotateSkateboard = (skateboard: THREE.Group) => {
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

export const backJump = (skateboard: THREE.Group) => {
  jumpSkateboard(skateboard);

  rotateSkateboard(skateboard);
};
