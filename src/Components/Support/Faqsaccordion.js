import React from "react";
import faqsdata from "./Faqs.json";
import {MdKeyboardArrowDown} from 'react-icons/md';
import AccordionCustomIcon from "./Faqsaccordion22";
import Lowerpartaccordion from "./Lowerpartaccordion";
import Footer from "../Header/Footer";
import Footer2 from "../Header/Footer2";
const Faqsaccordion = () => {
  return (
    <>
    <div>
      <main className="  relative  ">
        <div
          className="w-[24rem] lg:block hidden   h-auto border sticky  
         top-32 ml-20 px-8 py-8 shadow-xl  rounded-lg group "
        >
          {faqsdata.map((item, index) => (
            <div key={index} className="   mt-8 ">
              <a href="#general"
                className="text-[#867878] text-[18px] font   
                hover:text-[#BF00FF] cursor-pointer font-bold text pl-6 w-0 z-50"
              >
                {item.heading}
              </a>
            </div>
          ))}
        </div>
        {/* ==== section accordion --====  */}
        <section className="  lg:ml-[8.5rem] ml-0 lg:w-[27rem] w-auto">
          <AccordionCustomIcon />
        </section>
        {/* end section accordion */}
      </main>
<div className="lg:ml-32 ml-0 lg:w-[45rem] w-full">
<Lowerpartaccordion />

</div>
   <Footer />
      <Footer2 />
      </div>

    </>
  );
};

export default Faqsaccordion;
