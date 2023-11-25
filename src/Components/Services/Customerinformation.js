import React from "react";
import { GrUserManager } from "react-icons/gr";
import Footer from "../Header/Footer";
import Footer2 from "../Header/Footer2";
import { useNavigate } from "react-router-dom";

const Customerinformation = () => {
    
const navigate=useNavigate();
   
  return (
    <>
      <main>
        <div
          className=" mt-[6.5rem] lg:w-[50rem] w-auto lg:ml-16 ml-0   lg:h-full h-auto 
    shadow-lg rounded-md border-2"
        >
          <h1
            className="text-[30px] font  mt-8   text-center lg:w-48 w-auto rounded-e-lg
     text-white bg-[#BF00FF] font-semibold"
          >
           Cutomer Information
          </h1>
          <div className="container mx-auto mt-10  lg:w-8/12 w-full">
            <form className="grid md:px-0 px-4  ">
              <div className="md:col-span-2 col-span-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className=" pl-3  input rounded-md w-full"
                  placeholder="enter first name"
                  required
                />
              </div>
              <div className="md:col-span-2 col-span-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className=" pl-3 input rounded-md w-full"
                  placeholder="enter last name"
                  required
                />
              </div>

              <div className="md:col-span-2 col-span-4">
                <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                  Father name
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  className=" pl-3 input rounded-md w-full"
                  placeholder="enter father name"
                  required
                />
              </div>

              <div className="md:col-span-2 col-span-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className=" pl-3 input border rounded-md w-full"
                  required
                />
              </div>

              <div className="md:col-span-2 col-span-4">
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  className=" pl-3 input border rounded-md w-full"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              <div className="md:col-span-2 col-span-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className=" pl-3 input border rounded-md w-full"
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="md:col-span-2 col-span-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className=" pl-3 input  border rounded-md w-full"
                  placeholder="Enter your country"
                  required
                />
              </div>

              <div className="md:col-span-2 col-span-4">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className=" pl-3 input border rounded-md w-full"
                  placeholder="Enter your state"
                  required
                />
              </div>

              <div className="md:col-span-2 col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" pl-3 input border rounded-md w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>


              <div className="">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2 input"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 ">
                <span className="text-[#000] text-[20px]">  I accept</span> <span className="text-[#BF00FF] "> Terms And Conditions</span>
                </label>
              </div>

            </form>
          </div>

          <div class="flex  p-2 mt-4">
            <div class="flex-auto  justify-between flex flex-row-reverse">
              <button
                type="submit"
                className="text-[20px] font   rounded-xl text-center text-white bg-[#BF00FF] py-1 lg:px-12 px-6 "
              >
                {" "}
                Next
              </button>
              <button
  type="submit"
  className="text-[20px] font rounded-xl text-center border border-[#BF00FF] hover:text-white text-[#BF00FF] opacity-100 bg-white hover:bg-[#BF00FF] py-1 lg:px-12 px-6"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    navigate(-1);
  }}
>
  Back
</button>

            </div>
          </div>

        </div>
        <Footer />
      <Footer2 />
      </main>
    </>
  );
};

export default Customerinformation;
