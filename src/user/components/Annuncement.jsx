import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDoneAll } from "react-icons/md";

const Annuncement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [readMessages, setReadMessages] = useState([]);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const markAsRead = (message) => {
    setShowAnnouncement(false);
    setShowDropdown(!showDropdown);
    setReadMessages([...readMessages, message]);
  };

  return (
    <div className="text-[#505050] text-xl border shadow-md rounded-md h-[18rem] w-[33rem] flex flex-col gap-8 p-5 sm:w-[80vw]">
      <div className="font-semibold flex justify-between items-center">
        Announcement(s){" "}
        <HiOutlineDotsVertical className=" rounded-full h-6 w-6 hover:bg-slate-300 transition duration-500" />
      </div>
      <div className="w-full">
        {showAnnouncement && (
          <div
            className="read bg-[#ecf2ff] h-9 text-sm flex items-center px-3 rounded-md "
            onClick={handleDropdown}
          >
            <p>Welcome Jill - We have a new staff joining us</p>
            <div className="left-[13rem] relative text-[#505050]">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.408 0.481-1.942 0l-4.695-4.502c-0.408-.418-0.436-1.17 0-1.615z" />
              </svg>
            </div>
          </div>
        )}
        {showDropdown && (
          <button
            className=" bg-[#5d87ff] text-white ml-[26rem] border rounded-md p-2"
            onClick={() =>
              markAsRead("Welcome Jill - We have a new staff joining us")
            }
          >
            Mark as Read
          </button>
        )}
        <div id="Read-messages" className=" w-full border text-sm relative top-36  rounded-md ">
          <sup className="text-green-500 m-1">Marked as read</sup>
          {readMessages.map((message, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="flex items-center ml-3">{message}</p>
              <MdDoneAll className="text-green-500 mr-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Annuncement;
