import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import MainContainer from "../components/MainContainer";
import AddTicket from "../components/AddTicket";

const UserTicket = () => {
  const [showId, setshowId] = useState(false);

  return (
    <div className="flex flex-col h-[100vh] items-center">
      <MainContainer />

      <div className="font-sans ">
      <div className="flex w-full justify-between items-center">
        <h2>Tickets</h2>
        <button
          onClick={() => setshowId(true)}
          className="bg-[#5d87ff] text-white font-semibold text-sm h-[2.8rem] rounded-lg cursor-pointer"
        >
          Add Ticket
        </button>
      </div>
      <div className="flex flex-col ">
        <div className="flex h-10 gap-10">
          <div className="border flex flex-col justify-  bg-white w-1/5 h-[7rem] px-4 rounded-md shadow-lg">
            <div className=" h-9 flex w-full justify-between">
              <p className="h-0">New Tickets</p>
              <p className="h-0 text-green-500 font-semibold">10%</p>
            </div>
            <h3 className="h-3">113</h3>
            <ProgressBar
              completed={60}
              isLabelVisible={false}
              bgColor="#ff902f"
              height={7}
              width={"15rem"}
            />
          </div>
          <div className="border flex flex-col justify-  bg-white w-1/5 h-[7rem] px-4 rounded-md shadow-lg">
            <div className=" h-9 flex w-full justify-between">
              <p className="h-0">Solved Tickets</p>
              <p className="h-0 text-green-500 font-semibold">+12.5%</p>
            </div>
            <h3 className="h-3">70</h3>
            <ProgressBar
              completed={65}
              isLabelVisible={false}
              bgColor="#ff902f"
              height={7}
              width={"15rem"}
            />
          </div>
          <div className="border flex flex-col justify-  bg-white w-1/5 h-[7rem] px-4 rounded-md shadow-lg">
            <div className=" h-9 flex w-full justify-between">
              <p className="h-0">Open Tickets</p>
              <p className="h-0 text-red-300 font-semibold">-2.8%</p>
            </div>
            <h3 className="h-3">100</h3>
            <ProgressBar
              completed={80}
              isLabelVisible={false}
              bgColor="#ff902f"
              height={7}
              width={"15rem"}
            />
          </div>
          <div className="border flex flex-col justify-  bg-white w-1/5 h-[7rem] px-4 rounded-md shadow-lg">
            <div className=" h-9 flex w-full justify-between">
              <p className="h-0">Pending Tickets</p>
              <p className="h-0 text-red-300 font-semibold">-75%</p>
            </div>
            <h3 className="h-3">125</h3>
            <ProgressBar
              completed={10}
              isLabelVisible={false}
              bgColor="#ff902f"
              height={7}
              width={"15rem"}
            />
          </div>
        </div>
        <div className=" h-20  flex w-full justify-between mt-[8rem]">
          <input
            type="text"
            className="border px-2 h-[3rem] w-[10rem] text-mini rounded-md shadow-xl"
            placeholder="Employee Name"
          />
          <div className="border px-2 flex flex-col  h-[3rem] w-[10rem] bg-white text-mini rounded-md shadow-xl ">
            <sup className="ml-2">Status</sup>
            <select name="" id="" className="w-[9rem] ml-2">
              <option selected disabled>
                --select--
              </option>
              <option value="">Pending</option>
              <option value="">Approved</option>
              <option value="">Returned</option>
            </select>
          </div>
          <div className=" border px-2 flex flex-col  h-[3rem] w-[10rem] bg-white text-mini rounded-md shadow-xl">
            <sup className="ml-2">Priority</sup>
            <select name="" id="" className="w-[9rem] ml-2">
              <option selected disabled>
                --select--
              </option>
              <option value="">High</option>
              <option value="">Low</option>
              <option value="">Medium</option>
            </select>
          </div>
          <input
            type="date"
            className=" border px-2 h-[3rem] w-[10rem] text-mini rounded-md shadow-xl "
            placeholder="From"
          />
          <input
            type="date"
            className="border px-2 h-[3rem] w-[10rem] text-mini rounded-md shadow-xl "
            placeholder="To"
          />
          <button className="border h-[3rem] w-[10rem]  rounded-md shadow-xl  text-lg font-bold bg-[#e6fffa] text-[#13deb9] hover:shadow-green-500 hover:scale-105 transition ease-in-out duration-500  ">
            Search
          </button>
        </div>
        
        <div className="border flex flex-col p-3 rounded-lg shadow-xl  ">
        <div className="flex justify-start items-center">
         <p className="h-0"> Show</p>
          <select name="" id="" className="rounded-lg mr-2 w-[2.4rem] mt-5 h-5 ml-2 bg-slate-300">
            <option value="">10</option>
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
         <p className="h-0"> entries</p>
        </div>
          <table className=" mt-10 w-full ">
            <tr className=" bg-aliceblue text-center h-[4rem]">
              <th>#</th>
              <th>Ticket Id</th>
              <th>Ticket Subject</th>
              <th>Assigned Staff</th>
              <th>Created</th>
              <th>Last Reply</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr className="  text-center h-[4rem]">
              <td>1</td>
              <td>#nm-367</td>
              <td>Laptop issue</td>
              <td>John Smith</td>
              <td>5 jan 2021</td>
              <td>9 jan 2021</td>
              <td>
                <select name="" id="" className="w-[9rem] ml-2">
                  <option value="">High</option>
                  <option value="">Low</option>
                  <option value="">Medium</option>
                </select>
              </td>
              <td>
                <select name="" id="" className="w-[9rem] ml-2">
                  <option value="">Open</option>
                  <option value="">Reopened</option>
                  <option value="">On hold</option>
                  <option value="">Closed</option>
                  <option value="">In Progress</option>
                  <option value="">Cancelled</option>
                </select>
              </td>
             
              <td>

                <div className="relative inline-block">
              <select
                className="bg-[#5d87ff] text-white rounded-lg w-[6rem] h-10 pl-3 pr-8 appearance-none"
                name="Action"
                id="Action"
              >
                <option value="" disabled selected>
                  Action
                </option>
                <option value="Reject">Edit</option>
                  <option value="Under review">Delete</option>
                  <option value="Pending">Preview</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-white">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.408 0.481-1.942 0l-4.695-4.502c-0.408-.418-0.436-1.17 0-1.615z" />
                </svg>
              </div>
            </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      {showId && <AddTicket forClose={() => setshowId(false)} />}
    </div>
    </div>
  );
};

export default UserTicket;
