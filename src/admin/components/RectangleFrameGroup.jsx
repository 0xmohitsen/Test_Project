const RectangleFrameGroup = ({ ellipse12, johnDoe, roleProductManager }) => {
  return (
    <div className="self-stretch rounded-mini bg-aliceblue flex flex-row items-end justify-between pt-[17px] pb-[13px] pr-[41px] pl-[19px] box-border gap-[20px] max-w-full z-[1] text-left text-lg text-black font-product-sans sm:w-[22rem] sm:gap-0 ">
      {/* <div className="h-[79px] w-[591px] relative rounded-mini bg-aliceblue hidden max-w-full" /> */}
      <div className="w-[287px] flex flex-row items-center justify-start gap-[14px]">
        <img
          className="h-[49px] w-[52px] relative rounded-[50%] object-contain z-[2]"
          loading="eager"
          alt=""
          src={ellipse12}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
          <b className="self-stretch relative z-[2]">{johnDoe}</b>
          <b className="w-[149px] relative text-smi inline-block text-gray-400 z-[2]">
            {roleProductManager}
          </b>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[23px] text-3xs">
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
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <b className="relative z-[2]">Download</b>
          <div className="w-[35px] h-[30px] relative rounded bg-darkslateblue-100 z-[2]">
            <div className="absolute top-[0px] left-[0.5px] rounded bg-darkslateblue-100 w-full h-full hidden" />
            <img
              className="absolute top-[5px] left-[9.5px] w-[19px] h-[19px] overflow-hidden z-[3]"
              alt=""
              src="/download.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleFrameGroup;
