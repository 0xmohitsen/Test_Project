import { useMemo } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBarsProgress } from "react-icons/fa6";
import { FaBell, FaTools,FaEnvelope ,FaPowerOff} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SelectItem from "./SelectItem";

const Header = ({toggleSidebar, isSidebarVisible}) => {
  const navigate = useNavigate();
  

 
  return (
    <header className="mt-4 w-full relative   justify-between box-border top-0  left-0  flex-1 flex flex-row items-center  text-2xs text-white font-product-sans sm:w-screen">
      <div  onClick={toggleSidebar} className="cursor-pointer z-20">
        <FaBarsStaggered className="text-gray-700  h-[1.5rem]  w-[1.5rem]  " />
      </div>
      <div className=" flex flex-row items-center justify-between box-border static max-w-full sm:w-[80vw] sm:items-center">
          <div className=" mr-[12rem] ml-[3.5rem] sticky    text-xl text-darkgray rounded-3xl  w-[40rem]  flex flex-row items-center justify-between sm:w-32 sm:mr-0 sm:ml-0 sm:scale-75  ">
            <select
              name="candidates"
              id="candidates"
              className=" bg-slate-200 hidden h-[2.4rem] w-[8rem] text-[#505050] text-smi  cursor-pointer [border:none]  rounded-tl-mini rounded-tr-12xs rounded-br-none rounded-bl-mini  pl-2 gap-[5px] sm:block "
            >
              <option value="All Candidates">All Candidates</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <div className="sm:hidden"><SelectItem /></div>
            <input
              type="search"
              placeholder=" Search..."
              className=" text-xl h-[2.55rem] w-[28.8rem] relative  shrink-0 whitespace-nowrap flex flex-col items-start justify-start box-border max-w-full sm:text-sm"
            />
             <div className="bg-white h-[2.6rem] rounded-r-3xl w-[6rem] flex justify-center items-center mr-6"> <img
                className="w-6 h-6"
                loading="eager"
                alt=""
                src="/search.svg"
              /></div>
        </div>
        <div className="flex justify-center left-0 relative ">
          <div className="flex items-center justify-between gap-6 sm:hidden">
            <div className="hover:shadow-lg hover:shadow-blue-500/50 transition ease-in-out duration-500 h-12 w-12  rounded-full flex flex-row items-center justify-center bg-[#ecf2ff]">
              <FaBell className="h-5 w-5 text-[#5d87ff]" />
              <div className="absolute top-0 right-[14.5rem] flex items-center justify-center w-5 h-5 rounded-[50%] bg-[#49beff]">
                <b>13</b>
              </div>
            </div>
            <div className="hover:shadow-lg hover:shadow-green-700/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#e6fffa]">
              <FaTools className="h-5 w-5 text-[#13deb9]" />
            </div>
            <div className="hover:shadow-lg hover:shadow-red-100/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#fdede8]">
              <FaEnvelope className="h-5 w-5 text-[#eb0000]" />
              <div className="absolute top-0 right-[5.5rem] flex items-center justify-center w-5 h-5 rounded-[50%] bg-[#49beff]">
                <b>04</b>
              </div>
            </div>
            <div onClick={()=>navigate("/")} className="hover:shadow-lg hover:shadow-orange-500/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#fdede8]">
              <FaPowerOff  className="h-5 w-5 text-[#fa8a6d]" />
            </div>
            <div className="h-[53px] flex-1 relative "></div>
          </div>
        </div>
        <div className="h-[27px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border"></div>
      </div>
    </header>
  );
};

export default Header;
