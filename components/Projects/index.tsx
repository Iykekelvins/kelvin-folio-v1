import { useContext } from "react";
import { projects } from "@/utils";
import { gsap } from "gsap";

import AppContext from "@/context/AppContext";

import c from "./Projects.module.scss";

const Projects = () => {
  const ctx = useContext<any>(AppContext);
  const text: any = "Featured Projects";

  const openProject = (pjt) => {
    ctx.setCurrProject(pjt);

    const projectTl = gsap.timeline();

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
        "[data-selector='project'] img",
        {
          x: 0,
          duration: 0.8,
          ease: "power3",
        },
        "-=1"
      );
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
      <h1 className="title">
        {[...text].map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </h1>
      <ul>
        {projects.map((pjt) => (
          <li key={pjt.title} onClick={() => openProject(pjt)}>
            {pjt.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
