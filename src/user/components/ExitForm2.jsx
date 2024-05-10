import React from "react";
import { FaStar } from 'react-icons/fa';
import { useState } from "react";

const StarRating = ({ count, value, onChange }) => {
    return (
      <div className="flex items-center gap-5 ml-14">
        {[...Array(count)].map((_, i) => (
          <FaStar
            key={i}
            className={`h-5 w-5  cursor-pointer ${
              value > i ? 'text-yellow-500 ' : 'text-gray-800'
            }`}
            onClick={() => onChange(i + 1)}
          />
        ))}
      </div>
    );
  };
const ExitForm2 = () => {
  const feeddata = [
    {
      no: 1,
      q: "We would like to know what has promoted you to take this decission?",
    },
    {
      no: 2,
      q: " Let us know what can the organization do better to retain your talent?",
    },
    {
      no: 3,
      q: "Would you be comfortable telling us what you are planning to do next?",
    },
    {
      no: 4,
      q: "In the scale of 10 rate our organization?",
    },
    {
      no: 5,
      q: " In the scale of 10 rate the working calture of our organization? ",
    },
    {
      no: 6,
      q: "In the scale of 10 rate the work ethics of our organization?",
    },
    {
      no: 7,
      q: "In the scale of 10 rate your team lead/manager of our organization?",
    },
    {
      no: 8,
      q: "In the scale of 10 rate your team management of our organization?",
    },
    {
      no: 9,
      q: "Mention few learnings that you carried out from us?",
    },
    {
      no: 10,
      q: "Any suggestions?",
    },
  ];

const [ratings, setRatings] = useState(Array(10).fill(1));

const handleRatingChange = (no, newRating) => {
  const newRatings = [...ratings];
  newRatings[no - 1] = newRating; // Adjust index to match question number
  setRatings(newRatings);
};

  return (
    <div className="p-5 border rounded-md bg-white text-[#505050] min-w-[80%]">
      <form action="">
        <div>
          <div className="border-b h-10 flex  items-center font-semibold text-xl">
            Initiate Exit
          </div>
          <div className="flex w-full items-center gap-5">
            <div className="w-1/2">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="h-0"> Notice Period</p>
                  <div className="relative inline-block">
                    <select
                      className="border rounded-lg w-full h-10 pl-3 pr-8 appearance-none"
                      name="Action"
                      id="Action"
                    >
                      <option value="" disabled selected>
                        Select From Bellow Dropdown
                      </option>
                      <option value="intern">7 days(for intern)</option>
                      <option value="Employee">30 days(for Employee)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-[#505050]">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.408 0.481-1.942 0l-4.695-4.502c-0.408-.418-0.436-1.17 0-1.615z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="h-0"> Primery Exit Reason</p>
                  <div className="relative inline-block">
                    <select
                      className="border  rounded-lg w-full h-10 pl-3 pr-8 appearance-none"
                      name="Action"
                      id="Action"
                    >
                      <option value="" disabled selected>
                        Select From Bellow Dropdown
                      </option>
                      <option>Completion of internship</option>
                      <option> Family reason</option>
                      <option>Better job oppertunity</option>
                      <option> Health issues</option>
                      <option>Pay</option>
                      <option>Personal reasons</option>
                      <option>Issues with management </option>
                      <option>starting own business/ start-up</option>
                      <option>Commute/Relocation</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-[#505050]">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.408 0.481-1.942 0l-4.695-4.502c-0.408-.418-0.436-1.17 0-1.615z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <div className="w-1/2">
              <div className="flex flex-col gap-3">
                <p className="h-0"> Start Date</p>
                <input
                  className="border rounded-lg w-[33rem] h-10 pl-3 pr-8 appearance-none"
                  type="date"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="h-0"> Primery Exit Reason</p>
                  <div className="relative inline-block">
                    <textarea className="border   rounded-lg w-[32.7rem] h-10 pl-3 pr-8 appearance-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="border-b h-10 flex  items-center font-semibold text-xl">
            Personal Contact Details
          </div>
          <div className="flex w-full items-center gap-5">
            <div className="w-1/2">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="h-0"> Email</p>
                  <div className="relative inline-block">
                    <input
                      className="border rounded-lg w-[34rem] h-10 pl-3 pr-8 appearance-none"
                      name="Action"
                      id="Action"
                      type="email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="h-0"> Contact No.</p>
                  <div className="relative inline-block">
                    <input
                      className="border rounded-lg w-[34rem] h-10 pl-3 pr-8 appearance-none"
                      name="Action"
                      id="Action"
                      type="tel"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <div className="w-full">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="h-0"> Primery Exit Reason</p>
                  <div className="relative inline-block">
                    <textarea className="border   rounded-lg w-[96%] max-w-[96%] h-10 pl-3 pr-8 appearance-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="border-b h-10 flex  items-center font-semibold text-xl">
            Employee/Intern Exit Feedback
          </div>
          <div className="mt-5">
          {feeddata.map((item) => (
          <div key={item.no} className="w-full mb-3 flex flex-col">
            <label
              className="flex h-[30px] relative font-product-sans text-gray-1200 text-left shrink-0 max-w-full z-50 mq450:text-xl"
              htmlFor={item.q}
            >
              <div>{item.no}</div>
              <div className="pl-4">{item.q}</div>
            </label>
            {item.no >= 4 && item.no <= 8 ? (
              <StarRating
                count={10}
                value={ratings[item.no - 1]}
                onChange={(newRating) => handleRatingChange(item.no, newRating)}
              />
            ) : (
              <textarea
                id={item.q}
                className="mt-2 border text-gray-600 border-none outline-none flex-1 rounded min-w-[250px] min-h-10 w-full"
              ></textarea>
            )}
          </div>
        ))}
          </div>
        </div>

        <input type="submit" value="Submit" className="ml-[60rem]  bg-[#e6fffa] mt-5 text-[#13deb9] font-bold  rounded-lg w-[13%] h-10  shadow hover:shadow-green-500 hover:scale-105 transition ease-in-out duration-500 " />
      </form>
    </div>
  );
};

export default ExitForm2;
