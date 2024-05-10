import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";

const UserTakeAprisal = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
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
    <div className="bg-aliceblue h-[85rem] gap-10 flex flex-col  items-center justify-start font-sans sm:h-full sm:w-screen sm:justify-center">
      <MainContainer />
      <PageInfo pageName={"Take Appraisal"} />
      <div className="bg-white h-[65rem] w-[48rem] rounded-xl shadow-xl flex flex-col items-center justify-start py-4 sm:w-[97%] sm:h-fit">
        <div className="flex w-[40rem] justify-between sm:w-[90%] sm:flex-col-reverse">
          <div className="">
            <p className="ml-3 h-0"> Name</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              John Doe
            </div>
          </div>
          <div className="">
            <p className="ml-3 h-0"> UID</p>
            <div className="mt-6 bg-aliceblue w-[5rem] h-10 flex items-center px-5 rounded-xl text-gray-600 sm:w-[90%]">
              4894dd84
            </div>
          </div>
        </div>
        <div className="flex w-[40rem] justify-between sm:w-[90%]">
          <div className="">
            <p className="ml-3 h-0"> Department</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              IT
            </div>
          </div>
        </div>
        <div className="flex w-[40rem] justify-between sm:w-[90%]">
          <div className="">
            <p className="ml-3 h-0"> Designation</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              UI/UX
            </div>
          </div>
        </div>
        <div className="flex w-[40rem] justify-between sm:w-[90%]">
          <div className="">
            <p className="ml-3 h-0"> Team</p>
            <div className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600">
              Bharat AI
            </div>
          </div>
        </div>
        <div className="flex w-[40rem] justify-evenly mt-10 sm:flex-col sm:w-[90%] sm:items-center sm:gap-5">
          <div className=" flex-col rounded-xl shadow-2xl bg-sky-300 flex justify-start items-center h-[10rem] w-[10rem]">
            <b className="h-0 mb-3 "> Time sheet details</b>
            <div className="flex flex-col pl-4  gap-1">
              {" "}
              <p className="h-0 mb-5 leading-4 pr-4">
                Total working hours <b>: 50 </b>
              </p>
              <p className="h-0 mb-5 leading-4">
                Total non-working hours <b>: 20 </b>
              </p>
              <p className="h-0 mb-5 leading-4">
                Number of tasks delivered <b>: 10 </b>
              </p>
            </div>
          </div>
          <div className="flex-col rounded-xl shadow-2xl bg-sky-300 flex justify-center items-center h-[10rem] w-[10rem]">
            <p> Working Hours:</p>
            <h1>50 hrs</h1>
          </div>
          <div className="rounded-xl shadow-2xl flex justify-center items-center h-[10rem] w-[10rem]">
            <PieChart className="scale-[2]" width={400} height={400}>
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
          </div>
        </div>

        <form
          action=""
          className="w-[40rem] flex flex-col items-center sm:w-full"
        >
          <div className="">
            <p className="ml-3 h-0"> Name and nature of work</p>
            <select className="mt-6 bg-aliceblue w-[40rem] h-14 text-base flex items-center px-5 rounded-xl text-gray-600 sm:w-[20rem] sm:h-7">
              <option value="">Full-time</option>
              <option value="">Part-time</option>
              <option value="">Remote</option>
            </select>
          </div>
          <div className="">
            <p className="ml-3 h-0"> Detailed summary of work done so far</p>
            <input
              className="mt-6 bg-aliceblue w-[40rem] h-14 text-base flex items-center px-5 rounded-xl text-gray-600 sm:w-[20rem] sm:h-7"
              type="text"
            />
          </div>
          <div className="">
            <p className="ml-3 h-0"> Detailed summary of work done so far</p>
            <input
              className="mt-6 bg-aliceblue w-[40rem] h-14 text-base flex items-center px-5 rounded-xl text-gray-600 sm:w-[20rem] sm:h-7"
              type="text"
            />
          </div>
          <div className="">
            <p className="ml-3 h-0"> Detailed summary of work done so far</p>
            <input
              className="mt-6 bg-aliceblue w-[40rem] h-14 text-base flex items-center px-5 rounded-xl text-gray-600 sm:w-[20rem] sm:h-7"
              type="text"
            />
          </div>
          <input
            type="submit"
            value="Submit for review"
            className="h-10  mt-7 w-[13rem] bg-green-500 text-white font-bold text-lg rounded-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default UserTakeAprisal;
