import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewTodo = ({ handleDummyData }) => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const { title, description } = newTodo;

  const handleChange = (event) => {
    setNewTodo((oldTodo) => {
      return { ...oldTodo, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Added todo task successfully");
    handleDummyData(newTodo);
    setNewTodo({ title: "", description: "" });
  };
  return (
    <div className="md:w-3/4 mx-auto p-4 bg-slate-400 rounded-md font-medium text-white">
      <h1 className="text-2xl py-2 text-center ">Added a new todo here</h1>
      <form onSubmit={handleSubmit}>
        <div className="py-2 md:w-2/3 mx-auto flex justify-between  md:flex-row flex-col">
          <label htmlFor="title">Name: </label>
          <input
            className="rounded-md outline-none p-2 text-black md:w-10/12"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <ToastContainer />
        <div className="py-2 md:w-2/3 mx-auto  flex justify-between md:flex-row flex-col">
          <label htmlFor="description">Description: </label>
          <textarea
            className="rounded-md  outline-none p-2  text-black md:w-10/12"
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-400 hover:bg-green-800 rounded-md p-2"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
