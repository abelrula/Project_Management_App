import React from "react";
import "./project.css";
import { MdOutlineAppRegistration } from "react-icons/md";
import project from "../../data/projects";
const Projects = ({}) => {
  return (
    <div className="projectCatagory__cards element-with-scroll">
      {project?.map((item, i) => (
        <div
          className="projectCatagory__cards--card"
          key={i}
          style={{ background: `${item.color}` }}
        >
          <span className="iconWrapper">{item.icon}</span>
          <span className="title">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Projects;
