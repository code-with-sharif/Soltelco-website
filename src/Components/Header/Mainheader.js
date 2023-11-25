import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../Images/logo.png";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Mainheader() {
const {t}=useTranslation("translation")
  const [toggle, setToggle] = useState(false);
  const [hovershow, setHovershow] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
const [showdata , setShowdata] =useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handlemouseEnter = () => {
    setHovershow(true);
  };
  const handlemouseleave = () => {
    setHovershow(false);
  };

  const handleSupportHover = () => {
    setShowSupport(true);
  };

  const handleDropdownLeave = () => {
    setShowSupport(false);
  };
const handleDropdown=()=>{
  setShowdata(true);
}
  return (
    <>
      <main>
        <section className="bg-white fixed top-6 left-0 z-40 w-full">
          <div
            className="flex sm:justify-around space-x-44 md:space-x-96 
          lg:space-x-0 lg:justify-normal lg:ml-8"
          >
            <div>
              <img
                className="lg:w-28 lg:h-20 lg:-ml-5 h-11 w-32  opacity-100 text-[30px] font-bold ml-2 pr-0"
                src={img}
                alt=""
              />
            </div>
            {toggle ? (
              <RxCross1
                className="lg:hidden mt-2 w-10  text-headingfont"
                onClick={handleToggle}
              />
            ) : (
              <RiBarChartHorizontalFill
                className="lg:hidden mt-2 w-10  text-headingfont"
                onClick={handleToggle}
              />
            )}

            <nav className=" gap-3 text-deepfuchsia hidden lg:flex items-center text-subheadingfont">
              <NavLink
                exact
                to="/home"
                className="hover:underline underline-offset-8 decoration-[#C054D4]"
              >
              {t("home")}
              </NavLink>
              <div
                onMouseEnter={handlemouseEnter}
                onMouseLeave={handlemouseleave}
                className="relative group"
              >
                <div className="flex items-center">
                  <span
                    className="hover:underline relative underline-offset-8
                   cursor-pointer"
                  >
                   {t("services")}
                  </span>
                </div>
                {hovershow && (
                  <div
                    className=" w-40 h-20 flex flex-col bg-whitecolor 
                  text-deepfuchsia shadow-lg top-5 rounded-md absolute -left-1 z-10 top-[100%]"
                  >
                    <NavLink
                      to="/databundle"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                    >
                      Data and voice Bundles
                    </NavLink>
                    <NavLink
                      to="/choosenumber"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                    >
                      Choose Your Number
                    </NavLink>
                    <NavLink
                      to="/kurtugul"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                    >
                      Mifi
                    </NavLink>
                    <NavLink
                      to="/esimprovisioning"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                    >
                      E-Sim Provisioning
                    </NavLink>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={handleSupportHover}
                onMouseLeave={handleDropdownLeave}
                className="relative group"
              >
                <span
                  className="hover:underline relative underline-offset-8
                   cursor-pointer"
                >
                  Support
                </span>
                {showSupport && (
                  <div className=" absolute -left-1 top-[100%] z-10 w-40 h-20 flex flex-col bg-whitecolor text-deepfuchsia shadow-lg  border rounded-md">
                    <NavLink
                      to="/contact"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to="/find"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                    >
                      Find Us
                    </NavLink>
                    <NavLink
                      to="fAQs"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                    >
                      FAQs
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/blogs"
                className="hover:underline underline-offset-8"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/about"
                className="hover:underline underline-offset-8"
              >
                About Us
              </NavLink>
              <NavLink
                to="/Kaashplus"
                className="hover:underline underline-offset-8"
              >
                Kaashplus
              </NavLink>

              <NavLink
                to="#"
                target="_blank"
                className="hover:underline underline-offset-8"
              >
                MySoltelco
              </NavLink>
            </nav>
          </div>

          {/* responsive */}
          <nav
            className={`lg:hidden grid grid-cols-1 pb-5  border-2 border-red-600 justify-around text-[#C054D4] bg-[#FFFFFF] opacit-100 w-full  shadow-lg fixed ${
              toggle ? "pl-3" : "top-[-100%]"
            }`}
          >
            <NavLink exact to="/home" className=" decoration-[#C054D4]" onClick={handleToggle}>
              Home
            </NavLink>
              
  <div className="relative group"
              onMouseEnter={handlemouseEnter}
                onMouseLeave={handlemouseleave}
            >
              <div className="flex items-center">
                <span className="">Services</span>
                <IoMdArrowDropdown className="ml-0" />
              </div>
              {hovershow &&(
                <div className="dropdown bg-white opacity-100 text-Darkviolet border-2 border-red-600 flex sm:flex-col flex-col">
                  <NavLink to="/databundle" className="ml-2" onClick={handleToggle}>
                    Data and voice Bundles
                  </NavLink>
                  <NavLink to="/choosenumber" className=" ml-2 " onClick={handleToggle}>
                    Choose Your Number
                  </NavLink>
                  <NavLink to="/kurtugul" className="ml-2" onClick={handleToggle}>
                    Mifi
                  </NavLink>
                  <NavLink to="/esimprovisioning" className="ml-2" onClick={handleToggle}>
                    E-Sim Provisioning
                  </NavLink>
                </div>
              )}
            </div>

            <div className="relative group"
             onMouseEnter={handleSupportHover}
                onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center">
                <span className="">Support</span>
                <IoMdArrowDropdown className="ml-0" />
              </div>
              {showSupport && (
                <div className=" dropdown bg-white opacity-100 text-Darkviolet border-2 border-red-600 flex sm:flex-col flex-col">
                    <NavLink
                      to="/contact"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                      onClick={handleToggle}
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to="/find"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                      onClick={handleToggle}
                    >
                      Find Us
                    </NavLink>
                    <NavLink
                      to="fAQs"
                      className="hover:text-Darkviolet ml-2 top-[100%]"
                      onClick={handleToggle}
                    >
                      FAQs
                    </NavLink>
                  </div>
              )}
            </div>
            <NavLink to="/blogs" className="" onClick={handleToggle}>
              Blogs
            </NavLink>
            <NavLink to="/about" className="" onClick={handleToggle}>
              About Us
            </NavLink>
            <NavLink to="/Kaashplus" className="" onClick={handleToggle}>
              Kaashplus
            </NavLink>
            <NavLink to="#" className="" onClick={handleToggle}>
              MySoltelco
            </NavLink>
          </nav>
        </section>
      </main>
    </>
  );
}

export default Mainheader;
