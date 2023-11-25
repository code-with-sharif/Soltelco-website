import React, { useState } from "react";
import contactimg from "../../Images/contactimg.jpg";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiBookmarkHeart } from "react-icons/bi";
import { BiMessageDots } from "react-icons/bi";
import formige from '../../Images/contactFormimg.png';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted( "Form submitted successfully");
    setTimeout(() => {
      setIsSubmitted("")
    }, 2000);
    // You can add your form submission logic here.
  };

  return (
    <main  className="mt-[6.5rem] ">
      {/* img section */}
      <div className="hidden md:block relative">
        <div className="flex flex-col items-center justify-center ">
          <img
            className="rounded-xl w-full h-[20rem]"
            src={contactimg}
            alt="Contact"
          />

        <div style={{}}
        className="absolute -bottom-5  px-6 py-2 bg-white shadow-lg rounded-md space-x-4 flex justify-evenly items-center">
          <h1 className="text-center text-[18px] text-[#C85FD4]">SOLTELCO</h1>
          <HiArrowRight className="text-[18px]" />
          <h2 className="text-center text-[18px]">CONTACT US</h2>
        </div>
        </div>

      </div>

      {/* icon section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto lg:w-[70%]  w-full pt-10 ">
      <div className=" w-full h-4/12 text-center md:p-0  p-3 grid  place-items-center">
      <div className="text-[#bf00ff] text-xl">
        <MdOutlineEmail />
      </div>

      <h1 className="text-[16px] text-[#c054d4] font pb-[5px]">Email</h1>
      <p className="text-[#c054d4] text-[18px] font break-all">
        info@soltelconetwork.com
      </p>
    </div>
         {/* 2nd icon */}
       
      
    <div className=" w-full h-4/12 text-center md:p-0  p-3 grid  place-items-center">
      <div className="text-[#bf00ff] text-xl">
      <BiMessageRoundedDots />
      </div>

      <h1 className="text-[16px] text-[#c054d4] font pb-[5px]">Support Email</h1>
      <p className="text-[#c054d4] text-[18px] font break-all">
      support@soltelconetwork.com
      </p>
    </div>
         {/* 3rd icon  */}
       
        <div className=" w-full h-4/12 text-center  md:p-0 p-3 grid  place-items-center">
      <div className="text-[#bf00ff] text-xl">
      <BiPhoneCall />
      </div>

      <h1 className="text-[16px] text-[#c054d4] font pb-[5px]"> Call Center</h1>
      <p className="text-[#c054d4] text-[18px] font break-all">
      161
      </p>
    </div>
         {/* 4th icon  */}
       
        <div className=" w-full h-4/12 text-center  md:p-0 p-3 grid  place-items-center">
      <div className="text-[#bf00ff] text-xl">
      <MdOutlineWhatsapp />
      </div>

      <h1 className="text-[16px] text-[#c054d4] font pb-[5px]"> WhatsApp</h1>
      <p className="text-[#c054d4] text-[18px] font break-all">
      +252 67 00000000
      </p>
    </div>
      </div>
      {/* form section */}
       <section className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2    mt-10">
        <div className="lg:w-8/12 w-full h-8/12 overflow-y-hidden mx-auto border-2 bg-white">
          <form className="md:px-8  px-4  lg:my-12" onSubmit={handleSubmit}>
            <h1 className="font text-[24px] font-bold text-[#c054d4] lg:mb-6">Get In Touch!</h1>
            <div className="grid grid-cols-4">
              <section1 className="sm:col-span-2 col-span-5  ">
                <label
                  htmlFor="name-address-icon"
                  className="font font-semibold text-[14px] text-[#000]"
                >
                  Your Name
                </label>
                <div className="relative ">
                  <div className="absolute inset-y-0 flex items-center pl-3.5  pointer-events-none ">
                    <MdOutlineManageAccounts className="w-[16px] h-[16px]" />
                  </div>
                  <input
                    type="text"
                    id="name-address-icon"
                    className="form-control text-sm rounded-lg block w-[100%] pl-10 p-1  input"
                    placeholder="First Name"
                    required
                  />
                </div>
              </section1>
              <section2 className="sm:col-span-2 col-span-4 sm:pl-4 pl-0">
                <label
                  htmlFor="email-address-icon"
                  className="font font-semibold text-[14px] text-[#000]"
                >
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center pl-3.5 pointer-events-none">
                    <MdOutlineMail className="w-[16px] h-[16px]" />
                  </div>
                  <input
                    type="email"
                    id="email-address-icon"
                    className="form-control text-sm rounded-lg block w-[100%] pl-10 p-1 input"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </section2>
              <section3 className="col-span-4">
                <label
                  htmlFor="subject-address-icon"
                  className="font font-semibold text-[14px] text-[#000]"
                >
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center pl-3.5 pointer-events-none">
                    <BiBookmarkHeart className="w-[16px] h-[16px]" />
                  </div>
                  <input
                    type="text"
                    id="text-address-icon"
                    className="form-control text-sm rounded-lg block w-full pl-10 p-1 input"
                    placeholder="Subject"
                    required
                  />
                </div>
              </section3>
              <section4 className="col-span-4">
                <label
                  htmlFor="message"
                  className="font font-semibold text-[14px] text-[#000]"
                >
                  Comments
                </label>
                <div className="relative flex items-baseline">
                  <div className="absolute inset-y-0 top-3 pl-3.5 pointer-events-none">
                    <BiMessageDots className="w-[16px] h-[16px]" />
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-control text-sm rounded-lg flex-1 pl-10 p-3 input"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 py-2 w-full   bg-[#BF00FF] text-white rounded-md text-[16px]"
                >
                  Submit
                </button>
              </section4>
         
      {isSubmitted}
            </div>
          </form>
        </div>
        <div>
          <img className="w-[570px] h-[370px]  sm:mt-28 mt-6  " src={formige} alt="" />
        </div>
      </section> 
      
    </main>
  );
};

export default Contact;
