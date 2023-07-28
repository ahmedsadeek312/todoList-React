import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
const ToDoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <>
      <form>
        <ol className="my_ul">
          {todos.map((todo) => (
            <ToDoItem id={todo.id} title={todo.name} />
          ))}
        </ol>
      </form>
    </>
  );
};

export default ToDoList;
