import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [userType, setuserType] = useState("");
  const handleLogin = () => {
    // Add your login logic here
    // After successful login, navigate based on user type
    if (userType === "Admin") {
      navigate("/admin");
    } else if (userType === "Employee") {
      navigate("/user");
    }
  };
  return (
    <div>
      {/* <button onClick={() => navigate("/admin")}>Admin</button>
        <button onClick={() => navigate("/user")}>User</button> */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <form
          action=""
          className="text-left bg-white flex flex-col  h- gap-3 w-[34rem] rounded-xl py-3 px-3 "
        >
          <h1 className="h-0 flex justify-center items-center">Log in</h1>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              Employee ID
              <input
                placeholder="Ritik-Admin@21"
                type="text"
                name="name"
                className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              Password
              <input
                // placeholder="Ritik@21"
                type="password"
                name="name"
                className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              User Type
              <select
                onChange={(e) => setuserType(e.target.value)}
                className="bg-aliceblue h-10  w-[33rem] rounded-lg text-sm pl-5"
              >
                <option selected disabled>
                  Choose from Dropdown
                </option>
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
          </div>

          <div className="ml-[30%]">
            New Member?<Link to={"/signup"}> Create an account</Link>
          </div>

          <div className="w-[34rem] flex justify-evenly">
            <button
              onClick={handleLogin} // Assuming "Admin" as default for demonstration
              className="bg-forestgreen-100 font-bold text-white text-xl h-14 w-48 rounded-xl"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
