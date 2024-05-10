import React from "react";
import { useState } from "react";
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";
const LMS = () => {
  const handleopt = (index) => {
    setShowOPT((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const Citems = [
    {
      cname: "React js",
      k: 1,
    },
    {
      cname: "Frontend",
      k: 2,
    },
    {
      cname: "Python",
      k: 3,
    },
    {
      cname: "Backend",
      k: 4,
    },
    {
      cname: "Node js",
      k: 5,
    },
    {
      cname: "API",
      k: 6,
    },
  ];

  const [showOPT, setShowOPT] = useState(Array(Citems.length).fill(false));

  return (
    <div className="bg-aliceblue h-[106vh] w-[100vw]">
      <MainContainer />
        <div className="text-[#505050] flex flex-col items-center justify-center gap-5 w-full font-product-sans mt-10">
      <PageInfo pageName={"LMS"}/>
            <h3 className="">Courses</h3>
          {Citems.map((item, index) => {
            return (
              <div className="flex flex-col items-start justify-start gap-[12px] ">
                <div className="px-5 h-10 w-[30rem] rounded-3xs bg-white flex flex-row items-center justify-between sm:w-[15rem] ">
                  <div className="">{item.cname}</div>
                  <div
                    onClick={() => handleopt(index)}
                    className="h-8 w-8  flex justify-center items-center"
                  >
                    <img
                      className={
                        showOPT[index]
                          ? "h-[8.2px] w-[14.5px] relative z-[2] transition duration-500 ease-in-out "
                          : "h-[8.2px] w-[14.5px] relative z-[2] rotate-180 transition duration-500 ease-in-out"
                      }
                      alt=""
                      src="/logo.svg"
                    />
                  </div>
                </div>
                <div
                  className={
                    showOPT[index]
                      ? "flex justify-evenly items-center w-full bg-aliceblu"
                      : " justify-evenly items-center w-full bg-aliceblu hidden"
                  }
                >
                  <button className=" cursor-pointer [border:none] text-white bg-[#5d87ff]  font-semibold h-10 w-32 rounded-lg shadow-xl shadow-gray-700 hover:shadow-md hover:shadow-blue-800 hover:scale-95 transition ease-in-out duration-500 sm:w-20 sm:scale-75 ">
                    Start
                  </button>
                  <button className="cursor-pointer [border:none] text-white bg-[#fa8a6d]  font-semibold h-10 w-32 rounded-lg shadow-xl shadow-gray-700 hover:shadow-md hover:shadow-orange-500 hover:scale-95 transition ease-in-out duration-500 sm:w-20 sm:scale-75 ">
                    Complete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default LMS;
