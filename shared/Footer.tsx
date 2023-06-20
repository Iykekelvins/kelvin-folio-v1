import { useRouter } from "next/router";
import { hoverLink, hoverLinkOut } from "@/animations";
import { gsap } from "gsap";

import Link from "next/link";

import c from "../Layout/Layout.module.scss";

const Footer = () => {
  const router = useRouter();

  const displayAbtTl = gsap.timeline();

  const openAbt = () => {
    const aboutTl = gsap.timeline();
    displayAbtTl.clear();

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
          width: "8rem",
        },
        "-=1"
      )

      .to(
        '[data-selector="footer-two"]',
        {
          rotateX: 0,
          zIndex: 4,
          duration: 1,
          width: "8rem",
        },
        "-=1.2"
      )
      .to('[data-selector="footer-one"] button', {
        pointerEvents: "none",
      }),
      "-=2";
  };

  const closeAbt = () => {
    if (router.pathname === "/") {
      const aboutTl = gsap.timeline();

      aboutTl
        .to('[data-selector="footer-one"]', {
          rotateX: 0,
          ease: "power3",
          duration: 1,
          pointerEvents: "all",
          width: "12rem",
        })
        .to(
          '[data-selector="footer-two"]',
          {
            rotateX: "180deg",
            zIndex: 3,
            duration: 1,
            width: "12rem",
          },
          "-=1.1"
        )
        .to(
          '[ data-selector="about"]',
          {
            y: "100%",
            ease: "power3.inOut",
            duration: 1,
          },
          "-=1.3"
        )
        .to('[data-selector="footer-one"] button', {
          pointerEvents: "all",
        });
    } else {
      const projectTl = gsap.timeline();
      projectTl
        .to(
          [
            "[data-selector='project'] div h4",
            "[data-selector='project'] div .type",
            "[data-selector='project'] div p",
            "[data-selector='project'] div a",
          ],
          {
            x: "-100%",
            duration: 0.8,
            ease: "power3.inOut",
            stagger: -0.05,
          }
          // "-=1"
        )

        .to(
          "[data-selector='project-imgs'] ",
          {
            x: "100%",
            duration: 0.8,
            ease: "power3.inOut",
            stagger: 0.05,
          },
          "-=1"
        )

        .to(
          '[data-selector="footer-one"]',
          {
            rotateX: 0,
            ease: "power3",
            duration: 1,
            pointerEvents: "all",
            width: "12rem",
          },
          "-=0.8"
        )
        .to(
          '[data-selector="footer-two"]',
          {
            rotateX: "180deg",
            zIndex: 3,
            duration: 1,
            width: "12rem",
          },
          "-=1.1"
        )

        .to(
          "[data-selector='projects']",
          {
            opacity: 1,
            duration: 1,
            ease: "power3",
          },
          "-=1"
        )
        .to(
          "[data-selector='project']",
          {
            pointerEvents: "none",
          },
          "-=3"
        );
    }
  };

  const hoverInAbt = () => {
    window.scrollTo(0, 0);

    displayAbtTl.to('[ data-selector="about"]', {
      y: "90%",
      ease: "power3",
      duration: 0.8,
    });
    displayAbtTl.play();
  };

  return (
    <>
      <footer className={c.footer} data-selector="footer-one">
        <div className={c.footer_inner}>
          {router.pathname === "/" ? (
            <button
              onClick={() => openAbt()}
              onMouseOver={(e) => {
                hoverLink(e);
                hoverInAbt();
              }}
              onMouseOut={(e) => {
                hoverLinkOut(e);
                displayAbtTl.reverse();
              }}
            >
              About
              <div></div>
            </button>
          ) : (
            <Link
              href="/"
              onMouseOver={(e) => hoverLink(e)}
              onMouseOut={(e) => hoverLinkOut(e)}
            >
              Home
              <div></div>
            </Link>
          )}
          <Link
            className={router.pathname === "/projects" ? c.active : ""}
            href="/projects"
            onMouseOver={(e) => hoverLink(e)}
            onMouseOut={(e) => hoverLinkOut(e)}
          >
            Projects
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
