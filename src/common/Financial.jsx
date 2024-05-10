import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Financial = () => {
  const navigate = useNavigate();
  const Updategur = () => {
    navigate("/financial-details", {
      replace: true,
      state: {
        name: formState.name,
        accountno: formState.accountno,
        accountName: formState.accountName,
        pensionno: formState.pensionno,
        accounttype: formState.accounttype,
      },
    });
  };
  const [formState, setFormState] = useState({
    name: "",
    accountno: "",
    accountName: "",
    pensionno: "",
    accounttype: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="h-[37rem] w-[44rem] flex-1 rounded-mini bg-white flex flex-col items-center justify-center gap-6   px-5    max-w-[44rem]  mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className="w-[828px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <b className="h-[30px] flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
          Financial Details
        </b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
        <div className="w-[220px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="pb-3">Bank Name</div>
        </div>
        <input
          required
          name="name"
          onChange={handleInputChange}
          className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-end justify-start pt-6 px-[46px] pb-[17px] box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
          placeholder="Access Bank"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq1100:flex-wrap mq1100:gap-[60px]">
        <div className="flex-1 flex flex-row items-start justify-between pb-3 min-w-[280px] max-w-full">
          <div>
            <div className=" h-[30px] relative inline-block shrink-0 z-[1]">
              Account No
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                required
                name="accountno"
                onChange={handleInputChange}
                className=" [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none px-9 [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-center justify-center  box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
                placeholder="00154184005"
                type="number"
              />
            </div>
          </div>
          <div>
            <div className=" h-[30px] relative inline-block shrink-0 z-[1]">
              Account Name
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                required
                name="accountName"
                onChange={handleInputChange}
                className=" [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0  [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-center justify-center px-9 box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
                placeholder="john doe smith"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq1100:flex-wrap mq1100:gap-[60px]">
        <div className="flex-1 flex flex-row items-start justify-between pb-3 min-w-[280px] max-w-full">
          <div>
            <div className="w-[194px] h-[30px] relative inline-block shrink-0 z-[1]">
              Registered with
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                required
                name="registeredwith"
                onChange={handleInputChange}
                className=" [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0  [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-center justify-center px-9 box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
                placeholder="Stanbic IBTC"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-[194px] h-[30px] relative inline-block shrink-0 z-[1]">
              Pension Number
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
                required
                name="pensionno"
                onChange={handleInputChange}
                className=" [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0 [border:none]  [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-center justify-center px-9 box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
                placeholder="1011000100101100111"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[194px] h-[30px] relative inline-block shrink-0 z-[1]">
          Account Type
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
          <select
            onChange={handleInputChange}
            id=""
            name="accounttype"
            className="w-96 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0 [border:none]  [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-center justify-center px-9 box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
          >
            <option disabled>Select from bellow dropdown</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
          </select>
        </div>
      </div>
      <input
        className="text-white bg-green-700 rounded-md h-12  text-xl hover:scale-105 transition ease-in-out"
        value={"Update Account Details"}
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

export default Financial;
