import React from "react";

const Salarybox = ({ ellipse12, ename, salary, pstate }) => {
  return (
    <div className="self-stretch rounded-mini bg-aliceblue flex flex-row items-end justify-between pt-[17px] pb-[13px] pr-[41px] pl-[19px] box-border gap-[20px] max-w-full z-[1] text-left text-lg text-black font-product-sans sm:w-[22rem] sm:gap-0">
      <div className="h-[79px] w-[591px] relative rounded-mini bg-aliceblue hidden max-w-full" />
      <div className="w-[287px] flex flex-row items-center justify-start gap-[14px]">
        <img
          className="h-[49px] w-[52px] relative rounded-[50%] object-contain z-[2]"
          loading="eager"
          alt=""
          src={ellipse12}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
          <b className="self-stretch relative z-[2]"> {ename}</b>
          <div className="flex items-center justify-around max-h-5 max-w-52 sm:max-w-40 ">
            <p className="w-[149px] relative text-smi inline-block text-gray-400 z-[2]">
              <span>Salary Amount:</span>
            </p>
            <b className="w-[149px] relative text-smi inline-block text-gray-400 z-[2]">
              <span>{salary}</span>
            </b>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[23px] text-3xs">
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <span className="">
            <b>{pstate}</b>
          </span>
          {pstate == "paid" ? (
            <div className="bg-green-800 h-3 w-20 rounded-md"></div>
          ) : (
            <div className="bg-yellow-600 h-3 w-20 rounded-md "></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Salarybox;
