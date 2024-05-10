import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { BiSolidVideo } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import ChatAppAdd from "./components/ChatAppAdd";
const ADMessage = () => {
  const [showId, setshowId] = useState(false);

  return (
    <div className="chatApp bg-white  h-[87vh]  overflow-y-scroll scroll-smooth no-scrollbar rounded-md w-[77.9vw] font-sans">
      <header className="sticky top-0 h-14 flex items-center pl-3 text-lg font-semibold shadow-xl rounded-md bg-slate-100 mb-4">
        Chat App
      </header>
      <div className="flex">
        <section className="  rounded-md shadow-md h-fit min-h-[36rem] w-[33%] over">
          <header className="sticky top-16 flex items-center justify-between p-4 shadow-lg">
            <div className="chathead flex gap-4">
              <NavLink className="pb-4 " end>Chat</NavLink>
              <NavLink end to={"chat-contacts"} className="pb-4" >
                Contacts
              </NavLink>
              <NavLink  to={"chat-archive"} className="pb-4" end>
                Archived
              </NavLink>
            </div>
            <button
              className="bg-midnightblue text-white h-7 rounded-md"
              onClick={() => setshowId(true)}
            >
              Add New
            </button>
          </header>
          <Outlet />
        </section>
        <section className="flex flex-col items-center  rounded-md shadow-md h-full min-h-[36rem] w-[67%]">
          <header className="mb-5 sticky top-16 w-[95%] bg-slate-200 h-10 flex items-center justify-between p-4 shadow-lg">
            <div className="flex gap-3">
              <div className="">
                <img src="/ellipse-12@2x.png" alt="" className="h-14 w-14" />
              </div>
              <div className="flex flex-col justify-around h-4 ">
                <p className="h-0 font-semibold flex items-center">Raghab </p>
                <p className="text-green-500 text-smi h-0 flex items-center">
                  typing...
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <IoIosCall className="h-8 w-8 text-forestgreen-100" />
              <BiSolidVideo className="h-8 w-8 text-forestgreen-100" />
            </div>
          </header>
          <div className="flex flex-col relative bottom-[-15rem] h-fit ">
            <div className="flex items-start justify-start w-[48rem] h-fit mb-4">
              <img src="/ellipse-12@2x.png" alt="" className="h-14 w-14" />
              <div class="bubble left ">HII</div>
            </div>
            <div className="flex flex-row-reverse items-start justify-start w-[48rem] h-full">
              <img
                src="/dp-1@2x.png"
                alt=""
                className="bg-sky-500 rounded-full h-14 w-14"
              />
              <div class="bubble right ">Hello</div>
            </div>
            <div className="flex items-start justify-start w-[48rem] mb-4">
              <img src="/ellipse-12@2x.png" alt="" className="h-14 w-14" />
              <div class="bubble left ">How are You?</div>
            </div>
          </div>
          <div className="sticky  top-[38.2rem] flex w-[100%]">
            <input type="text" className="w-[95%] h-8 border border-black bg-slate-200" />
            <button className="bg-midnightblue text-white w-9">
              <IoMdSend className="h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
      {showId && <ChatAppAdd forClose={() => setshowId(false)} />}
    </div>
  );
};

export default ADMessage;
