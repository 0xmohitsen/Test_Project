import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";

const Birthday = () => {
  return (
    <div className="text-[#505050] text-xl border shadow-md rounded-md h-[18rem] w-[33rem] flex flex-col gap-8 p-5 sm:w-[80vw]">
      <div className="font-semibold flex justify-between items-center">
        Birthdays
        <HiOutlineDotsVertical className="rounded-full h-6 w-6 hover:bg-slate-300 transition duration-500" />
      </div>
      <div className=" overflow-y-scroll no-scrollbar">
        <div className="bg-[rgb(236,242,255)]  text-sm flex justify-between items-center mb-2 pl-4 h-8 rounded-md">
          <div className="flex items-center">
            <FaBirthdayCake className="h-5 w-5 mr-4" />
            Ritik Ranjan’s Day - April 25th
          </div>
          <button className="bg-[#5d87ff] flex items-center justify-center rounded-md h-7 text-white w-fit hover:bg-slate-300">
            Send Wishes
          </button>
        </div>
        <div className="bg-[rgb(236,242,255)]  text-sm flex justify-between items-center mb-2 pl-4 h-8 rounded-md">
          <div className="flex items-center">
            <FaBirthdayCake className="h-5 w-5 mr-4" />
            Ritik Ranjan’s Day - April 25th
          </div>
          <button className="bg-[#5d87ff] flex items-center justify-center rounded-md h-7 text-white w-fit hover:bg-slate-300">
            Send Wishes
          </button>
        </div>
        <div className="bg-[rgb(236,242,255)]  text-sm flex justify-between items-center mb-2 pl-4 h-8 rounded-md">
          <div className="flex items-center">
            <FaBirthdayCake className="h-5 w-5 mr-4" />
            Ritik Ranjan’s Day - April 25th
          </div>
          <button className="bg-[#5d87ff] flex items-center justify-center rounded-md h-7 text-white w-fit hover:bg-slate-300">
            Send Wishes
          </button>
        </div>
        <div className="bg-[rgb(236,242,255)]  text-sm flex justify-between items-center mb-2 pl-4 h-8 rounded-md">
          <div className="flex items-center">
            <FaBirthdayCake className="h-5 w-5 mr-4" />
            Ritik Ranjan’s Day - April 25th
          </div>
          <button className="bg-[#5d87ff] flex items-center justify-center rounded-md h-7 text-white w-fit hover:bg-slate-300">
            Send Wishes
          </button>
        </div>
        <div className="bg-[rgb(236,242,255)]  text-sm flex justify-between items-center mb-2 pl-4 h-8 rounded-md">
          <div className="flex items-center">
            <FaBirthdayCake className="h-5 w-5 mr-4" />
            Ritik Ranjan’s Day - April 25th
          </div>
          <button className="bg-[#5d87ff] flex items-center justify-center rounded-md h-7 text-white w-fit hover:bg-slate-300">
            Send Wishes
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Birthday;
