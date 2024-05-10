import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import AdminHeadingc from "./components/AdminHeadingc";

const AdminKPI = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  
  const datal = [
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

  const RADIAN = Math.PI / 180;

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section className="w-full flex flex-col items-center justify-center text-left  font-product-sans">
      <div className="flex flex-col items-start justify-center gap-8 w-[78rem] mq900:gap-[33px]">
        <AdminHeadingc name="KPI Goal" img={"/goalhead.png"}/>

        <div className="border shadow-lg w-[78rem] overflow-y-scroll no-scrollbar relative h-[30rem] overflow-x-scroll no-scrollbar flex-col items-start justify-start py-4  bg-white   rounded-xl pb-4 flex ">
          <div className="flex justify-evenly w-full">
            <div className="">
              <p className="ml-3 h-0"> Name</p>
              <input className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                type="text"
              />
            </div>
            <div className="">
              <p className="ml-3 h-0"> Department</p>
              <input className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
              type="text"
              />
            </div>
            <div className="">
              <p className="ml-3 h-0"> UID</p>
              <input className="mt-6 bg-aliceblue w-[5rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                type="text"
              />
            </div>
          </div>
          <div className="ml-[7.5rem] flex w- justify-start">
            <div className="">
              <p className="ml-3 h-0"> Designation</p>
              <input className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                type="text"
              />
            </div>
            <div className="ml-[7.3rem]">
              <p className="ml-3 h-0"> Team</p>
              <input className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <LineChart
              width={500}
              height={300}
              data={datal}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminKPI;
