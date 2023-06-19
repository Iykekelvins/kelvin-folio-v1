import { useRouter } from "next/router";
import { useContext } from "react";

import AppContext from "@/context/AppContext";
import Footer from "@/shared/Footer";
import About from "@/components/About";
import Project from "@/shared/Project";

const Layout = ({ children }) => {
  const router = useRouter();
  const ctx = useContext<any>(AppContext);

  // page transition on navigation buttons click event
  // useEffect(() => {
  //   router.beforePopState((event) => {
  //     const transitionTl = gsap.timeline();

  //     //  page transition

  //     return false;
  //   });

  //   return () => {
  //     router.beforePopState(() => {
  //       return true;
  //     });
  //   };
  // }, [router]);

  return (
    <main>
      {children}
      {router.pathname !== "/projects" && <About />}
      {<Project />}
      <Footer />
    </main>
  );
};

export default Layout;
