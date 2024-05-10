import React from "react";

const TargetSetup = () => {
  return (
    <div className="w-[80rem] flex justify-center mt-4">
    <form className="border shadow-lg h-fit py-2 w-[50%]  rounded-mini flex flex-col items-center justify-center px-4 gap-2">
      <div className="self-stretch flex flex-row items-start justify-start gap-[60px]">
        <div className="flex-1 flex  items-start justify-between  w-full">
          <div>
            <div className="w-[44%] h-[30px] relative inline-block shrink-0 z-[1]">
              Title
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                required
                className="w-[44%] pl-4 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0 [border:none] [outline:none] bg-aliceblue self-stretch h-10 rounded-mini flex flex-row items-center justify-center box-border font-product-sans  text-gray-600 min-w-[250px] z-[1]"
                placeholder=""
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-[44%] h-[30px] relative inline-block shrink-0 z-[1]">
              KPI Weight
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                className="w-[44%]  pl-4 m-0 [border:none] [outline:none] bg-aliceblue self-stretch h-10 rounded-mini flex flex-row items-center justify-center  box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
                placeholder=""
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
        <div className="w-[220px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="pb-3">Description</div>
        </div>
        <input
          required
          className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-10 rounded-mini flex flex-row items-end justify-start pl-5 box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
          placeholder=""
          type="email"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
        <div className="w-[220px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="pb-3">Employees</div>
        </div>
        <select
          name="emp"
          id="emp"
          className="w-full pl-5 [border:none] [outline:none] bg-aliceblue  h-10 rounded-mini flex flex-row items-center justify-center   box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
        >
          <option disabled selected>Select from bellow dropdown</option>
          <option value="Part-time">Part-time</option>
          <option value="Full-time">Full-time</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq1100:flex-wrap mq1100:gap-[60px]">
        <div className="flex-1 flex  items-start justify-between  w-full">
          <div>
            <div className="w-[44%] h-[30px] relative inline-block shrink-0 z-[1]">
              Start Date
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                required
                className="w-[44%] pl-4 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0 [border:none] [outline:none] bg-aliceblue self-stretch h-10 rounded-mini flex flex-row items-center justify-center box-border font-product-sans  text-gray-600 min-w-[250px] z-[1]"
                placeholder=""
                type="date"
              />
            </div>
          </div>
          <div>
            <div className="w-[44%] h-[30px] relative inline-block shrink-0 z-[1]">
              End Date
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                className="w-[44%]  pl-4 m-0 [border:none] [outline:none] bg-aliceblue self-stretch h-10 rounded-mini flex flex-row items-center justify-center  box-border font-product-sans text-gray-600 min-w-[250px] z-[1]"
                placeholder=""
                type="date"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full pl-[40rem] gap-5 mt-5">
      <input
          type="submit"
          name="Create"
          value={"Create"}
          className="bg-[#e6fffa] text-[#13deb9] font-bold  rounded-lg w-[20%] h-10  shadow hover:shadow-green-500 hover:scale-105 transition ease-in-out duration-500 "
        />
      <input
          type="submit"
          value={"Add New Target"}
          className="bg-[#fdede8] text-[#eb0000] font-bold  rounded-lg w-[20%] h-10  shadow hover:shadow-red-200 hover:scale-105 transition ease-in-out duration-500 "
        />
        
      </div>
    </form></div>
  );
};

export default TargetSetup;
