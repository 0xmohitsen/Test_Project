import React, { useRef } from "react";
import { SlCallOut } from "react-icons/sl";
import { AiFillLike } from "react-icons/ai";

const GreatJob = ({ toClose }) => {
  const modelref = useRef()
  const closeModel=(e) => {
      if(modelref.current === e.target){
          toClose();
      }
  }

  return (
    <div
       ref={modelref}
       onClick={closeModel}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="text-left bg-white flex flex-col justify-center items-center  h- gap-3 w-[34rem] rounded-xl py-3 px-3 ">
        
        <AiFillLike className="text-blue-700 h-[10rem] w-[10rem]" />
        <div className="text-center text-blue-700 font-bold text-5xl"><p>Great Job! </p>
        <p>John Dory has been sent a</p>
        <p>leave recall email.</p></div>
        <button onClick={toClose} className="bg-blue-700 font-bold text-white  text-xl h-14 w-48 rounded-xl">Close</button>
      </div>
    </div>
  );
};

export default GreatJob;
