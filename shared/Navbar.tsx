import Link from "next/link";
import c from "../Layout/Layout.module.scss";

const Navbar = () => {
  return (
    <nav className={c.navbar}>
      <Link href="/">KelOch</Link>
      <div className={c.navbar_right}>
        <a href="">Email</a>
        <span>— </span>
        <a href="">TW </a>
        <span>— </span>
        <a href="">IG</a>
      </div>
    </nav>
  );
};

export default Navbar;
