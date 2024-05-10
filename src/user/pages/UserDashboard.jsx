import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IDcard from "../components/IDcard";
import Birthday from "../components/Birthday";
import Todo from "../components/Todo";
import Annuncement from "../components/Annuncement";
import UDPerf from "../components/UDPerf";
import FrameComponent21 from "../components/FrameComponent21";
import MainContainer from "../components/MainContainer";
import UDLeave from "../components/UDLeave";


const UserDashboard = () => {
  const Navigate = useNavigate();

  const [showId, setshowId] = useState(false);

  return (
    <div className="font-product-sans w-full relative overflow-hidden flex flex-col items-center justify-start  box-border gap-8 tracking-[normal] mq450:gap-[57px]">
      <MainContainer />
      <main className="w-full flex flex-row items-center justify-center">
        <section className="flex flex-col items-center justify-center ">
          <div className="profile shadow-md h-[30rem]  shadow-blue-300 rounded-sm  flex  justify-between px-10 items-end  max-w-[80%] w-[90vw] sm:w-[70vw] sm:justify-center sm:h-[10rem] lg:h-[20rem] ">
            <div className="flex mb-[3rem] items-center justify-center sm:flex-col sm:justify-end sm:mb-0">
              <img
                className="h-[10rem] w-[10rem] sm:h-[5rem] sm:w-[5rem] border-4 rounded-full "
                loading="eager"
                alt=""
                src="/group-31.svg"
              />
              <div className="text-[#505050] flex flex-col justify-start w-fit ml-5 sm:justify-center ">
                <p className="text-12xl font-semibold h-0 flex  items-center sm:text-lg sm:justify-center">
                  John Doe
                </p>
                <p className="text-mini h-0 flex items-center sm:justify-center">
                  UI / UX Designer & UX Writer
                </p>
              </div>
            </div>

            <div className="flex gap-5 mb-10 sm:absolute sm:flex-col sm:gap-0 right-5 top-32">
              <button
                onClick={() => Navigate("/user-profile")}
                className="cursor-pointer [border:none] text-white bg-[#5d87ff]  font-semibold h-10 w-32 rounded-lg shadow-xl shadow-gray-700 hover:shadow-md hover:shadow-blue-800 hover:scale-95 transition ease-in-out duration-500 sm:w-20 sm:scale-75 "
              >
                Edit Profile
              </button>
              <button
                onClick={() => setshowId(true)}
                className="cursor-pointer [border:none] text-white bg-[#5d87ff]  font-semibold h-10 w-32 rounded-lg shadow-xl shadow-gray-700 hover:shadow-md hover:shadow-blue-800 hover:scale-95 transition ease-in-out duration-500 sm:w-20 sm:scale-75"
              >
                ID-Card
              </button>
            </div>
          </div>
          <FrameComponent21 />
          <div className="flex flex-col gap-10 mt-7 w-[90%] mb-10 sm:gap-1 lg:justify-center lg:items-center ">
            <div className="flex w-full justify-evenly lg:flex-col ">
              <UDLeave />
              <UDPerf />
            </div>
            <div className="flex w-full justify-evenly lg:flex-col ">
              <Annuncement />
              <Todo />
            </div>
            <div className="flex w-full justify-evenly lg:flex-col ">
              <Birthday />
            </div>
          </div>
        </section>
      </main>
      {showId && <IDcard forClose={() => setshowId(false)} />}
    </div>
  );
};

export default UserDashboard;
