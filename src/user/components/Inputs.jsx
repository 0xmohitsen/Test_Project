
import React, { useState, useEffect } from "react";
import Select from "react-select";
import Name from "./Name";
import Replace from "./Replace";

const options = [
  {
    value: "BharatAI",
    label: "BharatAI",
    logo: "/BharatAi.png",
  },
  {
    value: "Bsearch",
    label: "Bsearch",
    logo: "/Bsearch.png",
  },
  {
    value: "Clgcue",
    label: "Collegecue",
    logo: "/Collegecue.png",
  },
  {
    value: "Recag",
    label: "Recag",
    logo: "/Recag.png",
  },
];
const Inputs = () => {
  const [optiocns, setoptions] = useState(null);
  const [logoSrc, setLogoSrc] = useState(null);
  useEffect(() => {
    if (optiocns) {
      setLogoSrc(optiocns.logo);
    }
  }, [optiocns]);

  return (
    <div className="rounded-xl bg-white scale-[0.6] h-[77rem] w-[70rem] rounded-21xl bg-neutral-colors-100 shadow-[0px_2.3px_6.82px_rgba(22,_43,_84,_0.11),_0px_1.1px_3.41px_rgba(5,_17,_42,_0.09)] flex flex-col items-start justify-start pt-9 px-5 pb-[74px] box-border gap-[10px] tracking-[normal] mq450:gap-[16px] ">
      <div className="flex justify-evenly items-start w-[100%]">
        <div className="gap-6 flex flex-col">
          <Name name1="Name" propTextAlign="left" mauroSicard="Jon doe" />
          <Name name1="Role" nameHeight="unset" mauroSicard="ui/ux" />
          <Name name1="Company Name" mauroSicard="BHARATTECH" />
          <label
            className="text-left ml-4 text-3xll text-gray font-text-single-1000-regular text-7xl h-8 relative leading-[32px] font-semibold inline-block mq450:text-3xl mq450:leading-[26px]"
            htmlFor="Teamname"
          >
            Team Name
          </label>
          <Select
            id="Teamname"
            className=" z-50 w-[28rem] ml-4 h-20 rounded-[11.37px] bg-neutral-colors-100 flex flex-col items-center justify-evenly  py-[27.285736083984375px] px-[31.83336067199707px] text-13xl border-[1.1px] border-solid border-neutral-colors-500"
            options={options}
            onChange={setoptions}
          />

          <Name name1="Email" mauroSicard="doe@gmail.co" />
          <section className="flex flex-col items-start justify-start py-0 px-5 box-border gap-[20px] max-w-full text-left text-9xl text-gray font-text-single-1000-regular">
            <div className="w-[28rem] h-16 relative leading-[32px] font-semibold inline-block mq450:text-3xl mq450:leading-[26px]">
              Isotype
            </div>
            <div className="h-16 self-stretch rounded-[11.37px] bg-neutral-colors-100 flex flex-col items-center justify-center py-[27.285736083984375px] px-[31.83336067199707px] border-[1.1px] border-solid border-neutral-colors-500">
              {logoSrc && <img className="scale-50" src={logoSrc} alt="Logo" />}
            </div>
          </section>
          <section className="  flex flex-col items-start justify-start py-0 px-5 box-border gap-[20px] max-w-full text-left text-9xl text-gray font-text-single-1000-regular">
            <div className="w-[129px] h-8 relative leading-[32px] font-semibold inline-block mq450:text-3xl mq450:leading-[26px]">
              Logotype
            </div>
            <div className="w-[28rem] h-16 rounded-[11.37px] bg-neutral-colors-100 flex flex-row items-center justify-center p-[46px] border-[1.1px] border-solid border-neutral-colors-500 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <Replace
                group1={logoSrc}
                brix="/Bharattech.png"
                
              />
            </div>
          </section>
        </div>
        <div className="h-[90%] w-56 px-3 py-3 rounded-lg items-center gap-[46.6rem] flex flex-col justify-between mt-10  ">
          <div className="bg-[#EAF4FF] rounded-lg border-[1.1px] border-solid border-neutral-colors-500 shadow-2xl" >
            <img className="h-52 w-56" src="/replace-here@2x.png" alt="image" />
          </div>

          <button className="h-24 w-52 rounded-xl bg-sky-500 text-white font-bold  text-5xl  hover:bg-sky-600">
            Get Physical ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
