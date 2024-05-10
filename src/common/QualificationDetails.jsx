import React from "react";
import { useLocation } from "react-router-dom";

const QualificationDetails = (props) => {
    const location = useLocation();
  return (
    <div className="h-[37rem] w-[44rem] flex-1 rounded-mini bg-white flex flex-col items-center  gap-6   px-5    max-w-[44rem]  mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className="h-28 mb-4 pt-5">
        <div className="w-[700px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
          <b className="h-[30px] flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
            Academic Records
          </b>
        </div>
        <div className="h-24 [border:none]  bg-aliceblue  max-w-[100%] min-w-[100%] [outline:none] flex-1 rounded-mini flex flex-col items-start justify-evenly py-3 px-3  box-border font-product-sans text-lg text-gray-600  z-[1]">
          <h3 className="h-0 text-lg">{location.state.name}</h3>
          <p className="text-sm">{location.state.course} in {location.state.department}, {location.state.stdate} - {location.state.endate}</p>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default QualificationDetails;
