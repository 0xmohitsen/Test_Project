import { Outlet, useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import AdminHeadingc from "./components/AdminHeadingc";

const LeaveManagement = () => {
  return (
    <section className="no-scrollbar w-full flex flex-col items-center justify-center text-left font-product-sans mq450:gap-[219px] mq900:gap-[219px] mq1275:gap-[219px]">
      <div className="w-full flex flex-col items-start justify-center gap-8 max-w-full mq900:gap-[33px]">
        <AdminHeadingc name="Leave Management" img={"/perfomancehead.png"} />
        <div className="flex justify-between w-full">
          <NavLink
            to={"leave-setting"}
            className="text-xl font-semibold cursor-pointer [border:none] flex flex-row items-center justify-center h-14 w-[18rem] no-underline text-[#505050] shadow-lg bg-[#ecf2ff] rounded-lg"
          >
            Leave Settings{" "}
          </NavLink>
          <NavLink
            to={"leave-Recall"}
            className="text-xl font-semibold cursor-pointer [border:none] flex flex-row items-center justify-center h-14 w-[18rem] no-underline text-[#505050] shadow-lg bg-[#ecf2ff] rounded-lg"
          >
            Leave Reacll
          </NavLink>
          <NavLink
            to={"leave-history"}
            className="text-xl font-semibold cursor-pointer [border:none] flex flex-row items-center justify-center h-14 w-[18rem] no-underline text-[#505050] shadow-lg bg-[#ecf2ff] rounded-lg"
          >
            Leave History
          </NavLink>
          <NavLink
            to={"/"}
            className="text-xl font-semibold cursor-pointer [border:none] flex flex-row items-center justify-center h-14 w-[18rem] no-underline text-[#505050] shadow-lg bg-[#ecf2ff] rounded-lg"
          >
            Relief Officers
          </NavLink>
        </div>
      </div>
      <div className="mt-5">
        <Outlet />
      </div>
    </section>
  );
};

export default LeaveManagement;
