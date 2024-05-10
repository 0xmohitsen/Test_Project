import Candidatesbox from "./Candidatesbox";
import MinutesAgoTextFrame from "./MinutesAgoTextFrame";
import RectangleFrameGroup from "./RectangleFrameGroup";
import Salarybox from "./Salarybox";


const ContainerFrame = () => {
  return (
    <>
          <div className="container flex justify-center ">
        <div className="scale-90 self-stretch flex flex-col items-start justify-start gap-[20rem] max-w-fit	 text-center text-29xl text-white mq825:gap-[40px]">
          <div className="self-stretch flex flex-row items-start justify-start box-border max-w-full text-left text-xl text-black">
            <div className="flex-1 flex flex-row items-start justify-start gap-[4rem] max-w-full lg:flex-wrap">
              <div className="border  shadow-lg rounded-mini bg-white flex flex-col items-center justify-start pt-[42px] pb-[23px] pr-[19px] pl-[19px] box-border gap-[12px] max-w-full mq450:pt-[27px] mq450:pb-5 mq450:box-border">
                <div className="w-[631px] h-[367px] relative rounded-mini bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[21px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
                    <b className="relative z-[1] mq450:text-base">Candidates</b>
                    <img
                      className="h-[18px] w-5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/ellipsisv.svg"
                    />
                  </div>
                </div>
                <Candidatesbox
                  ellipse12="/ellipse-12@2x.png"
                  ename="John Doe"
                  applied="Product Manager "
                />
                <Candidatesbox
                  ellipse12="/ellipse-12@2x.png"
                  ename="John Doe"
                  applied="Product Manager "
                />
                <Candidatesbox
                  ellipse12="/ellipse-12@2x.png"
                  ename="John Doe"
                  applied="Product Manager "
                />
              </div>
              <div className="border  shadow-lg flex-1 rounded-mini bg-white flex flex-col items-center justify-start pt-[42px] pb-[23px] pr-[19px] pl-[21px] box-border gap-[12px] max-w-full sm:w-[10rem]">
                {/* <div className="w-[631px] h-[367px] relative rounded-mini bg-white hidden max-w-full" /> */}
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[21px] box-border max-w-full sm:w-[20rem]">
                  <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
                    <b className="relative z-[1] mq450:text-base">
                      April Payrolls
                    </b>
                    <img
                      className="h-[18px] w-5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/ellipsisv.svg"
                    />
                  </div>
                </div>
                <Salarybox
                  ellipse12="/ellipse-12@2x.png"
                  ename="Ritik"
                  salary="100k"
                  pstate="paid"
                />
                <Salarybox
                  ellipse12="/ellipse-12@2x.png"
                  ename="Draupadi M"
                  salary="550k"
                  pstate="procsssing"
                />
                <Salarybox
                  ellipse12="/ellipse-12@2x.png"
                  ename="john dew"
                  salary="100k"
                  pstate="paid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scale-90 container flex justify-center ">
        <div className=" self-stretch flex flex-col items-start justify-start gap-[40px] max-w-fit	 text-center  text-white sm:gap-0">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0  box-border max-w-full text-left text-xl text-black">
            <div className="flex-1 flex flex-row items-start justify-start gap-[4rem] max-w-full lg:flex-wrap">
              <div className="border  shadow-lg flex-1 rounded-mini bg-white flex flex-col items-center justify-start pt-[42px] pb-[25px] pr-[18px] pl-[22px] box-border gap-[10px] max-w-full mq450:pt-[27px] mq450:pb-5 mq450:box-border">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pr-[13px] pl-5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
                    <b className="w-44 relative inline-block shrink-0 z-[1] mq450:text-base">
                      Applied Jobs
                    </b>
                    <img
                      className="h-[18px] w-5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/ellipsisv.svg"
                    />
                  </div>
                </div>
                <div className=" self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-lg ">
                  <MinutesAgoTextFrame
                    childViewFrame="/rectangle-34@2x.png"
                    salesExecutive="Sales Executive"
                    accessBank="Access Bank"
                    minsAgo="20mins ago"
                  />
                  <MinutesAgoTextFrame
                    childViewFrame="/child-rectangle-frame@2x.png"
                    salesExecutive="User Experience Designer"
                    accessBank="Paystack"
                    minsAgo="10mins ago"
                    propHeight="unset"
                    propWidth="329px"
                    propMinWidth="168px"
                    propWidth1="unset"
                  />

                  <MinutesAgoTextFrame
                    childViewFrame="/rectangle-38@2x.png"
                    salesExecutive="Product Manager"
                    accessBank="T-Pay"
                    minsAgo="5mins ago"
                    propHeight="46px"
                    propWidth="291px"
                    propMinWidth="unset"
                    propWidth1="72px"
                  />
                </div>
              </div>
              <div className="border  shadow-lg flex-1 rounded-mini bg-white flex flex-col items-center justify-start pt-[42px] pb-[23px] pr-[19px] pl-[21px] box-border gap-[12px] max-w-full mq450:pt-[27px] mq450:pb-5 mq450:box-border">
                <div className="w-[631px] h-[367px] relative rounded-mini bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[21px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
                    <b className="relative z-[1] mq450:text-base">Employees</b>
                    <img
                      className="h-[18px] w-5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/ellipsisv.svg"
                    />
                  </div>
                </div>
                <RectangleFrameGroup
                  ellipse12="/ellipse-12@2x.png"
                  johnDoe="John Doe"
                  roleProductManager="Role : Product Manager "
                />
                <RectangleFrameGroup
                  ellipse12="/ellipse-13@2x.png"
                  johnDoe="Ginna Loe"
                  roleProductManager="Role : Sales Executive"
                />
                <RectangleFrameGroup
                  ellipse12="/ellipse-14@2x.png"
                  johnDoe="John Dore"
                  roleProductManager="Role : UI UX Designer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ContainerFrame;
