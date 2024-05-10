import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditFamilyDetails = () => {
  const navigate = useNavigate();
  const Updategur = () => {
    navigate("/family-details",{
      replace: true,
      state: {
        name: formState.name,
        relation: formState.relation,
        phone: formState.phone,
        address: formState.address,
        
      },
    })
  }
  const [formState, setFormState] = useState({
    name: "",
    relation: "",
    phone: "",
    address:"",
    
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="h-[37rem] w-[44rem] flex-1 rounded-mini bg-white flex flex-col items-center  gap-6   px-5    max-w-[44rem]  mq450:gap-[61px] mq450:pl-5 mq450:pt-6 mq450:pb-[50px] mq450:box-border mq750:gap-[61px] mq750:pl-[67px] mq750:box-border mq750:min-w-full mq1100:pt-[37px] mq1100:pb-[77px] mq1100:box-border">
      <div className="w-[828px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <b className="h-[30px] mt-3 flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
          View Family Details
        </b>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
        <div className="w-[220px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="pb-3">Full Name</div>
        </div>
        <input
        required
        name="name"
        onChange={handleInputChange}
          className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-end justify-start pt-6 px-[46px] pb-[17px] box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
          placeholder="Mr Johnny Francis"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq1100:flex-wrap mq1100:gap-[60px]">
        <div className="flex-1 flex flex-row items-start justify-between pb-3 min-w-[280px] max-w-full">
          <div>
            <div className="w-[194px] h-[30px] relative inline-block shrink-0 z-[1]">
              Relationship
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
              required
              name="relation"
              onChange={handleInputChange}
                className=" [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0 [border:none]  [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-center justify-center px-9 box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
                placeholder="Brother"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-[194px] h-[30px] relative inline-block shrink-0 z-[1]">
              Phone No
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] mq450:gap-[44px]">
              <input
              required
              name="phone"
              onChange={handleInputChange}
                className=" [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0 [border:none]  [outline:none] bg-aliceblue self-stretch h-12 rounded-mini flex flex-row items-center justify-center px-9 box-border font-product-sans text-lg text-gray-600 min-w-[250px] z-[1]"
                placeholder="108711155519"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-2.5">
          <div className="h-[30px] relative inline-block z-[1]">
            Residential Address
          </div>
        </div>
        <textarea
         required
         name="address"
         onChange={handleInputChange}
          className="[border:none] bg-aliceblue h-[122px] max-w-[100%] min-w-[100%] [outline:none] flex-1 rounded-mini flex flex-row items-start justify-start py-6 px-[37px] box-border font-product-sans text-lg text-gray-600  z-[1]"
          placeholder="18 Junction site Lekki"
          rows={3}
          cols={45}
        />
      </div>

      <input className="text-white bg-green-700 rounded-md h-12  w-24 text-xl hover:scale-105 transition ease-in-out" 
      onClick={() => {
          if (document.querySelector("form").checkValidity()) {
            Updategur();
          }
        }}
        value={"Update"}
        type="submit"
      
      />
    </form>
  );
};

export default EditFamilyDetails;
