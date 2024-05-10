import React from "react";
import { useNavigate } from "react-router-dom";


const UserJobDetails = () => {
    const navigate = useNavigate();
    const upload = () => {
        navigate("/admin/employee-profile/upload-doc")
    }
    const view = () => {
        navigate("/admin/employee-profile/view-doc")
    }
    

  return (
    <div className="h-[37rem] w-[44rem] flex-1 rounded-mini bg-white flex flex-col items-center  gap-6   px-5    max-w-[44rem]  mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className="w-[828px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <b className="mt-3 h-[30px] flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
          View Job Details
        </b>
      </div>
      <div className=" flex flex-row items-center justify-center  box-border max-w-full">
        <div className=" flex flex-col items-center justify-center gap-[13px]">
          <div className=" flex flex-row items-center justify-center  box-border">
            <div className=" flex-1 relative inline-block z-[1] mq450:text-base">
            Job Role
            </div>
          </div>
          <h3 className="m-0  h-[30px] relative text-11xl font-bold font-inherit text-left inline-block shrink-0 z-[1] mq450:text-lg mq750:text-5xl">{`UI UX Designer`}</h3>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-evenly max-w-full">
        <div className="gap-28 flex flex-row items-center justify-between max-w-full mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="pb-4 flex-1 relative inline-block z-[1] mq450:text-base">
              Department
              </div>
            </div>
            <h3 className="m-0  h-[30px] w-72 inline-block relative text-11xl font-bold font-inherit text-left shrink-0 z-[1] mq450:text-lg mq750:text-5xl">
            Design & Marketing
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="pb-4 flex-1 relative inline-block z-[1] mq450:text-base">
              Line Manager
              </div>
            </div>
            <h3 className="m-0  h-[30px] relative text-11xl font-bold font-inherit text-left inline-block shrink-0 z-[1] mq450:text-lg mq750:text-5xl">
            Mr Tonny Stark
            </h3>
          </div>
        </div>
      </div>
        <h2 className="h-2">Job Description</h2>
      <div className="h-fit" >
        <div className="flex flex-col items-start w-[44rem]"> 
        <p className="h-0">Your responsibilities will include:</p>
        <ul>
            <li>Creating user-centered designs by understanding business requirements, and user feedback</li>
            <li>Creating user flows, wireframes, prototypes and mockups</li>
            <li>Translating requirements into style guides, design systems, design patterns and attractive user interfaces</li>
            <li>Designing UI elements such as input controls, navigational components and informational components</li>
            <li>Creating original graphic designs (e.g. images, sketches and tables)</li>
            <li>Identifying and troubleshooting UX problems (e.g. responsiveness)</li>
        </ul>
        
        </div>
      </div>
      <div className="flex gap-9 items-start w-[44rem] ">
        <button onClick={() => upload()} className="h-10 rounded-md bg-blue-900 text-white font-bold text-lg">Upload Documents</button>
        <button onClick={() => view()} className="h-10 rounded-md border-4 border-green-800 text-green-800 bg-transparent font-bold text-lg">View Documents</button>
      </div>
    </div>
  );
};

export default UserJobDetails;
