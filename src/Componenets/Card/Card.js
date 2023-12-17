import React, { useState } from "react";
import { memo } from "react";
import { AiFillCheckCircle, AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import ViewCard from "../Modal/ViewCard/ViewCard";
import EditCard from "../Modal/EditCard/EditCard";
import { useDeleteTodoMutation, useEditTodoMutation } from "../../api/apiSlice";
import TimeCreatedAt from "../Time/TimeCreatedAt";
import { CgTrash } from "react-icons/cg";
import "./card.css";
// import TimeExpired from './TimeExpired';

let Card = ({ item }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const [todo, setTodo] = useState(item);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  function handleCheck() {
    setTodo((prev) => ({ ...prev, completed: !todo.completed }));
    editTodo(todo);
  }
  return (
    <div className="cardContainer">
      <div className="Card" style={{ background: `${item.tagColor}` }}>
        <div className="Card__actions">
          <button className="edit" onClick={() => setShowEditModal(true)}>
            {" "}
            <AiTwotoneEdit color="black" />
          </button>
          <p className=" ">
            {item.title.length > 15
              ? item.title.substring(0, 20) + "..."
              : item.title}
          </p>
          <button
            className="delete"
            onClick={() => deleteTodo({ id: item.id })}
          >
            {" "}
            <CgTrash color="red" />{" "}
          </button>
        </div>
        <div onClick={() => setShowModal(true)}>
          <p
            style={{
              textDecoration: item.completed && "line-through white 2px",
            }}
            className="Card__todo"
          >
            {item.description.length > 60
              ? item.description.substring(0, 60) + "..."
              : item.description}
          </p>
        </div>
        <div
          onClick={() => handleCheck()}
          className="CardEdit__checkbox"
          style={{
            background: item.completed && "#008000",
            color: item.completed && "white",
          }}
        >
          {item.completed ? (
            <AiFillCheckCircle fontSize={14} />
          ) : (
            <BiCircle fontSize={14} />
          )}
          {!item.completed && " Uncompleted "} {item.completed && "Completed"}
        </div>
        <div className="Card__duration">
          <TimeCreatedAt date={item.createdAt} />
        </div>
      </div>
      <div className={showModal ? "openModal" : "closeModal"}>
        {showModal ? (
          <ViewCard
            showModal={showModal}
            setShowModal={setShowModal}
            id={item.id}
            setShowEditModal={setShowEditModal}
          />
        ) : null}
      </div>
      <div className={showEditModal ? "showEditModal" : "editCloseModal"}>
        {showEditModal ? (
          <EditCard
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            id={item.id}
          />
        ) : null}
      </div>
    </div>
  );
};
Card = memo(Card);

export default Card;
