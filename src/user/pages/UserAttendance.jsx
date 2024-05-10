import React from "react";
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";



const UserAttendance = () => {
  return (
    <div className="bg-aliceblue h-[85rem] gap-10 flex flex-col  items-center justify-start font-sans sm:h-full">
      <MainContainer />
      <PageInfo pageName={"Attendance"} />
      <div className="bg-white h-[40rem] w-[48rem] rounded-xl shadow-xl flex flex-col items-center justify-start py-4 sm:w-[97%] sm:h-fit">
      <div className="flex w-[40rem] justify-between sm:w-[90%] sm:flex-col-reverse">
          <div className="">
            <p className="ml-3 h-0"> Name</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              John Doe
            </div>
          </div>
          <div className="">
            <p className="ml-3 h-0"> UID</p>
            <div className="mt-6 bg-aliceblue w-[5rem] h-10 flex items-center px-5 rounded-xl text-gray-600 sm:w-[90%]">
              4894dd84
            </div>
          </div>
        </div>
        <div className="flex w-[40rem] justify-between sm:w-[90%]">
          <div className="">
            <p className="ml-3 h-0"> Department</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              IT
            </div>
          </div>
        </div>
        <div className="flex w-[40rem] justify-between sm:w-[90%]">
          <div className="">
            <p className="ml-3 h-0"> Designation</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              UI/UX
            </div>
          </div>
        </div>
        <div className="flex w-[40rem] justify-between sm:w-[90%]">
          <div className="">
            <p className="ml-3 h-0"> Team</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              Bharat AI
            </div>
          </div>
        </div>
        <div className="h-[1px] w-[40rem] bg-slate-400 mt-10 sm:w-full sm:h-[0.1px]" />
        <form action="" className="w-[40rem] flex flex-col items-center sm:w-full">
          <div className="flex w-[40rem] justify-between sm:flex-col sm:justify-center sm:items-center sm:w-full">
            <div className="">
              <p className="ml-3 h-0">Date</p>
              <input
                className="mt-6 bg-aliceblue w-[15rem] h-10 text-base flex items-center px-5 rounded-xl text-gray-600 "
                type="date"
                value={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="">
              <p className="ml-3 h-0">Time</p>
              <input
                className="mt-6 bg-aliceblue w-[15rem] h-10 text-base flex items-center px-5 rounded-xl text-gray-600"
                type="time"
                value={new Date().toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              />
            </div>
          </div>
          <div className="flex mt-12 gap-16">
            <input
              type="submit"
              value="Punch In"
              className="cursor-pointer [border:none] text-white bg-[#5d87ff]  font-semibold h-10 w-32 rounded-lg shadow-xl shadow-gray-700 hover:shadow-md hover:shadow-blue-800 hover:scale-95 transition ease-in-out duration-500 sm:w-20 sm:scale-75 "
            />
            <input
              type="submit"
              value="Punch Out"
              className="cursor-pointer [border:none] text-white bg-[#fa8a6d]  font-semibold h-10 w-32 rounded-lg shadow-xl shadow-gray-700 hover:shadow-md hover:shadow-orange-500 hover:scale-95 transition ease-in-out duration-500 sm:w-20 sm:scale-75"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAttendance;
