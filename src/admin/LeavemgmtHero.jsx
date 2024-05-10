import React from "react";

const LeavemgmtHero = () => {
  return (
      <div className="no-scrollbar overflow-hidden rounded-3xl bg-[#5d87ff] shadow-xl flex flex-col items-start justify-end py-24 px-[47px] box-border relative gap-[46px] min-h-[375px] min-w-[80rem] text-[50px] text-white">
        <div className="w-[1283px] h-[369px] relative rounded-3xl bg-midnightblue hidden max-w-full z-[0]" />
        <h1 className="m-0 w-[739px] h-[30px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-11xl mq900:text-21xl">
          <span>Manage ALL</span>
          <span className="text-gold z-10"> Leave Applications</span>
        </h1>
        <div className="w-[594px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full text-6xl">
          <h3 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-xl">
            A relaxed employee is a performing employee.
          </h3>
        </div>
        <img
          className="w-[467px] h-full absolute my-0 mx-[!important] top-[0px] right-[43px] bottom-[0px] max-h-full object-cover"
          loading="eager"
          alt=""
          src="/leave-1@2x.png"
        />
        <img
          className="w-[209px] h-[156px] absolute my-0 mx-[!important] top-[-4px] left-[61px] object-contain z-[1]"
          loading="eager"
          alt=""
          src="/arrow-2@2x.png"
        />
        <img
          className="w-[205px] h-[209px] absolute my-0 mx-[!important] right-[497px] bottom-[-54px] object-contain z-[3]"
          alt=""
          src="/arrow-3@2x.png"
        />
      </div>
  );
};

export default LeavemgmtHero;
