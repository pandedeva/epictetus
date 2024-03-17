import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="patrick min-h-screen min-w-fit bg-gradient-to-b from-gray-600 to-gray-900 text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
