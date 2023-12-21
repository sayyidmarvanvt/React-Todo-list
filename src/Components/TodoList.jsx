import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

function TodoList({datas,onComplete,onEdit,onDelete}) {
  return (
    <>
    {datas.map((data, index) => (
        <li className="list-items" key={index}>
          <div className="list-data" id={data.status ? "list-data" : ""}>
            {data.text}
          </div>
          <span>
            <IoMdDoneAll
              id="complete"
              title="Complete"
              onClick={() => onComplete(data.id)}
            />
            <MdModeEdit
              id="edit"
              title="Edit"
              onClick={() => onEdit(data.id)}
            />
            <MdDeleteForever
              id="delete"
              title="Delete"
              onClick={() => onDelete(index)}
            />
          </span>
        </li>
      ))}
    </>
  )
}

export default TodoList