import { useRouter } from "next/router";
import c from "../Layout/Layout.module.scss";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Footer = () => {
  const router = useRouter();

  const footerOneRef = useRef(null);

  const openAbt = () => {
    const aboutTl = gsap.timeline();

    aboutTl
      .to(footerOneRef.current, {
        rotateX: "-180deg",
        ease: "power3",
        duration: 1,
        pointerEvents: "none",
      })

      .to(
        '[data-selector="footer-two"]',
        {
          rotateX: 0,
          zIndex: 4,
        },
        "-=1"
      );
  };

  const closeAbt = () => {
    const aboutTl = gsap.timeline();
    aboutTl
      .to(footerOneRef.current, {
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
        },
        "-=1"
      );
  };

  return (
    <>
      <footer
        className={c.footer}
        data-selector="footer-one"
        ref={footerOneRef}
      >
        <div className={c.footer_inner}>
          <button onClick={() => openAbt()}>About</button>
          <Link href="/projects">Pojects</Link>
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
