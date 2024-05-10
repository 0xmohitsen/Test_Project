import React from "react";
import { useRef } from "react";

const AddTicket = ({ forClose }) => {
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
        className="px-4  bg-white flex flex-col  h- gap-3 w-[44rem] rounded-xl py-3 "
      >
        <h1 className="h-0 flex justify-center items-center">Add Ticket</h1>
        <p className="h-0 text-gray-700">
          Fill in the required details to add a ticket
        </p>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Employee Name
            <input
              required
              type="text"
              name="name"
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            Employee Name
            <input
              required
              type="text"
              name="name"
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Assign Staff
            <select
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
              name=""
              id=""
            >
              <option value="">Ritik</option>
              <option value="">Keshab</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            Client
            <select
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
              name=""
              id=""
            >
              <option selected disabled>
                --select--
              </option>
              <option value="">Microsoft</option>
              <option value="">Google</option>
            </select>
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Priority
            <select
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
              name=""
              id=""
            >
              <option value="">High</option>
              <option value="">Medium</option>
              <option value="">Low</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            CC
            <input
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            Assign
            <input
              required
              type="text"
              name="name"
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            Add Followers
            <input
              required
              type="text"
              name="name"
              className=" bg-aliceblue h-10 w-full  rounded-lg text-sm "
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-aliceblue  w-full  rounded-lg text-sm"
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
          <button className="bg-forestgreen-100 font-bold text-white text-lg h-10 w-32 rounded-xl">
            ADD
          </button>
          <button
            onClick={forClose}
            className="bg-white font-bold text-red-300 border-4 border-red-300 text-lg  h-10 w-32 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTicket;
