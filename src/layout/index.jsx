import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="py-[10px] bg-slate-100">
          <Navbar />
        </nav>

        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </header>
    </>
  );
};

export default Layout;
