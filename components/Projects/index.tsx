import { useContext } from "react";
import { projects } from "@/utils";
import { gsap } from "gsap";
import { hoverLink, hoverLinkOut } from "@/animations";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import AppContext from "@/context/AppContext";

import c from "./Projects.module.scss";

const Projects = () => {
  const ctx = useContext<any>(AppContext);
  const text: any = "Featured Projects";

  const isTablet = useMediaQuery("(max-width: 768px)");

  const openProject = (pjt) => {
    const projectTl = gsap.timeline();
    if (!isTablet) {
      ctx.setCurrProject(pjt);

      projectTl
        .to("[data-selector='projects']", {
          opacity: 0.1,
          duration: 1,
          ease: "power3",
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
        .to(
          [
            "[data-selector='project'] div h4",
            "[data-selector='project'] div .type",
            "[data-selector='project'] div p",
            "[data-selector='project'] div a",
          ],
          {
            x: 0,
            duration: 0.8,
            ease: "power3",
            stagger: 0.05,
          },
          "-=1"
        )
        .fromTo(
          "[data-selector='project-imgs'] ",
          {
            x: "100%",
          },
          {
            x: 0,
            duration: 0.8,
            ease: "power3",
            stagger: 0.05,
          },
          "-=1"
        )
        .to(
          "[data-selector='project']",
          {
            pointerEvents: "all",
          },
          "-=3"
        );
    }
  };

  return (
    <div className={c.projects} data-selector="projects">
      <div className={c.projects_bg}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>
        {[...text].map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </h1>
      <ul>
        {projects.map((pjt) => (
          <li key={pjt.title} onClick={() => openProject(pjt)}>
            <h4>{pjt.title}</h4>
            <span>{pjt.type}</span>
            <p>{pjt.info}</p>
            <a href={pjt.url} target="_blank" rel="noreferrer">
              <span
                onMouseOver={(e) => hoverLink(e)}
                onMouseOut={(e) => hoverLinkOut(e)}
              >
                See Live
                <div></div>
              </span>
              ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
