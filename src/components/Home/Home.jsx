import React, { useState } from "react";
import NewTodo from "../NewTodo";
import Todo from "../Todo/Todo";
import uuid from "react-uuid";
import { toast } from "react-toastify";

const Home = () => {
  const [dummyTodo, setDummyTodo] = useState([]);

  const handleDummyData = (newTodo) => {
    setDummyTodo((OldNewTodo) => {
      return [...OldNewTodo, { id: uuid(), newTodo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setDummyTodo((previousTodo) => {
      const filteredTodo = previousTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
    toast.error("Remove todo item successfully");
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <h1 className="text-center py-8 text-white font-semibold text-4xl">
        Todo App
      </h1>
      <NewTodo handleDummyData={handleDummyData} />
      <Todo todos={dummyTodo} handleRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
