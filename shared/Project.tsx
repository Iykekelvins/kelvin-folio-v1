import { useContext } from "react";

import AppContext from "@/context/AppContext";

import c from "../components/Projects/Projects.module.scss";
import Image from "next/image";

const Project = () => {
  const ctx = useContext<any>(AppContext);
  return (
    <div data-selector="project" className={c.project}>
      <div className={c.project_info}>
        <h4>{ctx.currProject?.title}</h4>
        <p>{ctx.currProject?.info}</p>
      </div>
      <Image alt="" src="/jemima.png" width={868} height={1304} />
    </div>
  );
};

export default Project;
