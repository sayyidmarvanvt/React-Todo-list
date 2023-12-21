import React from "react";
import  { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  const [editID, setEditID] = useState(0); //store id of edit

  const inputData = (e) => setInput(e.target.value);

  const addData = () => {
    if (input !== "") {
      setDatas([...datas, { id: Date.now(), text: input, status: false }]);
      setInput("");
      if (editID) {
        const updateTodo = datas.map((todo) =>
          todo.id === editID
            ? { ...todo, text: input } // id matches the editID, update the text
            : todo
        );
        setDatas(updateTodo);
        setEditID(0);
      }
    }
  };

  const handleDelete = (index) => {
    let newarray = [...datas];
    newarray.splice(index, 1);
    setDatas(newarray);
  };

  const onComplete = (id) => {
    let complete = datas.map((data) => {
      if (data.id === id) {
        //checking data.id in id(datas.id)
        return { ...data, status: !data.status };
      } //use spread to get into status without changing other properties
      return data;
    });
    setDatas(complete);
  };

  const onEdit = (id) => {
    const edit = datas.find((to) => to.id === id); //getting the id
    if (!edit.status) {
      // check if the task is not completed
      setInput(edit.text); //while click it show the text on input field
      setEditID(edit.id);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm
        addData={addData}
        editID={editID}
        input={input}
        inputData={inputData}
      />
      <TodoList
        datas={datas}
        onDelete={handleDelete}
        onComplete={onComplete}
        onEdit={onEdit}
      />
    </div>
  );
}

export default Todo;

//using for checkbox
// const checkboxhandle = (id,e) => {
//   const filteredData = datas.filter((obj) => {
//     const varbile=e.target.checked
//     if (obj.id === id) {
//      obj.status = varbile

//     }
//     console.log(obj);
//     return obj;
//   });
//   setDatas(filteredData)

// };

// const onDelete = (id) => {
//   set Todos (todos.filter ((to) => to.id !== id));
//   };
//  to.id (all element id) and id(clicked line id) filter or display all other element
