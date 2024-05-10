import React from "react";

const AdminTImesheet = () => {
  return (
    <div className=" flex flex-col gap-3 font-sans">
      <div className="border px-4 flex flex-col w-[73.6rem]  h-[17rem] bg-white rounded-md shadow-lg">
        <h2 className=" text-dimgray-200">Select Employee</h2>
        <div className="w-full h-[0.01rem] bg-gray-700 " />
        <p className="font-semibold">Employee Name*</p>
        <input
          type="search"
          placeholder="Type for hints..."
          className=" px-4 border h-10 w-1/2 rounded-md text-mini ml-2"
        />
        <div className="  mt-5 flex w-full justify-between h-10 ">
          <p className="font-semibold">* Required</p>
          <button className="w-20 h-10 mt-1 bg-[#e6fffa] text-mini font-bold text-[#13deb9] rounded-2xl hover:shadow-green-500 hover:shadow transition ease-in-out duration-500">
            View
          </button>
        </div>
      </div>
      <div className="border overflow-y-scroll no-scrollbar px-4 flex flex-col w-[73.6rem]  h-[23rem] bg-white rounded-md shadow-md">
        <div className="sticky top-0 z-20">
          <h2 className=" text-dimgray-200">Timesheets Pending Action</h2>
          <div className="w-full h-[0.01rem] bg-gray-700 " />
          <p className="font-semibold">(02) Records Found </p>
        </div>
        <table className="z-0 overflow-y-auto relative h-fit mt-3 w-full ">
          <tr className=" bg-aliceblue text-center h-[4rem]">
            <th>Employee Name</th>
            <th>Timesheet Period</th>
            <th>Actions</th>
          </tr>
          <tr className="  text-center h-[4rem]">
            <td>BharatTech</td>
            <td>11/03/2024 - 22/07/2024</td>

            <td>
              <button className="text-gray-700 font-bold rounded-3xl h-10 w-[5rem]">
                View
              </button>
            </td>
          </tr>
          <tr className="  text-center h-[4rem]">
            <td>R Sharma</td>
            <td>21/03/2024 - 22/07/2024</td>

            <td>
              <button className="text-gray-700 font-bold rounded-3xl h-10 w-[5rem]">
                View
              </button>
            </td>
          </tr>
          
        </table>
      </div>
    </div>
  );
};

export default AdminTImesheet;
