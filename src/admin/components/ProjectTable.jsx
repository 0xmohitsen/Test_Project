import React, { useState, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import Styledselect from "./Styledselect";

const ProjectTable = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const attendanceData = useMemo(
    () => [
      {
        Project: "Office Management",
        Project_Id: "PRO-1",
        Leader: "John",
        Team: "Johny,Ram,Dam,wdcw....",
        Deadline: "17 Apr 2024",
        Priority:<Styledselect s1={"High"} s2="Medium" s3="Low" defaultValue="Medium"/>,
        Status: <Styledselect s3={"Active"} s2="Inactive" defaultValue="Active"/>,
      },
      {
        Project: "Hospital Adminstration",
        Project_Id: "PRO-2",
        Leader: "John",
        Team: "Johny,Ram,Dam,wdcw....",
        Deadline: "17 Apr 2024",
        Priority:<Styledselect s1={"High"} s2="Medium" s3="Low" defaultValue="Medium"/>,
        Status: <Styledselect s3={"Active"} s2="Inactive" defaultValue="Active"/>,
      },
      {
        Project: "Video calling app",
        Project_Id: "PRO-3",
        Leader: "John",
        Team: "Johny,Ram,Dam,wdcw....",
        Deadline: "17 Apr 2024",
        Priority:<Styledselect s1={"High"} s2="Medium" s3="Low" defaultValue="Medium"/>,
        Status: <Styledselect s3={"Active"} s2="Inactive" defaultValue="Active"/>,
      },
      {
        Project: "Project Management",
        Project_Id: "PRO-4",
        Leader: "John",
        Team: "Johny,Ram,Dam,wdcw....",
        Deadline: "17 Apr 2024",
        Priority:<Styledselect s1={"High"} s2="Medium" s3="Low" defaultValue="Medium"/>,
        Status: <Styledselect s3={"Active"} s2="Inactive" defaultValue="Active"/>,
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "Project",
      },
      {
        Header: "Project_Id",
        accessor: "Project_Id",
      },
      {
        Header: "Leader",
        accessor: "Leader",
      },
      {
        Header: "Team",
        accessor: "Team",
      },
      {
        Header: "Deadline",
        accessor: "Deadline",
      },
      {
        Header: "Priority",
        accessor: "Priority",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (selectedDate) {
      const formattedSelectedDate = selectedDate.toLocaleDateString("en-GB");
      const selectedMonth = selectedDate.getMonth() + 1; // Get month (1-12)
      const selectedYear = selectedDate.getFullYear(); // Get year
      console.log(selectedMonth);
      console.log(selectedYear);
      console.log(selectedMonth);
      setShowCalendar(!showCalendar);
      return attendanceData.filter((item) => {
        const itemDate = new Date(item.Date);
        const itemMonth = itemDate.getMonth() + 1;
        const itemYear = itemDate.getFullYear();

        // Filter by date, month, or year
        return (
          item.Date === formattedSelectedDate ||
          (selectedMonth && itemMonth === selectedMonth) ||
          (selectedYear && itemYear === selectedYear)
        );
      });
    }
    return attendanceData;
  }, [attendanceData, selectedDate]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredData }, useSortBy);

  return (
    <div className=" overflow-x-scroll no-scrollbar relative  bg-white w-full h-full rounded-xl pb-4 flex justify-start items-center sm:mx-2 sm:w-[22.4rem]">
      <table
        {...getTableProps()}
        className="border rounded-md shadow-lg w-full sm:text-smi"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className=" bg-[#ecf2ff] text-center h-[4rem] sm:h-[3rem]"
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " ↓" : " ↑"}</span>
                  )}
                </th>
              ))}
              <th className="bg-[#fdede8] text-[#eb0000]"> Leave</th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className="text-black">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className=" text-center h-[4rem] sm:h-[3rem]"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td>
                  <div className="relative inline-block sm:scale-75">
                    <select
                      className="bg-[#5d87ff] text-white rounded-lg w-[6rem] h-10 pl-3 pr-8 appearance-none"
                      name="Action"
                      id="Action"
                    >
                      <option value="" disabled selected>
                        Action
                      </option>
                      <option value="Reject">Edit</option>
                      <option value="Under review">Delete</option>
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
  );
};

export default ProjectTable;
