import React from "react";
import { useRef } from "react";

const AddProject = ({ forClose }) => {
  const modelref = useRef();
  const closeModel = (e) => {
    if (modelref.current === e.target) {
      forClose();
    }
  };
  return (
    <div
      ref={modelref}
      onClick={closeModel}
      className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <form
        action=""
        className="px-4  bg-white flex flex-col overflow-y-scroll no-scrollbar h-[40rem] gap-3 w-[44rem] rounded-xl py-3 "
      >
        <h1 className="h-0 flex justify-center items-center">Add Project</h1>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Project Name
            <input
              required
              type="text"
              name="name"
              className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            Client Name
            <input
              required
              type="text"
              name="name"
              className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Start Date
            <input
              required
              type="date"
              name="name"
              className="px-3 bg-aliceblue h-10   rounded-lg text-sm "
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            End Date
            <input
              required
              type="date"
              name="name"
              className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Rate
            <div className="flex justify-between items-center ">
              <input
                className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
                type="search"
              />
              <select
                className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
                name=""
                id=""
              >
                <option value="">Hourly</option>
                <option value="">Fixed</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            Priority
            <select
              className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
              name=""
              id=""
            >
              <option selected disabled>
                --select--
              </option>
              <option value="">High</option>
              <option value="">Medium</option>
              <option value="">Low</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Add Project Leader
            <input
              className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
              type="search"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            Add team
            <input
              className=" bg-aliceblue h-10 px-3  rounded-lg text-sm "
              type="search"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between"></div>
        <div className="flex flex-col gap-5 justify-between">
          Description
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-aliceblue  resize-none p-3   rounded-lg text-sm"
          ></textarea>
        </div>

        <label for="small-file-input" class="sr-only ">
          Choose file
        </label>
        <input
          type="file"
          name="small-file-input"
          id="small-file-input"
          className="block w-full border  border-gray-700 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-800 file:border-0
    file:me-4
    file:py-2 file:px-4
   "
        />

        <div className="w-full flex justify-evenly">
          <button className="bg-[#5d87ff] font-bold rounded-lg h-10 w-32 text-white hover:shadow  hover:scale-[1.05] transition ease-in-out duration-500 sm:ml-[17.5rem] sm:scale-75">
            ADD
          </button>
          <button
            onClick={forClose}
            className="bg-[#fdede8] font-bold rounded-lg h-10 w-32 text-[#eb0000] hover:shadow  hover:scale-[1.05] transition ease-in-out duration-500 sm:ml-[17.5rem] sm:scale-75"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
