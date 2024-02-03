import Stickywall from "../../Componenets/Stickywall/Stickywall";
import Form from "../../Componenets/Form/Form";
import { useGetTodosQuery } from "../../api/apiSlice";
import "./myTasks.css";
import AssignedTask from "../../Componenets/Assignedtask/AssignedTask";
import UserProgress from "../../Componenets/userProgress/UserProgress";
import Header from "../../Componenets/Header/Header";

// import ProgressBar from "../../Componenets/progressLineChart/progressBar";

const MyTask = () => {
  const { data: todos, isLoading, isSuccess } = useGetTodosQuery();

  return (
    <>
      <Header title="My Tasks" />
      <div className="MyTasks">
        <div>
          <AssignedTask title="My Task's" />
          <UserProgress />
          <Stickywall />
        </div>
        <Form />
      </div>
    </>
  );
};

export default MyTask;
