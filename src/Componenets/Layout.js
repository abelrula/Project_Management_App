import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./SideBar/Sidebar";
import TopBar from "./TopBar/TopBar";
const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout