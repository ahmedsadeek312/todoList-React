import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
const ToDoItem = ({ id, title }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  return (
    <>
      <form>
        <li className="my_li">
          <div>{title}</div>
          <div>
            <br />
            <button
              onClick={() => {
                handleRemove();
              }}
            >
              remove
            </button>
            <br />
            <br />
            <span className="space_here"></span>
          </div>
        </li>
      </form>
    </>
  );
};

export default ToDoItem;
