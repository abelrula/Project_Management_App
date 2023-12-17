import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { usePostTodoMutation } from "../../api/apiSlice";
import "./calander.css";
import { nanoid } from "@reduxjs/toolkit";
import { HiCalendar } from "react-icons/hi";
import "./form.css";
import Calendar from "react-calendar";
const Form = () => {
  const date = new Date();
  const [value, onChange] = useState(date);
  const [postTodo] = usePostTodoMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [personal, setPersonal] = useState(false);
  const [buisnes, setBuisnes] = useState(false);
  const [selected, setSelected] = useState(null);
  const [tagColor, setTagColor] = useState("");
  const colors = ["#FFD801", "#F6BE00", "#B5EAAA", "#FAFAD2", "#FFDB58"];
  //  const dateFormat = parseISO( value )
  //  const timePeriod = formatDistanceToNow( dateFormat )
  //  console.log(buisnes,personal,postTodo,value,title,description);
  console.log(value.toString().slice(0, 16));
  // useEffect( () =>
  // {
  //      async function fetchTodo (){
  //      const response = await fetch( "http://localhost:3500/todo" )
  //      const data = await response.json()
  //      setTodos(data)
  //   }
  //   fetchTodo()
  //   },[todo])

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const id = todos.length ? todo[todos.length - 1].id+ 1 : 1;
  //   fetch( "http://localhost:3500/todo", {
  //        method: "POST",
  //        headers:{"Content-Type": "application/json" },
  //     body: JSON.stringify( {
  //         id:nanoid(),
  //         todo,
  //         completed:false,
  //         date: new Date().toISOString()
  //     } ),
  //        })
  //   setTodo("")
  // }
  //     function handleSubmit(e) {
  //     e.preventDefault()
  //   // const id = todos.length ? todo[todos.length - 1].id+ 1 : 1;
  //    postTodo({id:nanoid(),todo,completed:false})
  //    setTodo("")
  // }
  function handleSubmit(e) {
    e.preventDefault();
    postTodo({
      id: nanoid(),
      title: title,
      description: description,
      personal: personal,
      buisness: buisnes,
      completed: false,
      tagColor: tagColor,
      date: value.toString().slice(0, 16),
      createdAt: new Date(),
    });
  }

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            id="title"
            className="Form__input"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Shopping list"
          />
        </div>
        <div>
          <textarea
            type="text"
            id="description"
            value={description}
            className="Form__textarea"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="1.tomato 🍅
             2.peanut 🥜
             3. boccolli🥦
             4.milk 🥛"
          />
        </div>
        <div className="Form__type">
          <div
            onClick={() => {
              setPersonal((prev) => !prev);
              setBuisnes(false);
              setSelected("personal");
            }}
            className="Form__type--all Form__type--personal"
            style={{
              background: selected === "personal" && "#183de2",
              color: selected === "personal" && "white",
            }}
          >
            Personal
          </div>
          <div
            onClick={() => {
              setBuisnes((prev) => !prev);
              setSelected("buisness");
              setPersonal(false);
            }}
            className="Form__type--all Form__type--buisness"
            style={{
              background: selected === "buisness" && "#183de2",
              color: selected === "buisness" && "white",
            }}
          >
            Buisness
          </div>
        </div>
        <div className="Form__date">
          <HiCalendar className="calanderIcon" />{" "}
          <Calendar value={value} onChange={onChange} />
        </div>
        <div className="Form__tags">
          <h3>Select Tag :</h3>
          {colors.map((color) => (
            <div className="Form__tag">
              <div
                className="tag"
                onClick={() => setTagColor(color)}
                style={{
                  background: `${color}`,
                  border: tagColor === color ? "2px solid black" : "none",
                }}
              ></div>
            </div>
          ))}
        </div>
        <button type="submit" className="Form__button">
          <p>Add To Do List</p>{" "}
          <div>
            <AiFillPlusCircle />
          </div>
        </button>
      </form>
      {/* <Outlet /> */}
    </>
  );
};

export default Form;
