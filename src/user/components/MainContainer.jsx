import { useState } from "react";
import { FaBell, FaTools, FaEnvelope, FaPowerOff } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MainContainer = ({ onKrisLogo3Click }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="h-[5rem]  border-b shadow-lg bg-white flex flex-row  justify-start items-center pr-[1px] pl-[1rem] box-border gap-11 min-w-full text-left text-xl text-[#505050] font-product-sans mq450:pr-5 mq450:box-border mq1150:pl-7 mq1150:pr-[43px] mq1150:box-border">
      <div className="">
        <img
          className="w-[9rem] h-[9rem]  object-contain "
          loading="eager"
          alt=""
          src="/Bharattech.png"
          onClick={() => navigate("/user")}
        />
      </div>
      <div className="flex  gap-10 mr-9 sm:hidden">
        <div className="w-[8rem] h-full flex flex-col items-center justify-between ">
          <p> Dashboard</p>
          <div className="self-stretch h-[5px] relative rounded-2xs bg-[#5d87ff] " />
        </div>
        <div className="w-[8rem] h-full flex flex-col items-center justify-between ">
          <p> Requests</p>
          <div className="self-stretch h-[5px] relative rounded-2xs bg-[#5d87ff] " />
        </div>
        <div className="w-[8rem] h-full flex flex-col items-center justify-between ">
          <p> Payroll</p>
          <div className="self-stretch h-[5px] relative rounded-2xs bg-[#5d87ff] " />
        </div>
        <div className="w-[8rem] h-full flex flex-col items-center justify-between ">
          <p> Company</p>
          <div className="self-stretch h-[5px] relative rounded-2xs bg-[#5d87ff] " />
        </div>
        <div className="w-[8rem] h-full flex flex-col items-center justify-between ">
          <p> Extras</p>
          <div className="self-stretch h-[5px] relative rounded-2xs bg-[#5d87ff] " />
        </div>
      </div>

      <div className="ml-[5rem] flex justify-center left-0 relative text-2xs text-white font-product-sans">
        <div className="flex items-center justify-between gap-6">
          <div className="md:hidden flex gap-5">
            <div className="cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition ease-in-out duration-500 h-12 w-12  rounded-full flex flex-row items-center justify-center bg-[#ecf2ff]">
              <FaBell className="h-5 w-5 text-[#5d87ff]" />
              <div className="absolute top-0 right-[17.5rem] flex items-center justify-center w-5 h-5 rounded-[50%] bg-[#49beff]">
                <b>13</b>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow-lg hover:shadow-green-700/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#e6fffa]">
              <FaTools className="h-5 w-5 text-[#13deb9]" />
            </div>
            <div className="cursor-pointer hover:shadow-lg hover:shadow-red-100/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#fdede8]">
              <FaEnvelope className="h-5 w-5 text-[#eb0000]" />
              <div className="absolute top-0 right-[8.5rem] flex items-center justify-center w-5 h-5 rounded-[50%] bg-[#49beff]">
                <b>04</b>
              </div>
            </div>
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer hover:shadow-lg hover:shadow-orange-500/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#fdede8]"
            >
              <FaPowerOff className="h-5 w-5 text-[#fa8a6d]" />
            </div>
          </div>
          <div className="h-12 w-12 pb-1 sm:hidden">
            <img
              className=" relative"
              loading="eager"
              alt=""
              src="/group-29.svg"
            />
          </div>
          <div className="sm:block hidden">
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="absolute flex flex-col top-20 left-0 h-[100vh] w-[10rem] pl-6 gap-3  bg-white shadow-md z-50 rounded-md border ">
          <div className="h-12 w-12 pb-1 ">
            <img
              className=" relative"
              loading="eager"
              alt=""
              src="/group-29.svg"
            />
          </div>
          <div className="cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition ease-in-out duration-500 h-12 w-12  rounded-full flex flex-row items-center justify-center bg-[#ecf2ff]">
            <FaBell className="h-5 w-5 text-[#5d87ff]" />
          </div>
          <div className="cursor-pointer hover:shadow-lg hover:shadow-green-700/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#e6fffa]">
            <FaTools className="h-5 w-5 text-[#13deb9]" />
          </div>
          <div className="cursor-pointer hover:shadow-lg hover:shadow-red-100/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#fdede8]">
            <FaEnvelope className="h-5 w-5 text-[#eb0000]" />
          </div>
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer hover:shadow-lg hover:shadow-orange-500/50 transition ease-in-out duration-500 h-12 w-12 rounded-full flex flex-row items-center justify-center bg-[#fdede8]"
          >
            <FaPowerOff className="h-5 w-5 text-[#fa8a6d]" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainContainer;
