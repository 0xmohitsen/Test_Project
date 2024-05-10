import React, { useRef } from "react";
import { SlCallOut } from "react-icons/sl";
import { useState } from "react";
import GreatJob from "./Greatjob";
const RecallComponent = ({onClose}) => {
    const modelref = useRef()
    const closeModel=(e) => {
        if(modelref.current === e.target){
            onClose();
        }
    }
const [GtJ, setGtJ] = useState(false)
  return (
    <div ref={modelref} onClick={closeModel} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        action=""
        className="text-left bg-white flex flex-col  h- gap-3 w-[34rem] rounded-xl py-3 px-3 "
      >

        <h1 className="h-0 flex justify-center items-center gap-3"><SlCallOut />Leave Recall</h1>
        <p className="h-0 text-gray-700">
          Fill in the required details to recall this employee
        </p>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Employee Name
            <input
              required
              type="text"
              name="name"
              className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
            />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Department
            <input
              required
              type="text"
              name="name"
              className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
            />
          </div>
        </div>

        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Start Date
            <input
              type="date"
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm px-5 "
            />
          </div>
          <div className="flex flex-col gap-2">
          End Date
            <input
              type="date"
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm px-5 "
            />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
          Days Remaining
            <input
              type="number"
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm px-5 "
            />
          </div>
          <div className="flex flex-col gap-2">
            Resumption Date
            <input
              type="date"
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm px-5 "
            />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
          Relief Officer(s)
            <input
              required
              type="text"
              name="name"
              className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
            />
          </div>
        </div>
        
        <div className="w-[34rem] flex justify-evenly">
            <button onClick={()=>{
                if(document.querySelector("form").checkValidity()){
                    setGtJ(true)
                }
            } } className="bg-forestgreen-100 font-bold text-white text-xl h-14 w-48 rounded-xl">Initate Recall</button>
            <button onClick={onClose} className="bg-white font-bold text-red-300 border-4 border-red-300 text-xl h-14 w-48 rounded-xl">Cancel</button>
        </div>
       {GtJ && <GreatJob toClose={()=>setGtJ(false)}/>} 
      </form>
    </div>
  );
};

export default RecallComponent;
