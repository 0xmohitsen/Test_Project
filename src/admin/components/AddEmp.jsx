import React from "react";
import { useRef } from "react";

const AddEmp = ({ forpopup,heading }) => {
  const modelref = useRef();
  const closeModel = (e) => {
    if (modelref.current === e.target) {
      forpopup();
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
        <h2 className="h-0 flex justify-center items-center">{heading}</h2>

        <div className="flex justify-center"><input type="search" name="" id="" className="border-[#5d87ff] border h-8 w-[20rem] rounded-l-md" /><button className="bg-[#5d87ff] font-bold rounded-r-md h-8 w-20 text-white ">Search</button></div>
        <div  className="m-3 flex justify-center items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
        <div  className="m-3 flex justify-center items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
        <div  className="m-3 flex justify-center items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
        <div  className="m-3 flex justify-center items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
      </form>
    </div>
  );
};

export default AddEmp;
