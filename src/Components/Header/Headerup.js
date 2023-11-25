import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import i118 from '../../Locals/i18n'
import i18next from "i18next";

function Headerup(props) {
  const [changlanguage, setChangelanguage] = useState("English");
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleChangeLanguage = (language) => {
    setChangelanguage(language);
    setHover(false); 
    // Close the dropdown after selection
    i18next.changeLanguage(language);
  };

  return (
    <>
      <main className="bg-deepfuchsia fixed right-0 left-0 top-0  z-50  ">
        <section
          className=" flex  sm:justify-end items-center lg:items-start 
        justify-center pr-16 extrasmalldevice"
        >
          <div className=" ">
            <BsGlobe className="text-whitecolor  mr-1 lg:h-3 lg:mt-[10px] mt-1 " />
          </div>

          {/* language  */}

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative" // Use relative positioning for the parent div
          >
            <span
              className="text-whitecolor text-[18px] "
              style={{ cursor: "pointer" }}
            >
              {changlanguage}
            </span>
            {hover && (
              <ul
                className="absolute bg-deepfuchsia text-whitecolor 
              left-0 top-[100%] w-[70px]  text-center "
                style={{}} // Position the dropdown
              >
                <li
                  className="h-5 opacity-100 bg-whitecolor text-deepfuchsia hover:bg-Darkviolet
                 hover:text-whitecolor text-[18px] cursor-pointer"
                  onClick={() => handleChangeLanguage("English")}
                >
                  English
                </li>
                <li
                  className="h-5  bg-whitecolor text-deepfuchsia
                 hover:bg-Darkviolet hover:text-whitecolor text-[18px] opacity-100 font cursor-pointer"
                  onClick={() => handleChangeLanguage("Somali")}
                >
                  Somali
                </li>
              </ul>
            )}
          </div>
          {/* arrow icon  */}
          <div>
            <RiArrowDropDownLine
              className="text-whitecolor h-8 w-4 -mt-1 "
              style={{ transform: hover ? "rotate(180deg)" : "rotate(0)" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Headerup;
