import React from 'react'
import { useLocation } from "react-router-dom";
import FrameComponent10 from './FrameComponent10';

const ViewDocs = (props) => {
  const location = useLocation();
  const handleDownloadAll = () => {
    
    const files = [location.state.offerletter, ];

  files.forEach(file => {
    const link = document.createElement('a');
        link.href = `/${file}`;
      link.download = file;
        document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
  };

  return (
    <div className="h-[37rem] w-[44rem] flex-1 rounded-mini bg-white flex flex-col items-center  gap-6   px-5    max-w-[44rem]  mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className="mt-5 w-[828px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <b className="h-[30px] flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
          Job Details / View Documents
        </b>
      </div>
      <div className='flex flex-wrap gap-10 justify-evenly items-center'>
        <FrameComponent10 filename={location.state.offerletter}/>
        {/* <FrameComponent10 filename={"NYSC Certificate.pdf"}/>
        <FrameComponent10 filename={"Guarantor’s Form.pdf"}/>
        <FrameComponent10 filename={"Degree Certificate.pdf"}/>
        <FrameComponent10 filename={"John Doe CV.pdf"}/>
        <FrameComponent10 filename={"Birth Certificate.pdf"}/> */}
      </div>
      <button onClick={handleDownloadAll} className="h-10 rounded-md border-none bg-green-800 text-white  font-bold text-lg">Download ALL </button>
    </div>
  )
}

export default ViewDocs