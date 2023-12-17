import React, { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import "./ViewCard.css";
import {
  useEditTodoMutation,
  useDeleteTodoMutation,
} from "../../../api/apiSlice";
import TimeExpired from "../../Time/TimeExpired";
import TimeCreatedAt from "../../Time/TimeCreatedAt";
const ViewCard = (props) => {
  const { setShowEditModal, id, setShowModal } = props;
  const [todo, setTodo] = useState([]);
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();

  useEffect(() => {
    async function fetchtodo() {
      const response = await fetch(`http://localhost:3500/todo/${id}`);
      const data = await response.json();
      setTodo(data);
    }
    fetchtodo();
  }, [id]);
  return (
    <>
      <div className="ViewCard" style={{ background: todo.tagColor }}>
        <div className="ViewCard__actions_buttons">
          <button
            className="ViewCard__actions_buttons--edit"
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            <AiTwotoneEdit color="white" />
          </button>
          <div
            onClick={() => editTodo({ id: todo.id, completed: todo.completed })}
            className="ViewCard__checkbox"
          >
            {todo.completed ? (
              <AiFillCheckCircle fontSize={20} />
            ) : (
              <BiCircle fontSize={20} />
            )}{" "}
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
          <button
            className="ViewCard__actions_buttons--delete"
            onClick={() => deleteTodo(todo.id)}
          >
            {" "}
            <AiFillDelete color="red" />{" "}
          </button>
        </div>

        <p className="ViewCard__title">{todo.title}</p>
        <p className="ViewCard__description">{todo.description}</p>
        <div className="ViewCard__duration">
          <TimeCreatedAt date={todo.createdAt} />
          <TimeExpired date={todo.date} />
        </div>
        <div className="ViewCard__actions_modal">
          <button
            className="ViewCard__actions_modal--close"
            onClick={() => setShowModal(false)}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewCard;
