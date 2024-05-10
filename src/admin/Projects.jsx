import React, { useState } from "react";
import { MdGridOn } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import AddProject from "./components/AddProject";
const Projects = () => {
  const [showId, setshowId] = useState(false);

  return (
    <div className="w-full">
      <header className="flex w-full justify-between items-center ">
        <h2>Projects</h2>
        <div className="flex justify-between items-center w-[17rem]">
          <div className=" w-[9rem] flex justify-center items-center">
            <NavLink
              to=""
              end
              activeclassname="active"
              className="h-6 w-6  border p-2 rounded-md mr-4 "
            >
              <MdGridOn className="h-6 w-6 " />
            </NavLink>
            <NavLink
              to={"project-table"}
              end
              activeclassname="active"
              className="h-6 w-6  border p-2 rounded-md  "
            >
              <AiOutlineMenu className=" h-6 w-6 " />
            </NavLink>
          </div>
          <button
            onClick={() => setshowId(true)}
            className="flex justify-between items-center bg-[#5d87ff] font-bold rounded-lg h-10 w-32 text-white hover:shadow hover:shadow-blue-700/50 hover:scale-105 transition ease-in-out duration-500 sm:ml-[17.5rem] sm:scale-75"
          >
            <FaPlus /> Create Project
          </button>
        </div>
      </header>
      <div className=" h-20  flex w-full justify-between items-center">
        <input
          type="text"
          className="border px-2 h-[3rem] w-[18rem] text-mini rounded-md shadow-md"
          placeholder="Project Name"
        />
        <input
          type="text"
          className="border px-2 h-[3rem] w-[18rem] text-mini rounded-md shadow-md"
          placeholder="Employee Name"
        />

        <div className="border px-2 flex flex-col  h-[3rem] w-[18rem] bg-white text-mini rounded-md shadow-md">
          <sup className="ml-2">Designation</sup>
          <select name="" id="" className="w-[9rem] ml-2">
            <option selected disabled>
              Select Designation
            </option>
            <option value="">Web Developer</option>
            <option value="">Web Dedigner</option>
            <option value="">Android Developer</option>
            <option value="">IOS Developer</option>
          </select>
        </div>
        <button className="h-[3rem] w-[18rem]  rounded-md shadow-sm  text-lg font-bold bg-[#e6fffa] text-[#13deb9] hover:shadow-green-500 hover:scale-105 transition ease-in-out duration-500  ">
          Search
        </button>
      </div>
      <Outlet />
      {showId && <AddProject forClose={() => setshowId(false)} />}
    </div>
  );
};

export default Projects;
