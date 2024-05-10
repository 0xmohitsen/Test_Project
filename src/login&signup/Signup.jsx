import React, { useState } from "react";
const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      const [errors, setErrors] = useState({});
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    
        // Validation logic
        if (name === "name" && value.length < 3) {
          setErrors({ ...errors, name: "Name must be at least 3 characters long." });
        } else if (name === "password" && value.length < 7) {
          setErrors({ ...errors, password: "Password must be at least 7 characters long." });
        } else if (name === "confirmPassword" && value !== user.password) {
          setErrors({ ...errors, confirmPassword: "Confirm Password does not match Password." });
        } else {
          setErrors({ ...errors, [name]: "" });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
      };
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <form
          action=""
          className="text-left bg-white flex flex-col  h- gap-3 w-[34rem] rounded-xl py-3 px-3 "
        >
          <h1 className="h-0 flex justify-center items-center gap-3">
            Sign up
          </h1>
          
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              Name
              <input
              required
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="bg-aliceblue h-10 w-[33rem] rounded-lg text-sm pl-5"
            />
            {errors.name && <p className="h-0 text-red-200 text-smi flex items-center">{errors.name}</p>} {/* Display name error if any */}
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              Email
              <input
              required
              type="email"
              name="email" 
              value={user.email}
              onChange={handleInputChange}
              className="bg-aliceblue h-10 w-[33rem] rounded-lg text-sm pl-5"
            />
            {errors.email && <p className="h-0 text-red-200 text-smi flex items-center">{errors.email}</p>} 
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              Password
              <input
              required
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="bg-aliceblue h-10 w-[33rem] rounded-lg text-sm pl-5"
            />
            {errors.password && <p className="h-0 text-red-200 text-smi flex items-center">{errors.password}</p>} 
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              Confirm Password
              <input
              required
              type="password"
              name="confirmPassword" 
              value={user.confirmPassword}
              onChange={handleInputChange}
              className="bg-aliceblue h-10 w-[33rem] rounded-lg text-sm pl-5"
            />
            {errors.confirmPassword && <p className="h-0 text-red-200 text-smi flex items-center">{errors.confirmPassword}</p>} 
            </div>
          </div>

          <div className="w-[34rem] flex justify-evenly">
            <button className="bg-forestgreen-100 font-bold text-white text-xl h-14 w-48 rounded-xl">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
