import React from "react";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import RecallComponent from "./components/RecallComponent";

const LeaveRecall = () => {
  const [showModel, setshowModel] = useState(false)
  return (
    <div className="bg-white w-[68.3rem] h-full rounded-xl pb-4 flex justify-center items-center">
      <table className="w-full border shadow-lg rounded-lg px-2" >
        <tr className="text-5xl h-[5rem]">
          <th colSpan={5}>Leave History</th>
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
            <button onClick={()=> setshowModel(true)} className="bg-[#fdede8] text-[#eb0000]  rounded-lg h-10 w-20">
              Recall
            </button>
          </td>
        </tr>
        <tr className=" text-center h-[4rem]">
          <td>John doe</td>
          <td>5</td>
          <td>22/04/2022</td>
          <td>28/04/2022</td>
          <td>Sick</td>
          <td>Personal</td>
          <td>
            <button onClick={()=> setshowModel(true)} className="bg-[#fdede8] text-[#eb0000]  rounded-lg h-10 w-20">
              Recall
            </button>
            {showModel && <RecallComponent onClose={()=>setshowModel(false)}/>}
            
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LeaveRecall;
