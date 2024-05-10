import * as Select from "@radix-ui/react-select";
import React from "react";
export default (props) => {
  const [selectedItemIdx, setSelectedItemIdx] = React.useState(0);

  const menuItems = [
    ...(props.s1 ? [{
      label:props.s1,
      statusColor: "text-red-600",
      statusBg: "bg-red-600",
    }]: []),
    {
      label: props.s2,
      statusColor: "text-orange-600",
      statusBg: "bg-orange-600",
    },
    ...(props.s3 ? [{
      label: props.s3,
      statusColor: "text-green-600",
      statusBg: "bg-green-600",
    }] : []),
   
  ];
  

  return (
      <Select.Root onValueChange={setSelectedItemIdx}>
        <div className="">
          <Select.Trigger className=" w-[8rem] h-7 inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600  border rounded-3xl shadow-sm outline-none">
            <Select.Value  >
              <div className="flex items-center gap-x-3">
                <span
                  className={`w-2 h-2 rounded-full ${menuItems[selectedItemIdx].statusBg}`}
                ></span>
                <span
                  className={`text-sm ${menuItems[selectedItemIdx].statusColor}`}
                >
                  {menuItems[selectedItemIdx].label}
                </span>
              </div>
            </Select.Value>
            <Select.Icon className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-gray-400 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              avoidCollisions={false}
              className="w-[var(--radix-select-trigger-width)] max-h-64 mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
            >
              <Select.Viewport className="">
                {menuItems.map((item, idx) => (
                  <Styledselect key={idx} value={idx}>
                    <span
                      className={`w-2 h-2 rounded-full ${item.statusBg}`}
                    ></span>
                    {item.label}
                  </Styledselect>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </div>
      </Select.Root>
  );
};

const Styledselect = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    // If you want to make this component more customizable you can use classnames and tailwind-merge library.
    return (
      <Select.Item
        className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>
          <div className="pr-4 line-clamp-1 flex items-center gap-2">
            {children}
          </div>
        </Select.ItemText>
        <div className="w-6">
           <Select.ItemIndicator>
             <svg
              className="w-5 h-5 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg> 
          </Select.ItemIndicator> 
    </div>
      </Select.Item> 
    );
  }
);
