const UpdateProfilePersonalDetail = () => {
  return (<>
      <img className="w-7 relative top-[-275px] left-[780px] z-50" alt="Edit" src="/vector.svg" />
    <div className="h-[37rem] flex-1 rounded-mini bg-white flex flex-col items-center justify-center   px-5  gap-10  max-w-[46rem] mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className=" flex flex-row items-center justify-center max-w-full text-center">
        <div className=" flex flex-col items-center justify-center gap-[13px] max-w-full">
          <div className="flex flex-row items-center justify-center  box-border max-w-full">
            <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-center justify-center gap-[36px]">
                <div className="flex flex-row items-start justify-center">
                  <img
                    className="h-[200px] w-[200px] relative z-[1]"
                    loading="eager"
                    alt=""
                    src="/group-48.svg"
                  />
                </div>
                <div className=" relative inline-block shrink-0 z-[1] mq450:text-base">
                  Employee Name
                </div>
              </div>
            </div>
          </div>
          <h3 className="m-0 w-72 h-[30px] relative text-11xl font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-lg mq750:text-5xl">
            John Doe Francis
          </h3>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center  box-border max-w-full">
        <div className=" flex flex-col items-center justify-center gap-[13px]">
          <div className=" flex flex-row items-center justify-center  box-border">
            <div className=" flex-1 relative inline-block z-[1] mq450:text-base">
              Department
            </div>
          </div>
          <h3 className="m-0  h-[30px] relative text-11xl font-bold font-inherit text-left inline-block shrink-0 z-[1] mq450:text-lg mq750:text-5xl">{`Design & Marketing`}</h3>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-evenly max-w-full">
        <div className="gap-28 flex flex-row items-center justify-between max-w-full mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="pb-4 flex-1 relative inline-block z-[1] mq450:text-base">
                Job Title
              </div>
            </div>
            <h3 className="m-0  h-[30px] w-60 inline-block relative text-11xl font-bold font-inherit text-left shrink-0 z-[1] mq450:text-lg mq750:text-5xl">
              UI / UX Designer
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="pb-4 flex-1 relative inline-block z-[1] mq450:text-base">
                Job Category
              </div>
            </div>
            <h3 className="m-0  h-[30px] relative text-11xl font-bold font-inherit text-left inline-block shrink-0 z-[1] mq450:text-lg mq750:text-5xl">
              Full Time
            </h3>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default UpdateProfilePersonalDetail;
