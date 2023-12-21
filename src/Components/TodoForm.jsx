import React from "react";

function TodoForm({ addData, editID, input, inputData }) {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-text"
        type="text"
        value={input}
        placeholder={editID ? " Updating ToDo..." : "Enter Your ToDo"}
        onChange={inputData}
      />
      <button onClick={addData}>{editID ? "Updating" : "Add Task"}</button>
    </form>
  );
}

export default TodoForm;
