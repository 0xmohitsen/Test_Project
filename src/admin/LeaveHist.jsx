import React from "react";
import { FaFilter } from "react-icons/fa";

const LeaveHist = () => {
  return (
    <div className="bg-white w-[68.3rem] h-full rounded-xl pb-4 flex justify-center items-center">
      <table className="w-full border rounded-lg shadow-lg px-2">
        <tr className="text-5xl h-[5rem]">
          <th colSpan={5} className="text-left">
            Leave History
          </th>
          <th className="text-center "></th>
          <th className="text-center ">
           
          </th>
        </tr>
        <tr className=" bg-aliceblue text-center h-[4rem]">
          <th>Name(s)</th>
          <th>Duration(s)</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Type</th>
          <th>Reason(s)</th>
          <th>Actions</th>
        </tr>
        <tr className="  text-center h-[4rem]">
          <td>John doe</td>
          <td>5</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>Sick</td>
          <td>Personal</td>
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
                <option value="Approve">Approve</option>
                <option value="Decline">Decline</option>
                <option value="View Details">View Details</option>
                <option value="Extention">Extention</option>
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
        <tr className="text-center h-[4rem]">
          <td>John doe</td>
          <td>5</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>Sick</td>
          <td>Personal</td>
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
                <option value="Approve">Approve</option>
                <option value="Decline">Decline</option>
                <option value="View Details">View Details</option>
                <option value="Extention">Extention</option>
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

export default LeaveHist;
