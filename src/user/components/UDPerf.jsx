import React, { PureComponent } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UDPerf = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="text-[#505050] text-xl border shadow-md rounded-md h-[18rem] w-[33rem] flex flex-col gap-8 p-5 sm:w-[80vw]">
      <div className="font-semibold flex justify-between items-center">
        Perfomance Appraisal{" "}
        <HiOutlineDotsVertical className=" rounded-full h-6 w-6 hover:bg-slate-300 transition duration-500" />
      </div>
      <div>
      <div className="text-smi flex-grow">  
            
      <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={15}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#5d87ff" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UDPerf;
