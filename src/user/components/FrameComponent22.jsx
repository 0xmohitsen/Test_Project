import { useMemo } from "react";

const FrameComponent22 = ({
  frameCompassionate,
  annualLeave,
  propTextAlign,
  onGroupActionsClick,
}) => {
  const annualLeaveStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="bg-[#ecf2ff] border pr-16 h-[9rem]  rounded-lg flex flex-row items-center justify-center  relative  text-left  text-[#5d87ff] font-product-sans sm:w-[10rem]">
        <div className="scale-150 ml-6 text-6xl font-bold rounded-[50%] bg-white flex justify-center items-center    w-[4rem] h-[4rem] z-[3] sm:text-lg sm:scale-100 sm:absolute sm:left-0">
          {frameCompassionate}
        </div>
      <div className="flex-1 flex flex-col items-center justify-center  box-border  text-6xl text-[#5d87ff]">
        <div className="self-stretch flex flex-col items-end justify-start ">
          <b
            className="w-[190px] pl-7 h-[30px] relative bottom-7 text-center inline-block shrink-0 z-[2] sm:text-sm sm:bottom-10 sm:w-[10rem] sm:ml-10"
          >
            {annualLeave}
          </b>
          <button className="mr-9 cursor-pointer  h-10 w-28 bg-[#5d87ff] rounded-4xl flex flex-row items-center justify-center sm:absolute sm:left-24">
            <b className="text-xl font-product-sans text-[#ecf2ff] sm:text-smi">
              Apply
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent22;
