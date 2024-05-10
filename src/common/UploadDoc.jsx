import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UploadDoc = () => {
  const navigate = useNavigate();
  const Updategur = () => {
    navigate("/view-doc", {
      replace: true,
      state: {
        offerletter: formState.offerletter,
        NYSC: formState.NYSC,
        Degree: formState.Degree,
        Guarantor: formState.Guarantor,
        BirthCertificate: formState.BirthCertificate,
      },
    });
  };
  const [formState, setFormState] = useState({
    offerletter: "",
    NYSC: "",
    Degree: "",
    Guarantor: "",
    BirthCertificate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className="h-[37rem] p-3 w-[44rem] flex-1 rounded-mini bg-white flex flex-col items-center  gap-6   px-5    max-w-[44rem]  mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className="w-[828px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <b className="h-[30px] flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
          Job Details / Upload Documents
        </b>
      </div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <b className="h-[30px] max-w-full  mq450:text-base">
            Upload Offer Letter
          </b>
          <label for="file-input" className="sr-only h-[5rem]">
            Choose file
          </label>
          <input
            name="offerletter"
            onChange={handleInputChange}
            required
            type="file"
            
            id="file-input"
            className="block  w-[40rem]  border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-yellow-500 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400 bg-aliceblue"
          />
        </div>
        <div className="flex flex-col ">
          <b className="h-[30px] max-w-full  mq450:text-base">
            Upload NYSC Certificate
          </b>
          <label for="file-input" className="sr-only h-[5rem]">
            Choose file
          </label>
          <input
            name="NYSC"
            onChange={handleInputChange}
            required
            type="file"
            id="file-input"
            className="block  w-[40rem]  border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-yellow-500 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400 bg-aliceblue"
          />
        </div>
        <div className="flex flex-col ">
          <b className="h-[30px] max-w-full  mq450:text-base">
            Upload Degree Certificate
          </b>
          <label for="file-input" className="sr-only h-[5rem]">
            Choose file
          </label>
          <input
            name="Degree"
            onChange={handleInputChange}
            required
            type="file"
            id="file-input"
            className="block  w-[40rem]  border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-yellow-500 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400 bg-aliceblue"
          />
        </div>
        <div className="flex flex-col ">
          <b className="h-[30px] max-w-full  mq450:text-base">
            Upload Guarantor’s Form
          </b>
          <label for="file-input" className="sr-only h-[5rem]">
            Choose file
          </label>
          <input
            name="Guarantor"
            onChange={handleInputChange}
            required
            type="file"
            id="file-input"
            className="block  w-[40rem]  border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-yellow-500 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400 bg-aliceblue"
          />
        </div>
        <div className="flex flex-col ">
          <b className="h-[30px] max-w-full  mq450:text-base">
            Upload Birth Certificate
          </b>
          <label for="file-input" className="sr-only h-[5rem]">
            Choose file
          </label>
          <input
            name="BirthCertificate"
            onChange={handleInputChange}
            required
            type="file"
            id="file-input"
            className="block  w-[40rem]  border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-yellow-500 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400 bg-aliceblue"
          />
        </div>
      </form>
      
      <input
        className="text-white bg-blue-900 rounded-md h-12  text-xl hover:scale-105 transition ease-in-out"
        value={"Upload Documents"}
        type="submit"
        onClick={() => {
          if (document.querySelector("form").checkValidity()) {
            Updategur();
          }
        }}
      />
    </form>
  );
};

export default UploadDoc;
