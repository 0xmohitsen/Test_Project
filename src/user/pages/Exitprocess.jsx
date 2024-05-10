import React from "react";
import MainContainer from "../components/MainContainer";
import PageInfo from "../components/PageInfo";
import ExitForm2 from "../components/ExitForm2";


const Exitprocess = () => {

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
  const [ratings, setRatings] = React.useState(Array(10).fill(1));

  const handleEvent = (index, event) => {
    const newRatings = [...ratings];
    newRatings[index] = event.target.value;
    setRatings(newRatings);
  };
  
  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[70px] box-border gap-[43px] font-product-sans">
      <MainContainer/>
      <main className="w-[1654px] flex flex-row items-start justify-start py-0 pr-[50px] pl-5 box-border max-w-full lg:pr-[25px] lg:box-border">
        <section className="flex-1 flex flex-col items-center justify-start gap-[18px] max-w-full">
          <PageInfo pageName={"Exit Process"}/> 
          {/* <div className=" scale-90 flex flex-row items-start justify-start py-0 pr-0 pl-[31px] box-border max-w-full">
        <form className="gap-5 rounded-xl m-0 flex-1 bg-white flex flex-col items-start justify-start  box-border  max-w-full p-5">
            <h2 className="underline m-0 flex-1 relative  font-normal font-product-sans text-gray-1200 text-left inline-block min-w-[205px] z-[1]">
              Initiate Exit :
            </h2>
         
          <div className=" w-[944px] flex flex-col items-start justify-start gap- max-w-full">
            <label
              className="w-[726px] h-[30px] relative  font-product-sans text-gray-1200 text-left inline-block shrink-0 max-w-full "
              for="officers"
            >
              Notice period :
            </label>

            <select
              id="officers"
              className="flex-1 rounded-4xs bg-aliceblue flex flex-row items-center justify-end pt-[13px] px-[22px] pb-3.5 box-border min-w-[282px] max-w-full z-[1]  text-gray-600 w-[100%]"
            >
              <option value="intern">7 days(for intern)</option>
              <option value="Employee">30 days(for Employee)</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
          <div className=" w-[944px] flex flex-row flex-wrap items-start justify-start  max-w-full">
                Start Date
          </div>
            <input
              type="date"
              className="rounded-4xs bg-aliceblue flex items-center  pt-[13px] px-[22px] pb-3.5 box-border min-w-[282px] max-w-full "
            />
            </div>
          <div className="w-[944px] flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[70px] max-w-full mq750:gap-[70px] mq1050:gap-[70px]">
              <div className="w-[944px] flex flex-col items-start justify-start gap-[21px] max-w-full">
                <label
                  className="w-[726px] h-[30px] relative  font-product-sans text-gray-1200 text-left inline-block shrink-0 max-w-full "
                  for="officers"
                >
                  Primery Exit Reason
                </label>

                <select
                  id="PrimeryExitReason"
                  className="flex-1 rounded-4xs bg-aliceblue flex flex-row items-center justify-end pt-[13px] px-[22px] pb-3.5 box-border min-w-[282px] max-w-full w-[100%]"
                >
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
              </div>
            </div>
          </div>
          <div className="w-[944px] flex flex-col items-start justify-start pt-0 pb-[5px] pr-1.5 pl-0 box-border max-w-full">
            <label
              className="w-[726px] h-[30px] relative  font-product-sans text-gray-1200 text-left inline-block shrink-0 max-w-full "
              for="comment"
            >
              Comments/ Reasons
            </label>
            <textarea
              id="comment"
              className=" text-gray-600 [border:none] [outline:none] bg-aliceblue flex-1 relative rounded-4xs min-w-[250px] min-h-20 w-[100%] max-w-[100%] z-[1]"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="h-[20rem] w-[54rem] flex flex-row items-start justify-start">
        <form className="rounded-xl  flex-1 bg-white flex flex-col items-start justify-start pt-[68px] pb-[90px] pr-[23px] pl-5 box-border gap-[21px] max-w-full lg:pt-11 lg:pb-[58px] lg:box-border mq750:pt-[29px] mq750:pb-[38px] mq750:box-border">
            <h2 className="m-0 flex-1 relative  font-normal font-product-sans text-gray-1200 text-left inline-block min-w-[205px] z-[1] mq450:text-5xl mq1050:text-13xl">
              Personal Contact Details
            </h2>

          <div className="w-[944px] flex flex-col items-start justify-start gap-[21px] max-w-full">
            <div className="w-[726px] relative  font-product-sans text-gray-1200 text-left inline-block max-w-full z-[1] mq450:text-xl">
              Email
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-[54px] rounded-4xs flex flex-row items-center justify-start pt-[18px] px-[21px] pb-3.5 box-border font-product-sans text-xl text-gray-600 min-w-[250px] z-[1]"
              type="email"
            />
          </div>
          <div className="w-[944px] flex flex-col items-start justify-start gap-[21px] max-w-full">
            <div className="w-[726px] relative  font-product-sans text-gray-1200 text-left inline-block max-w-full z-[1] mq450:text-xl">
              Address
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-[54px] rounded-4xs flex flex-row items-center justify-start pt-[18px] px-[21px] pb-3.5 box-border font-product-sans text-xl text-gray-600 min-w-[250px] z-[1]"
              type="Text"
            />
          </div>
          <div className="w-[944px] flex flex-col items-start justify-start gap-[21px] max-w-full">
            <div className="w-[726px] relative font-product-sans text-gray-1200 text-left inline-block max-w-full z-[1] mq450:text-xl">
              Contact no.
            </div>
            <input
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full [border:none] [outline:none] bg-aliceblue self-stretch h-[54px] rounded-4xs flex flex-row items-center justify-start pt-[18px] px-[21px] pb-3.5 box-border font-product-sans text-xl text-gray-600 min-w-[250px] z-[1]"
              type="number"
            />
          </div>
        </form>
      </div>
      <div className="scale-90 flex flex-row items-start justify-start py-0 pr-0 pl-[31px] box-border max-w-full">
        <form className="rounded-xl m-0 flex-1 bg-white flex flex-col items-start justify-start pt-[68px] pb-[90px] pr-[23px] pl-5 box-border gap-[21px] max-w-full lg:pt-11 lg:pb-[58px] lg:box-border mq750:pt-[29px] mq750:pb-[38px] mq750:box-border">
            <h2 className="m-0 flex-1 relative  font-normal font-product-sans text-gray-1200 text-left inline-block min-w-[205px] z-[1] mq450:text-5xl mq1050:text-13xl">
              Employee/Intern exit feedback
            </h2>

          {feeddata.map((item) => {
            return (
              <div className="w-[944px] flex flex-col items-start justify-start pt-0 pb-[5px] pr-1.5 pl-0 box-border max-w-full">
                <label
                  className="flex  h-[30px] relative  font-product-sans text-gray-1200 text-left  shrink-0 max-w-full z-50 mq450:text-xl "
                  for={item.q}
                >
                  <div>{item.no}</div>
                  <div className="pl-4">{item.q}</div>
                </label>
                {item.no >= 4 && item.no <= 8 ? ( 
                  <div className="mt-6 w-[100%] flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={ratings[item.no]}
                        onChange={(event) => handleEvent(item.no, event)}
                        className="w-[40rem] "
                      />
                      <div className="">
                        {ratings[item.no]}
                      </div>
                    </div>
                  </div>
                ) : (
                  <textarea
                    id={item.q}
                    className="mt-2  text-gray-600 [border:none] [outline:none] bg-aliceblue flex-1 relative rounded-4xs min-w-[250px] min-h-20 w-[100%] max-w-[100%] z-[1]"
                  ></textarea>
                )}
              </div>
            );
          })}
        </form>
      </div>
 */}
 <ExitForm2/>
        </section>
      </main>
    </div>
  );
};

export default Exitprocess;
