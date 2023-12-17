import React from "react";
import { useGetTodosQuery } from "../../api/apiSlice";
import "./todoTask.css";
import UrgentTask from "../urgentTask/UrgentTask";
import TeamMembers from "../teamMembers/TeamMembers";
import CommentSection from "../commentSection/CommentSection";
import AssignedTask from "../Assignedtask/AssignedTask";
// import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/src/Calendar.css";
import {
  ComposedChart,
  Line,
  // Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import UserProgress from "../userProgress/UserProgress";

const TodoTask = () => {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
    },
  ];
  // const date = new Date();
  const { data: todos, isLoading, isSuccess } = useGetTodosQuery();
  return (
    <div className="TodayTodo">
      {isLoading && <h1> Loading...</h1>}
      <div className="TodayTodo__view">
        {/* <Calendar value={date} /> */}
        <UrgentTask />
        <AssignedTask title="Task I've Assigned" />
        <div className="bargraph">
          <ComposedChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </div>
        <TeamMembers />
        <UserProgress />
        <CommentSection />
      </div>
    </div>
  );
};

export default TodoTask;
