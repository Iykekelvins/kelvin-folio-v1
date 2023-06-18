import { useRouter } from "next/router";
import { hoverLink, hoverLinkOut } from "@/animations";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import c from "../Layout/Layout.module.scss";

const Footer = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const openAbt = () => {
    const aboutTl = gsap.timeline();
    setClicked(true);
    aboutTl
      .to('[ data-selector="about"]', {
        y: 0,
        ease: "power3",
        duration: 1,
      })
      .to(
        '[data-selector="footer-one"]',
        {
          rotateX: "-180deg",
          ease: "power3",
          duration: 1,
          pointerEvents: "none",
        },
        "-=1"
      )

      .to(
        '[data-selector="footer-two"]',
        {
          rotateX: 0,
          zIndex: 4,
          duration: 1,
        },
        "-=1.2"
      );
  };

  const closeAbt = () => {
    const aboutTl = gsap.timeline();
    aboutTl
      .to('[data-selector="footer-one"]', {
        rotateX: 0,
        ease: "power3",
        duration: 1,
        pointerEvents: "all",
      })
      .to(
        '[data-selector="footer-two"]',
        {
          rotateX: "180deg",
          zIndex: 3,
          duration: 1,
        },
        "-=1"
      )
      .to(
        '[ data-selector="about"]',
        {
          y: "100%",
          ease: "power3",
          duration: 1,
        },
        "-=1.2"
      );
  };

  const displayAbtTl = gsap.timeline();

  const hoverInAbt = () => {
    displayAbtTl.to('[ data-selector="about"]', {
      y: "90%",
      ease: "power3",
      duration: 1,
    });
    displayAbtTl.play();
  };

  return (
    <>
      <footer className={c.footer} data-selector="footer-one">
        <div className={c.footer_inner}>
          <button
            onClick={() => openAbt()}
            onMouseOver={(e) => {
              hoverLink(e);
              hoverInAbt();
            }}
            onMouseOut={(e) => {
              hoverLinkOut(e);
              // displayAbtTl.reverse();
            }}
          >
            About
            <div></div>
          </button>
          <Link
            href="/projects"
            onMouseOver={(e) => hoverLink(e)}
            onMouseOut={(e) => hoverLinkOut(e)}
          >
            Pojects
            <div></div>
          </Link>
        </div>
      </footer>
      <footer
        className={`${c.footer} ${c.footer_two}`}
        data-selector="footer-two"
      >
        <div className={c.footer_inner} onClick={() => closeAbt()}>
          <button>Close</button>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25732 16.2426L16.7426 7.75733"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.7426 16.2427L8.25732 7.75739"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
