import React from "react";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";
import UserIP from "../components/UserIP";

const UserTimesheet = () => {
  //   state = {
  //     location: null,
  //   };
  const [location, setLocation] = useState(null);

  const [rows, setRows] = useState([0]);

  const addRow = () => {
    const newRow = {
      //   project: "",
      //   activity: "",
      //   location: "",
      //   hours: Array(7).fill(""),
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  return (
    <div className="bg-aliceblue h-screen gap-10 flex flex-col  items-center justify-start font-sans">
      <MainContainer />
      <PageInfo pageName={"Time Sheets"} />
      <div className="font-sans px-4 flex flex-col w-[84rem]  h-fit bg-white rounded-md shadow-md sm:w-[87%] overflow-x-scroll  mq1600:no-scrollbar">
        <div className="flex justify-between items-center sm:w-[63rem] ">
          <h2 className=" text-dimgray-200 sm:min-w-[6.09rem] sm:text-sm">Edit Timesheet</h2>
          <div className="flex  items-center  w-fit">
            <p>Timesheet Period : </p>
            <input
              type="date"
              className="mt-1 mx-2 border h-8 rounded-lg text-mini"
            />
            <b>-</b>
            <input
              type="date"
              className="mt-1 mx-2 border h-8 rounded-lg text-mini"
            />
          </div>
        </div>
        <div className="w-full h-[0.01rem] bg-gray-700 sm:w-[63rem]" />

        <table className="mt-10 w-full ">
          <thead>
            <tr className=" bg-aliceblue text-sm   text-center max-h-[2rem]">
              <th>Project</th>
              <th>Activity</th>
              <th>Location</th>

              <th>
                <h3 className="relative bottom-5 h-0 mb-[rem] text-6xl">1</h3>
                <p className=" h-0 relative bottom-3 font-semibold">Mon</p>
              </th>
              <th>
                <h3 className="relative bottom-5 h-0 mb-[rem] text-6xl">2</h3>
                <p className=" h-0 relative bottom-3 font-semibold">Tue</p>
              </th>
              <th>
                <h3 className="relative bottom-5 h-0 mb-[rem] text-6xl">3</h3>
                <p className=" h-0 relative bottom-3 font-semibold">Wed</p>
              </th>
              <th>
                <h3 className="relative bottom-5 h-0 mb-[rem] text-6xl">4</h3>
                <p className=" h-0 relative bottom-3 font-semibold">Thu</p>
              </th>
              <th>
                <h3 className="relative bottom-5 h-0 mb-[rem] text-6xl">5</h3>
                <p className=" h-0 relative bottom-3 font-semibold">Fri</p>
              </th>
              <th>
                <h3 className="relative bottom-5 h-0 mb-[rem] text-6xl">6</h3>
                <p className=" h-0 relative bottom-3 font-semibold">Sat</p>
              </th>
              <th>
                <h3 className="relative bottom-5 h-0 mb-[rem] text-6xl">7</h3>
                <p className=" h-0 relative bottom-3 font-semibold">Sun</p>
              </th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="text-center h-[4rem]">
                <td>
                  <input
                    type="search"
                    placeholder="Type for hints..."
                    className="border h-10 rounded-lg text-mini w-[8rem]"
                  />
                </td>
                <td>
                  <select
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini"
                  >
                    <option selected disabled>
                      --select--
                    </option>
                    <option value="">Bailable</option>
                    <option value="">Non-bailable</option>
                  </select>
                </td>

                <td className="w-full pt-5 justify-center items-center no-scrollbar overflow-x-scroll flex ">
                  <UserIP setLocation={setLocation} />
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini w-[5rem]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini w-[5rem]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini w-[5rem]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini w-[5rem]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini w-[5rem]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini w-[5rem]"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" border h-10 rounded-lg text-mini w-[5rem]"
                  />
                </td>
                <td>
                  <div
                    className="bg-slate-300 h-10 w-10 flex justify-center items-center rounded-xl cursor-pointer"
                    onClick={() => deleteRow(index)}
                  >
                    <RiDeleteBin5Line className="h-5 w-5" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addRow}
          className="w-[10rem] mt-4 mb-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default UserTimesheet;
