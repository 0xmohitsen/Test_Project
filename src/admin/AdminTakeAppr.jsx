import React from "react";
import { FaFilter } from "react-icons/fa";
import AdminHeadingc from "./components/AdminHeadingc";

const AdminTakeAppr = () => {
  return (
    <section className=" flex flex-col items-center justify-center text-left text-black font-product-sans mq450:gap-[219px] mq900:gap-[219px] mq1275:gap-[219px]">
      <AdminHeadingc name="Take Appraisal " img="/apprhead.png" />
      <div className="mt-10 border shadow-lg overflow-x-scroll no-scrollbar relative  bg-white w-[80rem] h-full rounded-xl  flex justify-start items-center">
        <table className="min-w-[100rem] ">
          <tr className=" bg-aliceblue text-center h-[4rem]">
            <th>Name(s)</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Team</th>
            <th>Time sheet details</th>
            <th>Working hours</th>
            <th>KPI</th>
            <th>Name and nature of work</th>
            <th>Detaild summary of work done so far</th>
            <th>Action</th>
          </tr>
          <tr className="  text-center h-[4rem]">
            <td>John doe</td>
            <td>IT</td>
            <td>UI/UX</td>
            <td>BhartAI</td>
            <td>none</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
                  <option value="Reject">Reject</option>
                  <option value="Under review">Under review</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
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
          <tr className="  text-center h-[4rem]">
            <td>John doe</td>
            <td>IT</td>
            <td>UI/UX</td>
            <td>BhartAI</td>
            <td>none</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
                  <option value="Reject">Reject</option>
                  <option value="Under review">Under review</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
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
    </section>
  );
};

export default AdminTakeAppr;
