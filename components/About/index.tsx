import { hoverLink, hoverLinkOut } from "@/animations";

import Image from "next/image";

import c from "./About.module.scss";

const About = () => {
  return (
    <div className={c.about} data-selector="about">
      <div className={c.about_hero}>
        <Image
          src="/bg-img-2.png"
          alt="background image"
          width={968}
          height={643}
        />
        <h2>about:blank™</h2>
        <h2>
          about: <br /> blank™
        </h2>
      </div>
      <div className={c.about_info}>
        <div className={c.about_info_left}>
          <p>
            I am Kelvin Ochubili, a developer based in Lagos, Nigeria. I love
            having fun with the web, creating things that is good for the eyes
            to see, and to use.
          </p>
          <p>
            I take great pride in my ability to blend aesthetics with
            functionality, creating visually stunning websites and applications
            that not only catch the eye but also provide a seamless user
            experience. From conceptualizing the initial design to implementing
            responsive layouts and optimizing performance, I meticulously work
            through every stage of development to deliver exceptional results.
          </p>
        </div>
        <div className={c.about_info_right}>
          <div className={c.section}>
            <h4>Experience</h4>
            <ul className={c.exp}>
              <li>
                <span>Frontend Developer Intern</span>
                <span>BITPILER, Jan &apos;22 - Apr &apos;22</span>
              </li>
              <li>
                <span>Frontend Developer Intern</span>
                <span>BITPILER, Jan &apos;22 - Apr &apos;22</span>
              </li>
              <li>
                <span>Frontend Developer Intern</span>
                <span>BITPILER, Jan &apos;22 - Apr &apos;22</span>
              </li>
            </ul>
          </div>
          <div className={c.section}>
            <h4>Tools</h4>
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>JAVASCRIPT</li>
              <li>REACTJS</li>
              <li>NEXTJS</li>
              <li>GIT & GITHUB</li>
              {/* <li></li> */}
            </ul>
          </div>
          <div className={c.section}>
            <h4>Links</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/iykekelvins"
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={(e) => hoverLink(e)}
                  onMouseOut={(e) => hoverLinkOut(e)}
                >
                  Github↗
                  <div></div>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/iykekelvins"
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={(e) => hoverLink(e)}
                  onMouseOut={(e) => hoverLinkOut(e)}
                >
                  Twitter↗
                  <div></div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kelvinochubili@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={(e) => hoverLink(e)}
                  onMouseOut={(e) => hoverLinkOut(e)}
                >
                  Email↗
                  <div></div>
                </a>
              </li>
            </ul>
          </div>
          <div className={c.section}>
            <h4>Design</h4>
            <a
              href="https://twitter.com/olacodes"
              target="_blank"
              rel="noreferrer"
              onMouseOver={(e) => hoverLink(e)}
              onMouseOut={(e) => hoverLinkOut(e)}
            >
              Olacodes↗
              <div></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
