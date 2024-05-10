import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ViewGuarantorDetails = () => {
  const navigate = useNavigate();
  const Updategur = () => {
    navigate("/guarantor-Details", {
      replace: true,
      state: {
        name: formState.name,
        job: formState.job,
        phone: formState.phone,
        
      },
    });
  };
  const [formState, setFormState] = useState({
    name: "",
    job: "",
    phone: "",
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="h-[37rem] w-[44rem] flex-1 rounded-mini bg-white flex flex-col items-center  gap-6   px-5 pt-4   max-w-[44rem]  mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className="w-[828px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <b className="h-[30px] flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
          View Guarantor Details
        </b>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
        <div className="w-[220px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="pb-3">Guarantor’s Name</div>
        </div>
        <input
          required
          name="name"
          onChange={handleInputChange}
          className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-end justify-start pt-6 px-[46px] pb-[17px] box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
          placeholder="Babcock University"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
        <div className="w-[220px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="pb-3">Job title / Occupation</div>
        </div>
        <input
          required
          name="job"
          onChange={handleInputChange}
          className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-end justify-start pt-6 px-[46px] pb-[17px] box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
          placeholder="UX-UI"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
        <div className="w-[220px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="pb-3">Phone No</div>
        </div>
        <input
          required
          name="phone"
          onChange={handleInputChange}
          className="w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-end justify-start pt-6 px-[46px] pb-[17px] box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
          placeholder="1110001100001111"
          type="number"
        />
      </div>

      <input
        className="text-white bg-green-700 rounded-md h-12  w-24 text-xl hover:scale-105 transition ease-in-out"
        value={"Update"}
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

export default ViewGuarantorDetails;
