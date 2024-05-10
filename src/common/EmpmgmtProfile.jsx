import React from "react";
import { FaFilter } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import EducationQualificationsFrame from "./EducationQualificationsFrame";

const EmpmgmtProfile = () => {
  return (
    <div className="gap-2 w-[74rem] h-full rounded-xl  flex flex-col justify-center items-start">
         <div className=" text-6xl flex flex-row items-center justify-center pt-6 gap-4">
          <h3 className="m-0  text-inherit font-bold font-inherit mq450:text-xl">
          Employee Mgmt /  Employee Profile /  JohnDoe
          </h3>
        </div>
        <div className="gap-2 w-[74rem] h-full rounded-xl  flex  justify-center items-center ">
      <EducationQualificationsFrame />

      <Outlet />
      </div>
    </div>
  );
};

export default EmpmgmtProfile;
