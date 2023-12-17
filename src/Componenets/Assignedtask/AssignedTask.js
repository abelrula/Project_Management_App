import React, { useState } from "react";
import { MdDonutLarge, MdUpdate } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import "./assignedTasks.css";

const AssignedTask = ({ title }) => {
  const [workProgress, setWorkProgress] = useState("Upcoming");

  const progressTypes = [
    {
      icon: <MdUpdate fill="#d7a66f" />,
      title: "Upcoming",
    },
    {
      icon: <MdDonutLarge fill="#d7a66f" />,
      title: "Overdue",
    },
    {
      icon: <RiCheckboxCircleFill fill="#d7a66f" />,
      title: "Completed",
    },
  ];
  // console.log(workProgress);
  return (
    <div className="AssignedTask">
      <h3>{title}</h3>
      <div className="AssignedTask__situation">
        <>
          <div className="AssignedTask__situation-types">
            {progressTypes.map((type, i) => (
              <li
                className={workProgress === type.title && "workProgress"}
                onClick={() => setWorkProgress(type.title)}
                key={i}
              >
                {type.icon}
                <label>{type.title}</label>
              </li>
            ))}
          </div>
          <div className="AssignedTask__situation--description">
            {workProgress === "Upcoming" && (
              <>
                <div className="AssignedTask__situation--description--list">
                  <span>
                    <MdRadioButtonUnchecked className="icon" />
                    <p>Over all the risk of the project</p>
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="avatar"
                  />
                </div>
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button>Assign Task</button>
                </div>
              </>
            )}
            {workProgress === "Overdue" && (
              <>
                <div className="AssignedTask__situation--description--list">
                  <span>
                    <MdRadioButtonUnchecked className="icon" />
                    <p>Over all the risk of the project</p>
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D"
                    alt="avatar"
                  />
                </div>
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button>Assign Task</button>
                </div>
              </>
            )}
            {workProgress === "Completed" && (
              <>
                <div className="AssignedTask__situation--description--list">
                  <span>
                    <MdRadioButtonUnchecked className="icon" />
                    <p>Completed all the risk of the project</p>
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="avatar"
                  />
                </div>
                <div className="AssignedTask__situation--description--footer">
                  <p>tasks you assigned will appear here</p>
                  <button>Assign Task</button>
                </div>
              </>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default AssignedTask;
