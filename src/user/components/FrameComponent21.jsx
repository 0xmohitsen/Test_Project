import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const FrameComponent21 = () => {
  const navigate = useNavigate();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const items = [
    {
      nm: "Apply for Leave",
      ky: 1,
      navi: "/leave-application",
    },
    {
      nm: "KPI Goals",
      ky: 2,
      navi: "/user-KPI",
    },
    {
      nm: "Take Appraisal",
      ky: 3,
      navi: "/take-appraisal",
    },
    {
      nm: "View Payslip",
      ky: 4,
      navi: "/LMS",
    },
    {
      nm: "Update Profile",
      ky: 5,
      navi: "/user-profile",
    },
    {
      nm: "Events",
      ky: 6,
      navi: "/LMS",
    },
    {
      nm: "Attendance",
      ky: 7,
      navi: "/user-attendance",
    },
    {
      nm: "Time Sheet",
      ky: 8,
      navi: "/time-sheet",
    },
    {
      nm: "Project/Work",
      ky: 9,
      navi: "/emp-project",
    },
    {
      nm: "LMS",
      ky: 10,
      navi: "/LMS",
    },
    {
      nm: "Exit process",
      ky: 11,
      navi: "/exit-process",
    },
    {
      nm: "Compliances",
      ky: 12,
      navi: "/LMS",
    },
    {
      nm: "Tickets",
      ky: 13,
      navi: "/user-tickets",
    },
  ];

  return (
    <div className="scale-90 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[30px] w-[100vw] max-w-[95rem] text-left text-11xl text-gray-1200 font-product-sans sm:w-full sm:justify-center sm:items-center">
      <p className="h-0 font-semibold ml-10 text-[#505050] sm:ml-0 ">Quick Actions</p>
      <div className="max-w-[95rem]  w-[100vw] h-16 relative flex justify-center  items-center">
        <FaAnglesLeft onClick={slideLeft} size={20} opacity={0.5} />
        <div
          id="slider"
          className="flex gap-6 w-[100vw] max-w-[85.5rem] h-fit  overflow-x-scroll items-center scroll  scroll-smooth flex-nowrap  no-scrollbar"
        >
          {items.map((item) => {
            return (
              <button key={item.ky}
                onClick={() => navigate(item.navi)}
                className="border h-14  flex items-center justify-center cursor-pointer  px-6  rounded-11xl flex-row whitespace-nowrap"
              >
                <div className="flex items-center justify-center  h-[30px] flex-1 relative text-5xl font-product-sans text-gray-1200 text-left ">
                  {item.nm}
                </div>
              </button>
            );
          })}
        </div>
        <FaAnglesRight onClick={slideRight} size={20} opacity={0.5} />
      </div>
    </div>
  );
};

export default FrameComponent21;
