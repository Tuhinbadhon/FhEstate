import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto lg:mt-5 mt-3">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
