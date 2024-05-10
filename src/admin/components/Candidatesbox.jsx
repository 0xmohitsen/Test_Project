import React from "react";

const Candidatesbox = ({ ellipse12, ename, applied }) => {
  return (
    <div className="rounded-mini bg-aliceblue flex flex-row items-center justify-evenly  box-border h-[5rem] w-[27.9rem] max-w-full z-[1] text-left text-lg text-black font-product-sans sm:w-[22rem] sm:px-2 sm:gap-0">
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
          <div className="flex items-center justify-center max-h-5 w-44 ">
            <p className="w-[7rem] relative text-smi inline-block text-gray-400 z-[2]">
              <span>Applied for:</span>
            </p>
            <b className="w-44 relative text-smi inline-block text-gray-400 z-[2]">
              {applied}
            </b>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[23px] text-3xs">
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <span className="">
            <b>ATS(%)</b>
          </span>
          <div className="w-[35px] h-[30px] relative rounded  z-[2]">
            <div className="bg-blue-800 text-white text-xs h-8 w-8 flex justify-center items-center rounded-full">
              <b> 80</b>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-[4px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-[5px]">
            <b className="relative z-[2]">View</b>
          </div>
          <div className="w-[35px] h-[30px] relative rounded bg-forestgreen-200 z-[2]">
            <div className="absolute top-[0px] left-[0px] rounded bg-forestgreen-200 w-full h-full hidden" />
            <img
              className="absolute top-[9px] left-[7px] w-5 h-[13px] z-[3]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidatesbox;
