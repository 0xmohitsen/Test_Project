import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeaveSetting = () => {
  const navigate = useNavigate();
  const Updategur = () => {
    navigate( {
      replace: true,
      state: {
        name: formState.name,
        relation: formState.relation,
        phone: formState.phone,
        address: formState.address,
      },
    });
  };
  const [formState, setFormState] = useState({
    name: "",
    relation: "",
    phone: "",
    address: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className=" w-full overflow-scroll no-scrollbar h-[20rem] rounded-xl mt-5 pb-4 flex justify-center gap-3 items-start">
      <form
        action=""
        className="border shadow-lg bg-white flex flex-col h-[37rem] gap-3 w-[34rem] rounded-xl py-3 px-3 "
      >
        <h2>Create Leave Settings</h2>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Leave Plan Name
            <input
              required
              type="text"
              name="name"
              onChange={handleInputChange}
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm pl-5"
              placeholder="Sick"
            />
          </div>
          <div className="flex flex-col gap-2">
            Duration
            <input
              required
              type="number"
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm pl-5"
            />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Do you want to activate Leave Recall for this plan ?
            <select
              required
              className="bg-aliceblue h-10 w-[33rem] rounded-lg text-sm pl-5"
              name="Action"
              id="Action"
            >
              <option value="" disabled selected>
                Select option from dropdown
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Would you like to activate leave bonus
            <select
              required
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm pl-5"
              name="Action"
              id="Action"
            >
              <option value="" disabled selected>
                Select option from dropdown
              </option>
              <option value="Approve">Approve</option>
              <option value="Decline">Decline</option>
              <option value="View Details">View Details</option>
              <option value="Extention">Extention</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            How much percentage of leave bonus?
            <input
              required
              type="text"
              className="bg-aliceblue h-10 w-56 rounded-lg text-sm pl-5"
              placeholder="Percentage (%)"
            />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Select Leave Allocation
            <select
              required
              className="bg-aliceblue h-10 w-[33rem] rounded-lg text-sm pl-5"
              name="Action"
              id="Action"
            >
              <option value="" disabled selected>
                Select option from dropdown
              </option>
              <option value="Approve">senior</option>
              <option value="Decline">junior</option>
              <option value="View Details">intermidate</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          Reason for Recall
          <textarea
            className="bg-aliceblue h-20 w-[31rem] rounded-lg text-sm pl-5"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input
          onClick={() => {
            if (document.querySelector("form").checkValidity()) {
              Updategur();
            }
          }}
          type="submit"
          name="Create"
          value={"Create"}
          className="bg-[#e6fffa] text-[#13deb9] font-bold  rounded-lg w-[20%] h-10 ml-[25rem] shadow hover:shadow-green-500 hover:scale-105 transition ease-in-out duration-500 "
        />
      </form>
      <div className="border shadow-lg bg-white flex flex-col  h-[37rem] gap-3 w-[34rem] rounded-xl py-3 px-3 ">
       <div className="flex justify-between items-center"> <h2>Manage Leave Settings</h2>
        <HiDotsVertical /></div>
        <table className="w-full">
          <tr className=" bg-aliceblue text-center h-[3rem]">
            <th>Leave Plan </th>
            <th>Duration(s)</th>
            <th>Recall /Autorenew</th>
            <th>Actions</th>
          </tr>
          <tr className=" text-center h-[3rem]">
            <td>{formState.name}</td>
            <td>60</td>
            <td>No / No</td>
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
    </div>
  );
};

export default LeaveSetting;
