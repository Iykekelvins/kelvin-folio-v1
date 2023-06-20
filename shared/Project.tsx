import { useContext } from "react";
import { hoverLink, hoverLinkOut } from "@/animations";

import AppContext from "@/context/AppContext";
import Image from "next/image";

import c from "../components/Projects/Projects.module.scss";

const Project = () => {
  const ctx = useContext<any>(AppContext);
  return (
    <div data-selector="project" className={c.project}>
      <div className={c.project_info}>
        <h4>{ctx.currProject?.title}</h4>
        <span className={`${c.type} type`}>{ctx.currProject?.type}</span>
        <p>{ctx.currProject?.info}</p>
        <a href={ctx.currProject?.url} target="_blank" rel="noreferrer">
          <span
            onMouseOver={(e) => hoverLink(e)}
            onMouseOut={(e) => hoverLinkOut(e)}
          >
            See Live
            <div></div>
          </span>
          ↗
        </a>
      </div>
      <div className={c.project_imgs} data-selector="project-imgs">
        {ctx.currProject?.imgs?.map((img) => (
          <Image
            alt="project image"
            key={img}
            src={!img ? "/beverly.png" : img}
            width={868}
            height={1304}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
