import React, { useState, useMemo} from "react";
import AdminHeadingc from "./components/AdminHeadingc";

const AdminCompli = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileCategory, setFileCategory] = useState("");
  const [policies, setPolicies] = useState([]);
  const [compliance, setCompliance] = useState([]);
  const [show, setShow] = useState(false);
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setFileCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileCategory === "Policies") {
      setPolicies([...policies, selectedFile]);
    } else if (fileCategory === "Compliance") {
      setCompliance([...compliance, selectedFile]);
    }
  };
  return (
    <section className="overflow-hidden w-full flex flex-col items-center justify-center text-left  font-product-sans mq450:gap-[219px] mq900:gap-[219px] mq1275:gap-[219px]">
      <div className="flex flex-col items-start justify-center gap-8 max-w-full mq900:gap-[33px]">
        <AdminHeadingc name="Compliance" img="/complihead.png"/>
        <div className=" border shadow-lg h-[32rem]  flex-col py-4  bg-white w-[79rem]  rounded-xl pb-4 flex items-center justify-center overflow-hidden no-scrollbar">
          <div className="flex pt-3">
            {show && (
              <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="ml-[59.9rem] block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:file:bg-blue-500 dark:hover:file:bg-blue-400 "
                  />
                </label>
                <div className="flex w-full justify-evenly">
                  <div className="">
                    <p className="ml-3 h-0"> Name</p>
                    <input
                      className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <p className="ml-3 h-0"> Link</p>
                    <input
                      className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-evenly">
                  <div className="">
                    <p className="ml-3 h-0"> Pages</p>
                    <input
                      className="mt-6 bg-aliceblue w-[18rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <p className="ml-3 h-0"> Category</p>
                    <select
                      onChange={handleCategoryChange}
                      className="mt-6 bg-aliceblue w-[20.5rem] h-10 flex items-center px-5 rounded-xl text-gray-600"
                    >
                      <option disabled selected value="">
                        Select from bellow dropdown
                      </option>
                      <option value="Policies">Policies</option>
                      <option value="Compliance">Compliance</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={(event) => {
                    
                    event.currentTarget.form.submit();
                  }}
                  className="bg-[#e6fffa] mt-5 text-[#13deb9] font-bold  rounded-lg w-[13%] h-10  shadow hover:shadow-green-500 hover:scale-105 transition ease-in-out duration-500 "
                >
                  Submit
                </button>
              </form>
            )}
          </div>
          <div className="mt-4 items-center justify-evenly py-4 gap-10   w-full  flex">
            <select
              id="policies"
              className="appearance-none pl-7 cursor-pointer bg-[#fdede8] text-[#fa8a6d] h-[8rem] w-[10rem] flex rounded-xl shadow-xl font-bold text-xl hover:shadow scale-110 hover:shadow-orange-600 hover:scale-100 transition ease-in-out duration-700 select-none focus:outline-none"
            >
              <option value="" disabled selected>
                Policies ({policies.length})
              </option>
              {policies.map((file, index) => (
                <option key={index} value={file.name}>
                  {file.name}
                </option>
              ))}
            </select>
            <select
              id="compli"
              className="pl-2 appearance-none cursor-pointer bg-[#ecf2ff] text-[#5d87ff] h-[8rem] w-[10rem] flex rounded-xl shadow-xl hover:shadow scale-110 hover:shadow-blue-600 hover:scale-100 transition ease-in-out duration-700 font-bold text-xl focus:outline-none"
            >
              <option value="" disabled selected>
                Compliance ({compliance.length})
              </option>
              {compliance.map((file, index) => (
                <option key={index} value={file.name}>
                  {file.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setShow(!show)}
            type=""
            className="bg-[#e6fffa] text-[#13deb9] font-bold  rounded-lg w-[13%] h-10  shadow hover:shadow-green-500 hover:scale-105 transition ease-in-out duration-500 "
          >
            ADD
          </button>
        </div>
      </div>
    </section>
  );
};
export default AdminCompli;
