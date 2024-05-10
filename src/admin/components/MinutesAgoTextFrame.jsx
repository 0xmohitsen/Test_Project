import { useMemo } from "react";

const MinutesAgoTextFrame = ({
  childViewFrame,
  salesExecutive,
  accessBank,
  minsAgo,
  propHeight,
  propWidth,
  propMinWidth,
  propWidth1,
}) => {
  const parentFrameStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const childVectorStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const minsAgoStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className=" self-stretch rounded-mini bg-aliceblue flex flex-row items-end justify-between pt-[17px] pb-4 pr-5 pl-3.5 box-border gap-[20px] max-w-full z-[1] text-left text-lg text-black font-product-sans sm:w-[22rem] sm:gap-0">
      <div className="h-[79px] w-[591px] relative rounded-mini bg-aliceblue hidden max-w-full" />
      <div
        className="h-[46px] w-[291px] flex flex-row items-end justify-start gap-[14px]"
        style={parentFrameStyle}
      >
        <div className="h-[45px] w-14 relative rounded z-[2] flex items-center justify-center">
          <img
            className="h-full w-full z-[2] object-contain absolute left-[0px] top-[4px] [transform:scale(1.4)]"
            loading="eager"
            alt=""
            src={childViewFrame}
          />
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[5px]"
          style={childVectorStyle}
        >
          <b className="self-stretch relative z-[2]">{salesExecutive}</b>
          <div className="relative text-smi text-gray-400 z-[2]">
            {accessBank}
          </div>
        </div>
      </div>
      <div
        className="relative text-smi text-gray-400 z-[2]"
        style={minsAgoStyle}
      >
        {minsAgo}
      </div>
    </div>
  );
};

export default MinutesAgoTextFrame;
