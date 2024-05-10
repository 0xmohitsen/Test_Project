import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const TextWithEllipsis = (text) => {
    return text && text.length > 20 ? text.substring(0, 17) + "..." : text;
  };
  return (
    <div className="text-[#505050] text-xl border shadow-md rounded-md h-[18rem] w-[33rem] flex flex-col gap-8 p-5 sm:w-[80vw]">
      <div className="font-semibold flex justify-between items-center">
        To-dos
        <HiOutlineDotsVertical className="rounded-full h-6 w-6 hover:bg-slate-300 transition duration-500" />
      </div>
      <div className="flex w-full justify-between items-center">
        <input
          className="border rounded-md h-7 px-3 w-[28rem] "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button
          className="cursor-pointer  text-white bg-[#5d87ff]  font-semibold h-7 rounded-md flex justify-center items-center shadow-xl shadow-gray-700 hover:shadow-md hover:shadow-blue-800 hover:scale-95 transition ease-in-out duration-500 "
          onClick={addTodo}
        >
          <IoMdAdd className="h-5 w-5" />
        </button>
      </div>
      <div className=" overflow-y-scroll no-scrollbar">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-[rgb(236,242,255)]  text-sm flex justify-between items-center mb-2 pl-4 h-8 rounded-md"
          >
            {TextWithEllipsis(todo)}
            {/* <button className="ml-4 rounded p-1 bg-red-500 text-white" onClick={() => deleteTodo(index)}>
              Delete
            </button> */}
            <button
              onClick={() => deleteTodo(index)}
              className="flex items-center justify-center rounded-full h-8 w-8 hover:bg-slate-300"
            >
              <RiDeleteBin5Line className="h-4 w-4 " />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
