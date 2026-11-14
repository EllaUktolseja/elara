import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import ScrollEffects from "../components/common/ScrollEffects.jsx";

export default function MainLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.key]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <ScrollEffects />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
