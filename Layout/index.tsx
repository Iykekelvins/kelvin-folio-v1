import { useRouter } from "next/router";
import { useEffect } from "react";

import Footer from "@/shared/Footer";

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
      <Footer />
    </main>
  );
};

export default Layout;
