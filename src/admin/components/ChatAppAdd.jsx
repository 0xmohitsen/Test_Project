import React from 'react'
import { useRef } from 'react'

const ChatAppAdd = ({forClose}) => {
    const modelref = useRef()
    const closeModel=(e) => {
        if(modelref.current === e.target){
          forClose();
        }}
  return (
    <div  ref={modelref} onClick={closeModel} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        action=""
        className="text-left bg-white flex flex-col  h- gap-3 w-[34rem] rounded-xl py-3 px-3 "
      >

        <h1 className="h-0 flex justify-center items-center gap-3">Add in Chat</h1>
        <p className="h-0 text-gray-700">
          Fill in the required details to add an employee
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
         Emial Address
            <input
              type="email"
              className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
            />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
         Phone 
            <input
              type="tel"
              className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
            />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
         Message
            <input
              type="text"
              className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
            />
          </div>
        </div>
        
        <div className="w-[34rem] flex justify-evenly">
            <button className="bg-forestgreen-100 font-bold text-white text-xl h-14 w-48 rounded-xl">ADD</button>
            <button onClick={forClose}  className="bg-white font-bold text-red-300 border-4 border-red-300 text-xl h-14 w-48 rounded-xl">Cancel</button>
        </div>
       
      </form>
    </div>
  )
}

export default ChatAppAdd