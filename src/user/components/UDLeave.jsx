import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { HiOutlineDotsVertical } from "react-icons/hi";

const UDLeave = () => {
  return (
    <div className="text-[#505050] text-xl border shadow-md rounded-md h-[18rem] w-[33rem] flex flex-col gap-8 p-5 sm:w-[80vw]">
      <div className="font-semibold flex justify-between items-center">
        Available Leave Days <HiOutlineDotsVertical  className=' rounded-full h-6 w-6 hover:bg-slate-300 transition duration-500'/>
      </div>
      <div>
        <div>
          <div className="flex w-full justify-between">
            <p className="h-4 text-sm ">Annual Leave</p>
            <p className="h-4 text-sm">35 of 60 days</p>
          </div>
          <ProgressBar
            completed={60}
            isLabelVisible={false}
            bgColor="#5d87ff"
            height={12}
            width={"100"}
          />
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p className="h-4 text-sm ">Sick Leave</p>
            <p className="h-4 text-sm">5 of 20 days</p>
          </div>
          <ProgressBar
            completed={25}
            isLabelVisible={false}
            bgColor="#5d87ff"
            height={12}
            width={"100"}
          />
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p className="h-4 text-sm ">Casual Leave</p>
            <p className="h-4 text-sm">1 of 10 days</p>
          </div>
          <ProgressBar
            completed={10}
            isLabelVisible={false}
            bgColor="#5d87ff"
            height={12}
            width={"100"}
          />
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p className="h-4 text-sm ">Compassionate Leave</p>
            <p className="h-4 text-sm">30 of 30 days</p>
          </div>
          <ProgressBar
            completed={100}
            isLabelVisible={false}
            bgColor="#5d87ff"
            height={12}
            width={"100"}
          />
        </div>
       
        
      </div>
    </div>
  );
};

export default UDLeave;
