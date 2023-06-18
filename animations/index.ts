import { gsap } from "gsap";

export const hoverLink = (e) => {
  const div = e.currentTarget.querySelector("div");

  gsap.to(div, {
    width: "100%",
    ease: "power3",
    left: 0,
    right: "unset",
  });
};

export const hoverLinkOut = (e) => {
  const div = e.currentTarget.querySelector("div");

  gsap.to(div, {
    width: 0,
    ease: "power3",
    right: 0,
    left: "unset",
  });
};

export const displayAbtTl = gsap.timeline({ paused: true });
