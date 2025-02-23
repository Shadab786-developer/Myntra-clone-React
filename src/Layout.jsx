import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HeaderBag from "./component/Header/HeaderBag";
import FooterBag from "./component/Footer/FooterBag";

// Layout component that wraps around other components
function Layout() {
  const location = useLocation(); // Get the current location
  const isBagPage = location.pathname === "/Bag"; // Check if the current page is the Bag page

  return (
    <>
      {/* Render HeaderBag if on Bag page, otherwise render Header */}
      {isBagPage ? <HeaderBag /> : <Header />}
      <Outlet /> {/* Render child components */}
      {/* Render FooterBag if on Bag page, otherwise render Footer */}
      {isBagPage ? <FooterBag /> : <Footer />}
    </>
  );
}

export default Layout;
