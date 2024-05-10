import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";

const ProjectGrid = () => {

  const navigate = useNavigate()

  return (
    <div>
      <main className="flex w-full justify-between items-center h-full">
        <div className="p-2 border  flex flex-col  h- w-[18rem] bg-white text-mini rounded-md shadow-md">
          <header className="w-full ">
            <h3 onClick={()=>navigate('/admin/project-details')} className="cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
              Office Management
              <CiMenuKebab />
            </h3>
            <sup className="h-0">
              <b>1</b> open tasks,<b> 9</b> tasks completed
            </sup>
          </header>
          <h4 className="font-semibold text-[#6c6b6b]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aspernatur praesentium quod saepe sequi modi est laborum unde,
            officiis accusantium iusto possimus dolore animi sed magnam
            cupiditate magni cum nostrum!
          </h4>
          <div className="flex flex-col mb-10">
            <h4 className="font-semibold flex items-center h-0">
              Deadline: <p className="ml-2 text-[#a2a2a2]"> 17 Apr 2024</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Project Leader: <p className="ml-2 text-[#a2a2a2]"> John</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Team:{" "}
              <p className="ml-2 text-[#a2a2a2]"> Johny,Ram,Dam,wdcw....</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0 w-full justify-between">
              Progress: <p className="text-[#4bd765]"> 40%</p>
            </h4>
            <ProgressBar
              completed={40}
              isLabelVisible={false}
              bgColor="#4bd765"
              height={7}
              width={"100"}
            />
          </div>
        </div>
        <div className="p-2 border  flex flex-col  h- w-[18rem] bg-white text-mini rounded-md shadow-md">
          <header className="w-full ">
            <h3 className=" cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
              Hospital Adminstration
              <CiMenuKebab />
            </h3>
            <sup className="h-0">
              <b>1</b> open tasks,<b> 9</b> tasks completed
            </sup>
          </header>
          <h4 className="font-semibold text-[#6c6b6b]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aspernatur praesentium quod saepe sequi modi est laborum unde,
            officiis accusantium iusto possimus dolore animi sed magnam
            cupiditate magni cum nostrum!
          </h4>
          <div className="flex flex-col mb-10">
            <h4 className="font-semibold flex items-center h-0">
              Deadline: <p className="ml-2 text-[#a2a2a2]"> 17 Apr 2024</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Project Leader: <p className="ml-2 text-[#a2a2a2]"> John</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Team:{" "}
              <p className="ml-2 text-[#a2a2a2]"> Johny,Ram,Dam,wdcw....</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0 w-full justify-between">
              Progress: <p className="text-[#4bd765]"> 40%</p>
            </h4>
            <ProgressBar
              completed={40}
              isLabelVisible={false}
              bgColor="#4bd765"
              height={7}
              width={"100"}
            />
          </div>
        </div>
        <div className="p-2 border  flex flex-col  h- w-[18rem] bg-white text-mini rounded-md shadow-md">
          <header className="w-full ">
            <h3 className=" cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
              Video calling app
              <CiMenuKebab />
            </h3>
            <sup className="h-0">
              <b>1</b> open tasks,<b> 9</b> tasks completed
            </sup>
          </header>
          <h4 className="font-semibold text-[#6c6b6b]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aspernatur praesentium quod saepe sequi modi est laborum unde,
            officiis accusantium iusto possimus dolore animi sed magnam
            cupiditate magni cum nostrum!
          </h4>
          <div className="flex flex-col mb-10">
            <h4 className="font-semibold flex items-center h-0">
              Deadline: <p className="ml-2 text-[#a2a2a2]"> 17 Apr 2024</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Project Leader: <p className="ml-2 text-[#a2a2a2]"> John</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Team:{" "}
              <p className="ml-2 text-[#a2a2a2]"> Johny,Ram,Dam,wdcw....</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0 w-full justify-between">
              Progress: <p className="text-[#4bd765]"> 40%</p>
            </h4>
            <ProgressBar
              completed={40}
              isLabelVisible={false}
              bgColor="#4bd765"
              height={7}
              width={"100"}
            />
          </div>
        </div>
        <div className="p-2 border  flex flex-col  h- w-[18rem] bg-white text-mini rounded-md shadow-md">
          <header className="w-full ">
            <h3 className="cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
              Project Management
              <CiMenuKebab />
            </h3>
            <sup className="h-0">
              <b>1</b> open tasks,<b> 9</b> tasks completed
            </sup>
          </header>
          <h4 className="font-semibold text-[#6c6b6b]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aspernatur praesentium quod saepe sequi modi est laborum unde,
            officiis accusantium iusto possimus dolore animi sed magnam
            cupiditate magni cum nostrum!
          </h4>
          <div className="flex flex-col mb-10">
            <h4 className="font-semibold flex items-center h-0">
              Deadline: <p className="ml-2 text-[#a2a2a2]"> 17 Apr 2024</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Project Leader: <p className="ml-2 text-[#a2a2a2]"> John</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0">
              Team:{" "}
              <p className="ml-2 text-[#a2a2a2]"> Johny,Ram,Dam,wdcw....</p>
            </h4>
            <h4 className="font-semibold flex  items-center h-0 w-full justify-between">
              Progress: <p className="text-[#4bd765]"> 40%</p>
            </h4>
            <ProgressBar
              completed={40}
              isLabelVisible={false}
              bgColor="#4bd765"
              height={7}
              width={"100"}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectGrid;
