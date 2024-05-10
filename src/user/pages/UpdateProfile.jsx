import React from "react";
import {Outlet} from "react-router-dom";
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";
import EducationQualificationsFrame from "../../common/EducationQualificationsFrame";


const UpdateProfile = () => {
  return (
    <div className="w-full  bg-aliceblue  flex flex-col items-center justify-start gap-5 pb-5 sm:justify-center ">
      <MainContainer />
      <PageInfo pageName={"Dashboard > Update Profile"} />
      <main className="flex justify-around w-[80rem] items-center sm:flex-col  sm:justify-center">
        <EducationQualificationsFrame />
        <Outlet/>
      </main>
    </div>
  );
};

export default UpdateProfile;
