import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaRegFilePdf } from "react-icons/fa6";
import EditProject from "./components/EditProject";
import AddEmp from "./components/AddEmp";
import TodoList from "./components/TodoList";

const ProjectDetails = () => {
  const [showId, setshowId] = useState(false);
  const [showadd, setshowadd] = useState(false);

  return (
    <div className="h-[90rem]">
      <header className="flex w-full justify-between items-center ">
        <h2>Projects</h2>
        <button
          onClick={() => setshowId(true)}
          className="flex justify-evenly items-center bg-[#5d87ff] font-bold rounded-lg h-10 w-32 text-white hover:shadow hover:shadow-blue-700/50 hover:scale-105 transition ease-in-out duration-500 sm:ml-[17.5rem] sm:scale-75"
        >
          <FaPlus /> Edit Project
        </button>
      </header>
      <main className="flex justify-between gap-2 ">
        <div className="w-[57rem] h-10 flex flex-col gap-5">
          <div className="border h-fit p-3 rounded-md">
            <header className="w-full ">
              <h3
                onClick={() => navigate("/admin/project-details")}
                className="cursor-pointer flex font-semibold items-center w-full h-0 justify-between"
              >
                Office Management
              </h3>
              <sup className="h-0">
                <b>1</b> open tasks,<b> 9</b> tasks completed
              </sup>
            </header>
            <p className="font-normal text-[#6c6b6b]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate aspernatur praesentium quod saepe sequi modi est laborum
              unde, officiis accusantium iusto possimus dolore animi sed magnam
              cupiditate magni cum nostrum! orem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque distinctio, autem in ea
              impedit temporibus nemo nihil perferendis ab velit. Beatae
              laudantium fugit enim, voluptas esse error recusandae quisquam
              veritatis! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Esse ab porro velit expedita doloribus doloremque. Ipsam
              doloremque sed quibusdam eveniet qui animi, soluta tenetur. Totam,
              enim dolor? Maiores, aliquid facere. Vel sint, cum earum officia
              porro et odio laboriosam illum facilis qui voluptates ducimus
              nobis ex rerum quo voluptate sequi minima esse omnis pariatur
              possimus maxime! Numquam cupiditate nulla quod. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Aliquam necessitatibus,
              tenetur magnam quam ex corrupti consequuntur sed ad nemo a ipsa
              ratione aspernatur natus hic doloribus quis vitae nobis placeat.
              Blanditiis officia libero quasi, corrupti at qui. Repellendus quia
              nisi aspernatur fuga eveniet laborum minima provident facere ad,
              voluptate dolorum esse totam quaerat laudantium dolor suscipit
              optio, aliquam quo qui! Quam doloremque neque in expedita
              repellendus dolor laboriosam voluptas temporibus, enim voluptatum.
              Obcaecati aliquid expedita consequuntur error quas dolorum maxime
              ducimus, aspernatur fugit vero totam ea dignissimos nisi, quae
              harum! Debitis consequatur ad, eaque quos labore odit unde nulla
              ab dolore qui incidunt magni laudantium! Alias, architecto ratione
              modi impedit libero rem cum quaerat laboriosam amet rerum,
              eligendi corrupti quisquam. Aspernatur minus assumenda doloremque
              beatae debitis facilis, consequuntur totam id neque quia quas
              accusantium! Molestias iusto molestiae officia perferendis
            </p>
          </div>
          <div className="border h-fit p-3 rounded-md">
            <h3 className="cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
              Uploaded image files
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-center items-center">
                <img src="" alt="" className="border h-[10rem] w-[13rem]" />{" "}
                Design
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="" alt="" className="border h-[10rem] w-[13rem]" />{" "}
                Design
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="" alt="" className="border h-[10rem] w-[13rem]" />{" "}
                Design
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="" alt="" className="border h-[10rem] w-[13rem]" />{" "}
                Design
              </div>
            </div>
          </div>
          <div className="border h-fit p-3 rounded-md">
            <h3 className="cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
              Uploaded files
            </h3>
            <div className="flex items-center gap-5 border-b">
              <FaRegFilePdf className="h-9 w-9 " />
              <div className="flex flex-col gap-1">
                <a href="" className="h-2 flex ">
                  File.pdf
                </a>
                <p className="h-0 flex  ">
                  <a href="">SenderName</a>May 20th at 8:43 AM
                </p>
                <p className="h-0 flex items-center">Size : 14Mb</p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-b">
              <FaRegFilePdf className="h-9 w-9 " />
              <div className="flex flex-col gap-1">
                <a href="" className="h-2 flex ">
                  File.pdf
                </a>
                <p className="h-0 flex  ">
                  <a href="">SenderName</a>May 20th at 8:43 AM
                </p>
                <p className="h-0 flex items-center">Size : 14Mb</p>
              </div>
            </div>
          </div>
          <div className="border h-fit p-3 rounded-md">
          <TodoList/>

          </div>
        </div>
        <div className="w-[22rem] h-10 flex flex-col gap-5">
          <div className="border h-fit w-full rounded-md">
            <h3 className=" ml-3 cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
              Project details
            </h3>
            <div className="m-3 gap-1 flex flex-col">
              <div className="flex justify-between h-2 items-center bg-slate-100 rounded-md border p-3 font-medium">
                <p>Cost :</p> <p>100 Hours</p>
              </div>
              <div className="flex justify-between h-2 items-center rounded-md border p-3 font-medium">
                <p>Total Hours :</p> <p>$1200</p>
              </div>
              <div className="flex justify-between h-2 items-center bg-slate-100 rounded-md border p-3 font-medium">
                <p>Created :</p> <p>25 Feb, 2024</p>
              </div>
              <div className="flex justify-between h-2 items-center rounded-md border p-3 font-medium">
                <p>Deadline :</p> <p>12 Jun, 2024</p>
              </div>
              <div className="flex justify-between h-2 items-center bg-slate-100 rounded-md border p-3 font-medium">
                <p>Priority :</p> <p>High</p>
              </div>
              <div className="flex justify-between h-2 items-center  rounded-md border p-3 font-medium">
                <p>Created by :</p> <p>Ritik</p>
              </div>
              <div className="flex justify-between h-2 items-center bg-slate-100 rounded-md border p-3 font-medium">
                <p>Status :</p> <p>Working</p>
              </div>
            </div>
            <div className="m-3">
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
          <div className="border h-fit w-full rounded-md">
            <div className="flex items-center">
              <h3 className=" ml-3 cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
                Assigned Leader
              </h3>
              <button
                onClick={() => setshowadd(true)}
                className=" mr-3 flex justify-evenly items-center bg-[#5d87ff] font-bold rounded-lg h-8 w-20 text-white hover:shadow hover:shadow-blue-700/50 hover:scale-105 transition ease-in-out duration-500 sm:ml-[17.5rem] sm:scale-75"
              >
                <FaPlus /> Add
              </button>
            </div>
            <div className="m-3 flex items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
            <div className="m-3 flex items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
          </div>
          <div className="border h-fit w-full rounded-md">
            <div className="flex items-center">
              <h3 className=" ml-3 cursor-pointer flex font-semibold items-center w-full h-0 justify-between">
                Assigned Team
              </h3>
              <button  onClick={() => setshowadd(true)} className=" mr-3 flex justify-evenly items-center bg-[#5d87ff] font-bold rounded-lg h-8 w-20 text-white hover:shadow hover:shadow-blue-700/50 hover:scale-105 transition ease-in-out duration-500 sm:ml-[17.5rem] sm:scale-75">
                <FaPlus /> Add
              </button>
            </div>
            <div className="m-3 flex items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
            <div className="m-3 flex items-center gap-4">
              <img
                src=""
                alt=""
                className="border h-[3rem] w-[3rem] rounded-full"
              />
              <div className=" flex flex-col ">
                <p className="font-medium h-1 flex items-center">
                  Ritik Ranjan
                </p>
                <p className="text-smi h-0 flex items-center">Team Leader</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showId && <EditProject forClose={() => setshowId(false)} />}
      {showadd && <AddEmp forpopup={() => setshowadd(false)} heading="Add Leader"/>}
      {showadd && <AddEmp forpopup={() => setshowadd(false)} heading="Add Team Member"/>}
    </div>
  );
};

export default ProjectDetails;
