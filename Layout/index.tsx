import { useRouter } from "next/router";

import Footer from "@/shared/Footer";
import About from "@/components/About";
import Project from "@/shared/Project";

const Layout = ({ children }) => {
  const router = useRouter();

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
      {router.pathname === "/projects" && <Project />}
      <Footer />
    </main>
  );
};

export default Layout;
