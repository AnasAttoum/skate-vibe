import * as THREE from "three";
import gsap from "gsap";

const jumpSkateboard = (skateboard: THREE.Group) => {
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

const basicRotateSkateboard = (skateboard: THREE.Group) => {
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

const RotateZ360Skateboard = (skateboard: THREE.Group) => {
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
    .to(
      skateboard.rotation,
      {
        z: `+=${Math.PI * 2}`,
        duration: 0.7,
        ease: "none",
      },
      0.3
    )
    .to(skateboard.rotation, {
      x: 0,
      duration: 0.15,
      ease: "none",
    });
};

const RotateY360Skateboard = (skateboard: THREE.Group, container: THREE.Group) => {
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
    .to(
      container.rotation,
      {
        y: `+=${Math.PI * 2}`,
        duration: 0.6,
        ease: "none",
      },
      0.3
    )
    .to(skateboard.rotation, {
      x: 0,
      duration: 0.15,
      ease: "none",
    });
};

export const backJump = (skateboard: THREE.Group) => {
  jumpSkateboard(skateboard);

  basicRotateSkateboard(skateboard);
};

export const middleJump = (skateboard: THREE.Group) => {
  jumpSkateboard(skateboard);

  RotateZ360Skateboard(skateboard);
};

export const frontJump = (skateboard: THREE.Group, container: THREE.Group) => {
  jumpSkateboard(skateboard);

  RotateY360Skateboard(skateboard, container);
};
