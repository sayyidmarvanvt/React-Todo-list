import React from "react";
import { useRef, useEffect } from "react";

function TodoForm({ addData, editID ,input,inputData}) {
  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus(); //used to focus on refrence
  });
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-text"
        type="text"
        value={input}
        ref={inputRef}
        placeholder={editID ? " Updating ToDo..." : "Enter Your ToDo"}
        onChange={inputData}
      />
      <button onClick={addData}>{editID ? "Updating" : "Add Task"}</button>
    </form>
  );
}

export default TodoForm;
