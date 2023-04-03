import React from "react";

import { ArchiveBoxIcon } from "@heroicons/react/24/solid";

const Todo = ({ todos, handleRemoveTodo }) => {
  const handleDelete = (id) => {
    handleRemoveTodo(id);
  };
  return (
    <div className="mt-4 md:w-3/4 mx-auto p-3 bg-slate-500 rounded-md  ">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center m-2 md:w-10/12 mx-auto bg-purple-300 rounded-md py-2 px-4"
        >
          <div>
            <h1 className="text-xl  font-medium">{todo.newTodo.title}</h1>
            <p className="text-lg">{todo.newTodo.description}</p>
          </div>
          <ArchiveBoxIcon
            className="h-6 w-6 text-red-500 cursor-pointer"
            onClick={() => handleDelete(todo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Todo;
