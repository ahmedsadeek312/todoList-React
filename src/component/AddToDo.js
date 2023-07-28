import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddToDo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("enter valid value");
      setValue("");
      return;
    }
    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };

  return (
    <>
      <div>
        <p className="myP">enter your task here :   </p>
        <input
          className="add_input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submit_but" onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
};

export default AddToDo;
