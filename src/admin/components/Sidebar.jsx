import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";
// import { FaPowerOff } from "react-icons/fa";

const Sidebar = ({ isSidebarVisible }) => {
  // const navigate = useNavigate();
  return (
    <div>
      {isSidebarVisible && (
        <div className="sidebar w-fit border-r overflow-x-hidden overflow-y-scroll no-scrollbar relative h-screen left-0 rounded-br-smi rounded-bl-none bg-white  flex flex-col items-center justify-start  box-border  text-left  font-product-sans sm:absolute z-10 sm:shadow-2xl">
          <>
            <div className="">
              <img
                className="h-28 w-36"
                loading="eager"
                alt=""
                src="/Bharattech.png"
              />
            </div>
            <div className="mb-7 flex flex-row items-center justify-center gap-2">
              <img
                className=" w-[3.7rem] h-[3.7rem] bg-aliceblue rounded-full"
                alt=""
                src="/dp-1@2x.png"
              />
              <div className="flex flex-col items-center justify-center">
                <span className="">Bharattech Admin</span>
                <div className="text-smi">Admin</div>
              </div>
            </div>
          </>

          <div className="flex flex-col w-full justify-start ml-5 mb-5">
            <FrameComponent4
              heading="Features"
              firstname="Dashboard"
              firstimg="/dash.svg"
              firstlink=""
              secname=""
              secimg=""
              seclink=""
              thname="Attendance"
              thimg="/attendance.svg"
              thlink="admin-attendance"
              notification={"07"}
            />
            <FrameComponent4
              heading="Recrument"
              firstname="Jobs"
              firstimg="/vector-2.svg"
              firstlink="jobs"
              secname="Candidates"
              secimg="/vector-3.svg"
              seclink="candidates"
              thname="Interview Result"
              thimg="/result.svg"
              thlink="interview-result"
            />
            <FrameComponent4
              heading="HR Management"
              firstname="Employee Management"
              firstimg="/employee.svg"
              firstlink="emp-mgmt"
              secname="Leave Management"
              secimg="/leave.svg"
              seclink="leave-management"
              thname="Performance Management"
              thimg="/vector-5.svg"
              thlink="performance-management"
            />
            <FrameComponent4
              heading=""
              firstname="Payroll Management"
              firstimg="/pay.svg"
              firstlink="*"
            />
            <FrameComponent4
              heading="Organization"
              firstname="LMS"
              firstimg="/Book.svg"
              firstlink="*"
              secname="Time Sheets"
              secimg="/time.svg"
              seclink="admin-timesheet"
              thname="Project/Work"
              thimg="/work.svg"
              thlink="projects"
            />

            <FrameComponent4
              heading=""
              firstname="Tickets "
              firstimg="/vector-4.svg"
              firstlink="admin-tickets"
              secname="Compliance          "
              secimg="/Order.svg"
              seclink="admin-coppliences"
              thname="Events"
              thimg="/Event.svg"
              thlink="*"
            />
            <FrameComponent4
              heading=""
              firstname="KPI Goals "
              firstimg="/Goal.svg"
              firstlink="admin-KPI"
              secname="Take Appraisal"
              secimg="/apprisal.svg"
              seclink="admin-take-apprisal"
              thname="View Payslip"
              thimg="/payslip.svg"
              thlink="*"
            />

            <FrameComponent4
              heading="Apps"
              firstname="Chat App "
              firstimg="/Chat.svg"
              firstlink="meassage"
              secname="Notes App"
              secimg="/note.svg"
              seclink="admin-notes"
            />
            <FrameComponent4
              heading="Document Generator"
              firstname="Offer Letter Generator "
              firstimg="/offerletter.svg"
              firstlink="*"
              secimg="/Cartificate.svg"
              secname="Certificate Generator "
              seclink="*"
              thname="Exit Process"
              thimg="/Exit.svg"
              thlink="admin-exit-process"
            />
          </div>
          {/* <div className="sticky bottom-0 flex justify-center items-center bg-white w-full h-[10rem] ">
        <button
          onClick={() => navigate("/")}
          className="hover:shadow-lg hover:shadow-orange-500/50 transition ease-in-out duration-500 mb-5 text-[#fa8a6d]  cursor-pointer [border:none] pt-[13px] px-5 pb-3.5 bg-[#f8d2c6] self-stretch rounded-sm  flex flex-row items-center justify-center box-border gap-[11px] max-w-full whitespace-nowrap z-[1] hover:bg-[#fa8a6d] hover:text-white"
        >
          <FaPowerOff className="h-5 w-5"/>
          <b className="relative text-lg  font-product-sans  text-left z-[2]">
            Log Out
          </b>
        </button>
      </div> */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
