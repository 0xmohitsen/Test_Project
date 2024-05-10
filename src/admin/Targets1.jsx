import React from "react";
import { FaFilter } from "react-icons/fa";
const Targets1 = () => {
  return (
    <div className=" h-fit py-2 w-[80rem] flex flex-col  gap-6 overflow-hidden no-scrollbar">
      <table className="w-full rounded-lg border shadow-lg">
        <tr className=" h-[5rem]">
          <th colSpan={3} className="text-left">
            Manage Targets
          </th>
          <th className="text-center "></th>
          <th className="text-center ">
            <FaFilter />
            <select
              className=" ml-5 bg-[#e6fffa] hover:shadow-green-500 hover:shadow transition ease-in-out duration-500 text-[#13deb9] font-bold text-lg rounded-lg h-10 pl-1"
              name="Action"
              id="Action"
            >
              <option value="" disabled selected>
                Export
              </option>
              <option value="PDF">PDF</option>
              <option value="Word">Word</option>
              <option value="XL">XL</option>
            </select>
          </th>
        </tr>
        <tr className="text- bg-aliceblue text-center h-[4rem]">
          <th>Name(s)</th>
          <th>Title(s)</th>
          <th>KPI Weight</th>
          <th>Target Date</th>
          <th>Actions</th>
        </tr>
        <tr className="  text-center h-[4rem]">
          <td>John doe</td>
          <td>
            Make 400
            <br />
            Billion Naira
          </td>
          <td>5</td>
          <td>
            01 -Jan-2021 /<br />
            01 -Jan-2022
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
                <option value="Approve">Edit KPI Goals</option>
                <option value="Decline">Initiate KPI</option>
                <option className="text-red-400" value="View Details">
                  Delete KPI
                </option>
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
        <tr className="   text-center h-[4rem]">
          <td>John doe</td>
          <td>
            Make 400
            <br />
            Billion Naira
          </td>
          <td>5</td>
          <td>
            01 -Jan-2021 / <br />
            01 -Jan-2022
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
                <option value="Approve">Edit KPI Goals</option>
                <option value="Decline">Initiate KPI</option>
                <option className="text-red-400" value="View Details">
                  Delete KPI
                </option>
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
  );
};

export default Targets1;
