import React, { useState } from "react";

const Task = ({ task, onComplete, onDelete }) => (
  <div
    className={`flex justify-between items-center p-2 ${
      task.completed ? "line-through" : ""
    }`}
  >
    {task.name}
    <div>
      <button
        onClick={() => onComplete(task.id)}
        className="p-1 m-1 bg-[#5d87ff] font-bold rounded-lg  text-white  hover:shadow hover:scale-105 transition ease-in-out duration-150"
      >
        Complete
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="p-1 m-1 bg-[#fdede8] font-bold rounded-lg  text-[#eb0000]  hover:shadow hover:scale-105 transition ease-in-out duration-150"
      >
        Delete
      </button>
    </div>
  </div>
);

const TodoList = () => {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, name: "Patient appointment booking", completed: false },
    // ... other tasks
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask(""); // Clear the input field after adding the task
    }
  };

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "all") return true;
    return activeTab === "completed" ? task.completed : !task.completed;
  });

  return (
    <div className="container ">
      <div className="flex justify-center items-center mb-3">
        <input
          type="text"
          className="p-2  border border-gray-300 rounded-l-md w-[20rem]"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-2  rounded-r-md h-8"
        >
          Add Task
        </button>
      </div>
      <div className="flex justify-between w-full">
        <button
          onClick={() => setActiveTab("all")}
          className={`h-10 w-full font-medium text-sm transition ease-linear duration-700 ${
            activeTab === "all" ? "bg-white border-t text-blue-500 " : ""
          }`}
        >
          All Tasks
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`h-10 w-full font-medium text-sm transition ease-in-out duration-700 ${
            activeTab === "pending" ? "bg-white border-t text-blue-500 " : ""
          }`}
        >
          Pending Tasks
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`h-10 w-full font-medium text-sm transition ease-in-out duration-700 ${
            activeTab === "completed" ? "bg-white border-t text-blue-500 " : ""
          }`}
        >
          Completed Tasks
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
      {/* <div className="flex justify-center mt-4">
        <button
          onClick={() => addTask("New Task")}
          className="bg-purple-500 text-white p-2 rounded"
        >
          Add Task
        </button>
      </div> */}
    </div>
  );
};

export default TodoList;
