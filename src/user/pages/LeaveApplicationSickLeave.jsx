import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageInfo from "../components/PageInfo";
import MainContainer from "../components/MainContainer";
// import LeaveTypeFrame from "../components/LeaveTypeFrame";

const LeaveApplicationSickLeave = () => {
  const navigate = useNavigate();

  const onKrisLogo3Click = useCallback(() => {
    navigate("/user-dashboard");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/leave-application-annual-leave-alert");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/leave-management-leave-recall");
  }, [navigate]);

  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[70px] box-border gap-[43px] tracking-[normal] mq450:gap-[43px]">
      <div className="w-[31px] h-[25px] relative bg-gray-300 overflow-hidden shrink-0 hidden" />
      <div className="w-[31px] h-[25px] relative bg-gray-300 overflow-hidden shrink-0 hidden" />
      <MainContainer />
      <main className="w-[1654px] flex flex-row items-start justify-start py-0 pr-[50px] pl-5 box-border max-w-full lg:pr-[25px] lg:box-border">
        <section className="flex-1 flex flex-col items-center justify-start gap-[18px] max-w-full">
          <PageInfo pageName={'Leave Application > Apply for Leave'}/>
          {/* <LeaveTypeFrame
            fillTheRequiredFieldsBelo="Fill the required fields below to apply for sick leave."
            annualLeaveTextPlaceholde="Sick Leave"
            placeholder="20"
            onGroupButtonClick={onGroupButtonClick}
            onGroupButton1Click={onGroupButton1Click}
          /> */}
        </section>
      </main>
    </div>
  );
};

export default LeaveApplicationSickLeave;
