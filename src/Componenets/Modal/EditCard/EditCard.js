import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./EditCard.css";
import {
  useEditTodoMutation,
  useDeleteTodoMutation,
} from "../../../api/apiSlice";
// import TimeCreatedAt from './Componenets/TimeCreatedAt';
const EditCard = (props) => {
  const { setShowEditModal, id } = props;
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const inputRef = useRef();
  useEffect(() => {
    async function fetchtodo() {
      const response = await fetch(`http://localhost:3500/todo/${id}`);
      const data = await response.json();
      setTodo(data);
      setTitle(data.title);
      setDescription(data.description);
    }
    fetchtodo();
  }, [id]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(todo);

  async function handleSave(id) {
    //    await fetch( `http://localhost:3500/todo/${ id }`,
    //   {
    //     method: "PATCH",
    //     headers:{"Content-Type":"application/json"},
    //     body: JSON.stringify( { todo: todoText } )

    // }
    //   ).finally( () =>
    // console.log("hello"))
    // setShowEditModal(false)
    editTodo({ id, title, description });
    setShowEditModal(false);
  }
  return (
    <div className="Todo">
      <div className="Todo__actions_buttons">
        <button
          className="Todo__actions_buttons--delete"
          onClick={() => {
            deleteTodo(todo.id);
            setShowEditModal(false);
          }}
        >
          {" "}
          <AiFillDelete color="red" />{" "}
        </button>
      </div>
      <div className="Todo__inputCont">
        <label>Title :-</label>
        <input
          className="Todo__inputCont--title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="Todo__inputCont">
        <label>Description :-</label>{" "}
        <textarea
          ref={inputRef}
          className="Todo__inputCont--description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        >
          {" "}
        </textarea>
      </div>
      {/* <div className='Todo__duration'>
                       <TimeCreatedAt date={ item.date } />
                    <TimeExpired date={ item.date } /> 
                   </div > */}
      <div className="Todo__actions_modal">
        <button
          className="Todo__actions_modal--save"
          onClick={() => setShowEditModal(false)}
        >
          close
        </button>
        <button
          className="Todo__actions_modal--close"
          onClick={() => handleSave(id)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditCard;
