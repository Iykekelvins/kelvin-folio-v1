import Image from "next/image";

import c from "./Home.module.scss";
import Navbar from "@/shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={c.home}>
        <h1>
          Kelvin <br /> ochubili <br /> Frontend <br /> Developer
        </h1>
        <Image
          src="/bg-img.png"
          alt="background image"
          height={836}
          width={1376}
          className={c.home_bg}
        />
      </div>
    </>
  );
};

export default Home;
