import { hoverLink, hoverLinkOut } from "@/animations";

import Link from "next/link";

import c from "../Layout/Layout.module.scss";

const Navbar = () => {
  return (
    <nav className={c.navbar}>
      <Link
        href="/"
        onMouseOver={(e) => hoverLink(e)}
        onMouseOut={(e) => hoverLinkOut(e)}
      >
        jardani
        <div></div>
      </Link>
      <div className={c.navbar_right}>
        <a
          href=""
          onMouseOver={(e) => hoverLink(e)}
          onMouseOut={(e) => hoverLinkOut(e)}
        >
          Email
          <div></div>
        </a>
        <span>— </span>
        <a
          href=""
          onMouseOver={(e) => hoverLink(e)}
          onMouseOut={(e) => hoverLinkOut(e)}
        >
          TW
          <div></div>
        </a>
        <span>— </span>
        <a
          href=""
          onMouseOver={(e) => hoverLink(e)}
          onMouseOut={(e) => hoverLinkOut(e)}
        >
          IG
          <div></div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
