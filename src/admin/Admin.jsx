import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
const Admin = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-[#505050] flex items-start bg-white overflow-x-hidden font-sans w-full">
      <div>
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
        />
      </div>
      <div className="w-full mx-2 sm:mx-0 h-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div className="mb-2 sticky top-3 bg-white">
          <Header
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
