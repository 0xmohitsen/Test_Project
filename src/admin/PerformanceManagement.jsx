import { NavLink, Outlet } from "react-router-dom";
import AdminHeadingc from "./components/AdminHeadingc";

const PerformanceManagement = () => {
 
  const items = [
    {
      nm: "Target Setup",
      ky: 1,
      link: "trgt-setup",
    },
    {
      nm: "Targets",
      ky: 2,
      link: "trgts",
    },
    {
      nm: "Appraisal",
      ky: 3,
      link: "/",
    },
    {
      nm: "Settings",
      ky: 4,
      link: "/",
    },
    {
      nm: "Reports",
      ky: 5,
      link: "/",
    },
  ];

  return (
    <section className="no-scrollbar overflow-hidden flex flex-col items-center justify-center  font-sans">
      <AdminHeadingc name="Perfomance Management" img={"/phead.png"} />
      <div className="flex w-full justify-between mt-5 leading-relaxed">
        {items.map((item) => {
          return (
            <NavLink
              to={item.link}
              className="text-lg font-semibold cursor-pointer [border:none] flex flex-row items-center justify-center h-14 w-[14rem] no-underline text-[#505050] shadow-lg bg-[#ecf2ff] rounded-lg"
            >
              {item.nm}
            </NavLink>
          );
        })}
      </div>
      <div className="mt-5 w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default PerformanceManagement;
