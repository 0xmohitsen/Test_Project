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
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
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

const UserKPI = () => {
  return (
    <div className="bg-aliceblue h-full w-screen gap-10 flex flex-col  items-center justify-start font-sans">
      <MainContainer />
      <PageInfo pageName={"KPI Goals"} />
      <div className="bg-white w-[90%] h-fit rounded-xl flex flex-col justify-evenly items-center mb-10">
        <div className="flex flex-col sm:flex-row sm:gap-10">
          <div className="flex w-[68.3rem] justify-evenly sm:flex-col sm:w-full">
            <div className="">
              <p className="ml-3 h-0"> Name</p>
              <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600 sm:w-20 sm:h-7">
                John Doe
              </div>
            </div>
            <div className="">
              <p className="ml-3 h-0"> Department</p>
              <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600 sm:w-20 sm:h-7">
                IT
              </div>
            </div>
            <div className="">
              <p className="ml-3 h-0"> UID</p>
              <div className="mt-6 bg-aliceblue w-[5rem] h-10 flex items-center px-5 rounded-xl text-gray-600 sm:h-7">
                4894dd84
              </div>
            </div>
          </div>
          <div className="ml-[4.8rem] flex w-[57rem] justify-start gap-[5.1rem]  sm:flex-col sm:w-full sm:gap-0 sm:ml-0">
            <div className="">
              <p className="ml-3 h-0"> Designation</p>
              <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600 sm:w-20 sm:h-7">
                UI/UX
              </div>
            </div>
            <div className="">
              <p className="ml-3 h-0"> Team</p>
              <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600 sm:w-20 sm:h-7">
                Bharat AI
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center sm:flex-col h-full ">
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
          <ResponsiveContainer width="60%" height={250}>
            <LineChart
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
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserKPI;
