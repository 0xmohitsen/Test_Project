import { useMemo } from "react";

const Replace = ({
  group1,
  brix,
  propHeight,
  propWidth,
  propHeight1,
  propWidth1,
}) => {
  const groupIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  

  return (
    <div className=" flex flex-row items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[29px] mq450:flex-wrap">
          <img
            className="h-[75.9px] w-[74.3px] relative"
            loading="lazy"
            alt=""
            src={group1}
            style={groupIconStyle}
          />
          <img
            className="h-[132.6px] w-[167.1px] relative"
            loading="lazy"
            alt=""
            src={brix}
          />
        </div>
      </div>
    </div>
  );
};

export default Replace;
