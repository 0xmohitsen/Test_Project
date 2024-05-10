import { useState, useMemo, useEffect} from "react";

const Name = ({ name1, mauroSicard }) => {


  return (
    <section className=" w-[30rem] flex flex-col items-start justify-start py-0 px-5 box-border gap-[5px] max-w-full text-left text-9xl text-gray font-text-single-1000-regular">
      <div className=" h-8 relative leading-[32px] font-semibold inline-block mq450:text-xl mq450:leading-[26px] text-3xl">
        {name1}
      </div>
      {mauroSicard && ( 
        <div className="self-stretch rounded-[11.37px] bg-neutral-colors-100 flex flex-col items-start justify-start py-[27.285736083984375px] px-[31.83336067199707px] text-3xl border-[1.1px] border-solid border-neutral-colors-500">
          {mauroSicard}
        </div>
      )}
      
    </section>
  );
  
};

export default Name;
