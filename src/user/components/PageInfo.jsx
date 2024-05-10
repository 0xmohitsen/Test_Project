import React from "react";

const PageInfo = ({pageName}) => {
  return (
    <section className="w-[90%] border shadow-md rounded-lg bg-white flex flex-row items-center justify-start pt-[33px] px-[62px] pb-8 box-border max-w-full text-left text-6xl text-gray-1200 font-product-sans sm:text-lg sm:px-5 sm:h-9 ">
      <div className=" relative inline-block shrink-0 max-w-full z-[1] mq450:text-xl">{pageName}</div>
    </section>
  );
};

export default PageInfo;
