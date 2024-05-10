import { NavLink } from "react-router-dom";

const FrameComponent4 = (props) => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-base  font-product-sans">
      {props.heading && (
        <div className="relative inline-block  text-xs mb-2">
          {props.heading}
        </div>
      )}
      <div className="text-smi ">
        <NavLink
          end
          activeclassname="active"
          to={props.firstlink}
          className="  hover:bg-[#ecf2ff] hover:text-[#5d87ff] rounded-lg  w-[12.53rem]  no-underline   cursor-pointer [border:none]  flex flex-row items-center justify-start pl-5  relative gap-[0.5rem]"
        >
          <img className="h-[1rem] " alt="" src={props.firstimg} />
          <h3 className=" font-thin">{props.firstname}</h3>
        </NavLink>
        {props.secname && (
          <NavLink
            end
            activeclassname="active"
            to={props.seclink}
            className="hover:bg-[#ecf2ff] hover:text-[#5d87ff] rounded-lg w-[12.53rem]   no-underline   cursor-pointer [border:none]  flex flex-row items-center justify-start pl-5  relative gap-[0.5rem]"
          >
            <img className="h-[1rem]  " alt="" src={props.secimg} />
            <h3 className=" font-thin inline-block">{props.secname}</h3>
            {props.notification && (
              <div className="ml-8 text-white  scale-75 w-[1.5rem] flex text-sm justify-center items-center bg-[#49beff] rounded-full self-stretch h-[23px] relative">
                <b>{props.notification}</b>
              </div>
            )}
          </NavLink>
        )}
        {props.thname && (
          <NavLink
            end
            activeclassname="active"
            to={props.thlink}
            className="hover:bg-[#ecf2ff] hover:text-[#5d87ff] rounded-lg w-[12.53rem]  no-underline   cursor-pointer [border:none]   flex flex-row items-center justify-start pl-5  relative gap-[0.5rem]"
          >
            <img className="h-[1rem]  " alt="" src={props.thimg} />
            <h3 className=" font-thin">{props.thname}</h3>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default FrameComponent4;
