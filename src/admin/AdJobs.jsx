import React from "react";
import AdminHeadingc from "./components/AdminHeadingc";

const AdJobs = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-left text-black font-product-sans mq450:gap-[219px] mq900:gap-[219px] mq1275:gap-[219px]">
      <div className=" flex flex-col items-center justify-center gap-8 max-w-full mq900:gap-[33px]">
        <AdminHeadingc name="Jobs" img={"/jobhead.png"}/>

        <div className="w-full overflow-x-scroll no-scrollbar relative  bg-white  h-full rounded-xl pb-4 flex justify-center items-center sm:w-[23rem]">
        <form
        action=""
        className="border shadow-lg bg-white flex flex-col  h-full gap-3 w-[34rem] rounded-xl py-3 px-3 "
      >
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Job Title
            <input
              required
              type="text"
              name="name"
            
              className="bg-aliceblue h-10 w-[32.7rem] rounded-lg text-sm pl-5 sm:w-[20rem]"
            />
          </div>
          
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            Work place
            <select
              required
              className="bg-aliceblue h-10 w-[34rem] rounded-lg text-sm pl-5 sm:w-[20rem]"
              name="Action"
              id="Action"
            >
              <option value="" disabled selected>
                Select option from dropdown
              </option>
              <option value="Yes">Remote</option>
              <option value="No">Office</option>
            </select>
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
          Job Type
            <select
              required
              className="bg-aliceblue h-10 w-[34rem] rounded-lg text-sm pl-5 sm:w-[20rem]"
              name="Action"
              id="Action"
            >
              <option value="" disabled selected>
                Job Type
              </option>
              <option value="Ful Time">Ful Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
              <option value="Internship">Internship</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          Detailed Description
          <textarea
            className="bg-aliceblue h-20 w-[32.6rem] rounded-lg text-sm pl-5 sm:w-[20rem]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input
          type="submit"
          name="Create"
          value={"Create"}
          className="bg-green-600 text-white font-bold text-xl rounded-lg w-[90%] h-10 ml-6"
        />
      </form>
        </div>
      </div>
    </section>
  );
};

export default AdJobs;
