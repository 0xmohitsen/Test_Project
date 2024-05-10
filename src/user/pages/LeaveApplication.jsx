import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";
import FrameComponent22 from "../components/FrameComponent22";

const LeaveApplication = () => {
  const leaveItem = [
    {
      day: 60,
      type: "Annual Leave",
    },
    {
      day: 20,
      type: "Sick Leave",
    },
    {
      day: 60,
      type: "Maternity Leave",
    },
    {
      day: 30,
      type: "Compassionate Leave",
    },
    {
      day: 0,
      type: "Casual Leave",
    },
  ];
  const attendanceData = useMemo(
    () => [
      {
        Name: "John Doe",
        Duration: "5",
        Start_Date: "10/12/2024",
        End_Date: "21/01/2025",
        Reason: "Feaver",
        Punch_in_Time: "03:55",
        Punch_out_Time: "05:06",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "Duration",
        accessor: "Duration",
      },
      {
        Header: "Start_Date",
        accessor: "Start_Date",
      },
      {
        Header: "End_Date",
        accessor: "End_Date",
      },
      {
        Header: "Reason",
        accessor: "Reason",
      },
      {
        Header: "Punch_in_Time",
        accessor: "Punch_in_Time",
      },
      {
        Header: "Punch_out_Time",
        accessor: "Punch_out_Time",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: attendanceData }, useSortBy);

  return (
    <div className=" w-[100] relative bg-aliceblue overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-[146px] box-border gap-[43px] tracking-[normal] mq450:gap-[43px]">
      <MainContainer />
      <PageInfo pageName="Dashboard > Apply for Leave" />
      <div className=" items-center justify-center w-[1691px] flex flex-row  box-border max-w-full shrink-0">
        <main className="w-[90%] flex flex-col  gap-[18px] max-w-[144%] rounded-md shrink-0">
          <section className="rounded-md self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full text-left  text-gray-1200 font-product-sans">
            <div className="rounded-md w-[1584px] flex flex-col items-center justify-center max-w-full">
              <div className="rounded-md self-stretch bg-white flex flex-col items-center justify-start py-12 pr-[34px] pl-[39px] box-border relative gap-[97px] max-w-full mq450:gap-[97px] mq800:gap-[97px] mq800:pt-5 mq800:pb-5 mq800:box-border mq1300:pt-[31px] mq1300:pb-[31px] mq1300:box-border">
                <div className="w-[1584px] h-[1133px] relative bg-white hidden max-w-full z-[0]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
                  <div className="w-[1397px] flex flex-col items-start justify-start gap-[43px] max-w-full mq800:gap-[43px]">
                    <div className="w-[336px] flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
                        <h2 className="m-0 h-[30px] text-5xl flex-1 ">
                          Leave Application
                        </h2>
                      </div>
                    </div>
                    <div className=" relative flex justify-center items-center w-[100%] ">
                      <div
                        id="slider"
                        className="flex gap-12  h-full  overflow-x-scroll  scroll  scroll-smooth flex-nowrap  no-scrollbar"
                      >
                        {leaveItem.map((item) => {
                          return (
                            <FrameComponent22
                              frameCompassionate={item.day}
                              annualLeave={item.type}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[17px] max-w-full text-center text-xl">
                  <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-left text-6xl mq800:flex-wrap">
                    <div className="w-[312px] flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border">
                      <b className="self-stretch relative z-[1] mq450:text-xl">
                        Leave History
                      </b>
                    </div>
                  </div>

                  <div className="text-mini overflow-x-scroll no-scrollbar relative  bg-white w-full h-full rounded-xl pb-4 flex justify-start items-center">
                    <table
                      {...getTableProps()}
                      className="border rounded-md shadow-lg w-full "
                    >
                      <thead>
                        {headerGroups.map((headerGroup) => (
                          <tr
                            {...headerGroup.getHeaderGroupProps()}
                            className=" bg-[#ecf2ff] text-center h-[4rem]"
                          >
                            {headerGroup.headers.map((column) => (
                              <th
                                {...column.getHeaderProps(
                                  column.getSortByToggleProps()
                                )}
                              >
                                {column.render("Header")}
                                {column.isSorted && (
                                  <span>
                                    {column.isSortedDesc ? " ↓" : " ↑"}
                                  </span>
                                )}
                              </th>
                            ))}
                            <th className="bg-[#fdede8] text-[#eb0000]">
                              {" "}
                              Action
                            </th>
                          </tr>
                        ))}
                      </thead>

                      <tbody {...getTableBodyProps()} className="text-black">
                        {rows.map((row) => {
                          prepareRow(row);
                          return (
                            <tr
                              {...row.getRowProps()}
                              className=" text-center h-[4rem]"
                            >
                              {row.cells.map((cell) => {
                                return (
                                  <td {...cell.getCellProps()} className="">
                                    {cell.render("Cell")}
                                  </td>
                                );
                              })}
                              <td>
                                <div className="relative inline-block">
                                  <select
                                    className="bg-[#5d87ff] text-white rounded-lg w-[6rem] h-10 pl-3 pr-8 appearance-none"
                                    name="Action"
                                    id="Action"
                                  >
                                    <option value="" disabled selected>
                                      Action
                                    </option>
                                    <option value="Reject">Reject</option>
                                    <option value="Under review">
                                      Under review
                                    </option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-white">
                                    <svg
                                      className="fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.408 0.481-1.942 0l-4.695-4.502c-0.408-.418-0.436-1.17 0-1.615z" />
                                    </svg>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LeaveApplication;
