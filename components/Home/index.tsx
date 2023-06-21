import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Navbar from "@/shared/Navbar";

import c from "./Home.module.scss";

const Home = () => {
  const text: any = "Kelvin";
  const text2: any = "ochubili";
  const text3: any = "Frontend";
  const text4: any = "Developer";

  useEffect(() => {
    const words = document.querySelectorAll(".word");

    words.forEach((word) => {
      gsap.to(word.querySelectorAll(".char"), {
        transform: "rotateY(0)",
        ease: "power3",
        stagger: 0.05,
        duration: 1,
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={c.home}>
        <h1>
          <span className="word">
            {[...text].map((c, i) => (
              <span key={i} className={"char"}>
                {c}
              </span>
            ))}
          </span>
          <br />{" "}
          <span className="word">
            {[...text2].map((c, i) => (
              <span key={i} className={"char"}>
                {c}
              </span>
            ))}
          </span>{" "}
          <br />{" "}
          <span className="word">
            {[...text3].map((c, i) => (
              <span key={i} className={"char"}>
                {c}
              </span>
            ))}
          </span>
          <br />{" "}
          <span className="word">
            {[...text4].map((c, i) => (
              <span key={i} className={"char"}>
                {c}
              </span>
            ))}
          </span>
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
