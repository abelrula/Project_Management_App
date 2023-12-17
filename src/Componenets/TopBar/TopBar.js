import React from "react";
import FilterTodo from "../FilterTodo";
import "./topBar.css";
import { FaMessage } from "react-icons/fa6";
import { RiNotification3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BiBell } from "react-icons/bi";
const Topbar = () => {
  return (
    <div className="top">
      <ul>
        <li>Rula</li>
        <li>
          <FilterTodo />
        </li>
        <li>
          <span className="notification">
            <BiBell className="icon" />
            <div></div>
          </span>
          <span>
            <CgProfile />
            <label>abel zewdu</label>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
