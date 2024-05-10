import React, { useState, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import AdminHeadingc from "./components/AdminHeadingc";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AdminAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const attendanceData = useMemo(
    () => [
      {
        Name: "John Doe",
        Department: "IT",
        Designation: "ui/ux",
        Team: "BharatAI",
        Date: "26/04/2024",
        Punch_in_Time: "03:55",
        Punch_out_Time: "05:06",
      },
      {
        Name: "Ritik",
        Department: "IT",
        Designation: "Frontend",
        Team: "BharatAI",
        Date: "21/03/2004",
        Punch_in_Time: "03:00",
        Punch_out_Time: "05:06",
      },
      {
        Name: "Keshab",
        Department: "IT",
        Designation: "Backend",
        Team: "BharatAI",
        Date: "21/03/2004",
        Punch_in_Time: "03:04",
        Punch_out_Time: "07:06",
      },
      {
        Name: "John Doe",
        Department: "IT",
        Designation: "ui/ux",
        Team: "BharatAI",
        Date: "21/03/2004",
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
        Header: "Department",
        accessor: "Department",
      },
      {
        Header: "Designation",
        accessor: "Designation",
      },
      {
        Header: "Team",
        accessor: "Team",
      },
      {
        Header: "Date",
        accessor: "Date",
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

  const filteredData = useMemo(() => {
    if (selectedDate) {
      const formattedSelectedDate = selectedDate.toLocaleDateString("en-GB");
      const selectedMonth = selectedDate.getMonth() + 1; // Get month (1-12)
      const selectedYear = selectedDate.getFullYear(); // Get year
      console.log(selectedMonth);
      console.log(selectedYear);
      console.log(selectedMonth);
      setShowCalendar(!showCalendar)
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
    <section className=" w-full flex flex-col items-center justify-center text-[#505050] font-product-sans mq450:gap-[219px] mq900:gap-[219px] mq1275:gap-[219px]">
      <div className="flex flex-col items-start justify-center gap-8 max-w-full sm:gap-[5px]">
        <AdminHeadingc name={"Attendance"} img={"/headimg.png"} />
        <button className=" ml-[73rem] bg-[#5d87ff] font-bold rounded-lg h-10 text-white hover:shadow hover:shadow-blue-700/50 hover:scale-105 transition ease-in-out duration-500 sm:ml-[17.5rem] sm:scale-75" 
         onClick={() => setShowCalendar(!showCalendar)}>
          Select Date
        </button>
        {showCalendar && (
          <div className="absolute ml-[57rem]  mt-[9rem] z-10 flex justify-center items-center sm:ml-[4rem] sm:mt-[1rem] sm:scale-[0.7]">
            <Calendar onChange={setSelectedDate} value={selectedDate} />
          </div>
        )}

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
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
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
                  <tr {...row.getRowProps()} className=" text-center h-[4rem] sm:h-[3rem]">
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
                          <option value="Reject">Reject</option>
                          <option value="Under review">Under review</option>
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
    </section>
  );
};

export default AdminAttendance;