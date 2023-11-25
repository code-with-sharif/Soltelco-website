import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({
  title,
  icon,
  packegeday,
  packegedate,
  fordollor,
  buttonName,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="  mt-8  ">
        <div
          className=" md:w-9/12 w-full h-72 mx-auto bg-[#F6F6F6] rounded-2xl border-b-4 border-b-black
         hover:border-b-[#BF00FF]  hover:shadow-2xl hover:bg-white"
        >
          <h1 className="text-center pt-6 text-deepfuchsia font-bold  ">
            {title}
          </h1>
          {/* inner card 1 */}
          <div className="flex flex-row  space-x-3 ml-5 overflow-hidden py-4">
            <span className="text-deepfuchsia self-center   ">{icon}</span>
            <span className="text-[#8492a6] w-16 ">{packegeday}</span>
          </div>

          {/*inner second 2 */}
          <div className="flex items-center space-x-3 ml-5 pb-4">
            <span className=" text-deepfuchsia">{icon}</span>
            <span className="text-[#8492a6]">{packegedate}</span>
          </div>
          {/*inner third 3 */}
          <div className="flex items-center space-x-3 ml-5">
            <span className=" text-deepfuchsia ">{icon}</span>
            <span className="text-[#8492a6] ">4</span>
          </div>
          {/* button div */}
          <div className="  mt-8 relative">
            <p className="text-deepfuchsia text-[24px] ml-7  font-semibold  ">
              {fordollor}
            </p>
            <button
              className="text-whitecolor 
                    bg-Darkviolet hover:bg-deepfuchsia w-5/12 py-2 rounded-md 
                    text-textfont absolute left-16  mx-auto mt-2"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Add smooth scrolling behavior
                });
                navigate("/bundleservice1");
              }}
            >
              {buttonName}
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
