import React from "react";
import { BiWifi } from "react-icons/bi";
import { BsHandIndexThumb } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import {MdOutlineDiamond} from "react-icons/md";
function Videofeaturesection() {
  
  return (
    <div>
      <section className="mt-32 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-0 gap-4 bg-white
         mb-8">
          <div className=" w-full  h-150% lg:order-1 order-2 flex  items-center  justify-center lg:justify-end ">
  <iframe
    style={{ border: "4px solid Darkviolet" }}
    className="rounded-lg  w-96  h-48" 
    src="https://www.youtube.com/embed/MNAoD1_c9ZM"
    allowFullScreen
    title="YouTube Video"
  ></iframe>
</div>

          <div className=" m text-center w-full lg:order-2 order-1  lg:px-16 px-5">

         
            <h1 className="text-headingfont text-deepfuchsia font-bold text-xl mb-4">
              Why Choose Us
            </h1>
            <p className="text-textfont text-[#8492a6] mb-4">
              Soltelco is the first Telecommunications Company in Somaliland and
              revived up now to provide innovative, reliable, and affordable
              telecommunication services.
            </p>
            <p className="text-textfont text-[#8492a6]">
              We are creating experiences that make a difference with digital
              services that make life easy.
            </p>
            <button className="mt-4 self-center text-whitecolor bg-Darkviolet hover:bg-deepfuchsia w-16 rounded-full py-1 text-textfont">
              Join Us
            </button>
          </div></div>
      </section>
      {/* // Card Section */}
      <section>
        <div className="flex justify-center items-center  lg:flex-col-4 flex-wrap gap-2 ">
           {/* <div className="w-48 h-48 rounded-md bg-whitecolor  border
           shadow-lg flex justify-center text-[#8492a6]
           hover:bg-deepfuchsia text-center lg:flex-col   group">
            <div className="  flex items-center justify-center items-center mt-5 ">
              {" "}
              <BiWifi
                className=" text-deepfuchsia group-hover:text-white
                 mx-auto sm:mb-4"
              />
            </div>
            <p className="mt-16 flex justify-center items-center text-center text-textfont group-hover:text-white ">
              Fastest 4G LTE Network in somaliland
            </p>
          </div>  */}
             <div className="w-48 h-48  rounded-md bg-whitecolor  border shadow-lg
            items-center text-[#8492a6] hover:bg-deepfuchsia 
           text-center   group">
            <div className="  flex flex-col items-center justify-center  mt-5  ">
              {" "}
              <BiWifi className=" text-deepfuchsia mx-auto group-hover:text-white   "/>
            </div>
            <p className="mt-16 flex justify-center items-center text-center text-textfont   group-hover:text-white">
            Fastest 4G LTE Network in somaliland
            </p>
          </div>
          {/* card 2 */}
          <div className="w-48 h-48  rounded-md bg-whitecolor  border shadow-lg
            justify-center items-center text-[#8492a6] hover:bg-deepfuchsia
           text-center flex-col  group">
            <div className="  flex items-center justify-center mt-5 ">
              {" "}
              <BsHandIndexThumb className=" text-deepfuchsia mx-auto group-hover:text-white   "/>
            </div>
            <p className="mt-16 flex justify-center items-center text-center text-textfont group-hover:text-white">
            Choose a number of your choice 
            </p>
          </div>
          {/* {/* card 3 */}
          <div className="w-48 h-48 rounded-md bg-whitecolor  border shadow-lg 
           items-center justify-center text-[#8492a6] hover:bg-deepfuchsia text-center flex-col card group">
            <div className="  flex items-center justify-center mt-5 ">
              {" "}
              <FiTruck className=" text-deepfuchsia mx-auto group-hover:text-white " />
            </div>
            <p className="mt-16 flex justify-center items-center text-center text-textfont group-hover:text-white ">
            Get free SIM delivery right to your doorstep            </p>
          </div>
          {/* card 4 */}
          <div className="w-48 h-48 rounded-md bg-whitecolor border shadow-lg  justify-center text-[#8492a6] hover:bg-deepfuchsia text-center flex-col group">
  <div className="flex items-center justify-center mt-5 group-hover:text-white">
<MdOutlineDiamond className="text-deepfuchsia mx-auto group-hover:text-white" />
  </div>
  <p className="mt-16 flex justify-center items-center text-center text-textfont group-hover:text-white">
    We add more value
  </p>
</div>

        
        </div>
      </section> 
    </div>
  );
}

export default Videofeaturesection;
