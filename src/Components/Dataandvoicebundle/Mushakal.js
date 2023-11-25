import React from 'react';
import { TiTickOutline } from 'react-icons/ti';
import Footer from '../Header/Footer';
import Footer2 from '../Header/Footer2';
import {  useNavigate } from 'react-router-dom';

const Mushakal = () => {
  const navigate=useNavigate();
  const mushkldata = [
    {
      "title": "Mushakal",
      "pragraph": "Mushakal Package $3",
      "icon": <TiTickOutline />,
      "packegeday": "6",
      "packegedate": "weekly",
      "fordollor": "Price:$3",
      "buttonName": "Buy Now"
    },
    {
      "title": "Mushakal",
      "pragraph": "Mushakal Package $1",
      "icon": <TiTickOutline />,
      "packegeday": "6",
      "packegedate": "weekly",
      "fordollor": "Price:$1",
      "buttonName": "Buy Now"
    }
    ,
    {
        "title": "Mushakal",
        "pragraph": "Mushakal Package $1",
        "icon": <TiTickOutline />,
        "packegeday": "6",
        "packegedate": "weekly",
        "fordollor": "Price:$1",
        "buttonName": "Buy Now"
      }
    ,
    {
        "title": "Mushakal",
        "pragraph": "Mushakal Package $1",
        "icon": <TiTickOutline />,
        "packegeday": "6",
        "packegedate": "weekly",
        "fordollor": "Price:$1",
        "buttonName": "Buy Now"
      }
    
  ];

  return (
    <>
    <div>  <div className="  text-center sm:px-0 px-1 ">
            <h1 className="text-[#c054d4] text-[18px] font-semibold  font">
            Mushakal Packages
            </h1>
            <p className="lg:text-[20px] text-[16px] text-[#8492a6]">
            There have never been a time to took for the best mobile plans
            </p>
          </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-8 mx-auto   lg:w-[45%] sm:w-full  ">
        {mushkldata.map((item, index) => (
          <div key={index}
            className="min-w-48 max-w-auto bg-[#F6F6F6] rounded-2xl border-b-4 border-b-black
hover:border-b-[#BF00FF]  hover:shadow-2xl hover:bg-white"
          >
            <h1 className="text-center pt-2 text-deepfuchsia font-bold">
              {item.title}
            </h1>
            <p className="text-center  text-[#c054d4] text-[18px]  ">{item.pragraph}</p>

            {/* inner card 1 */}
            <div className="flex flex-row  space-x-3 ml-5 overflow-hidden ">
              <span className="text-deepfuchsia self-center   ">
                {item.icon}
              </span>
              <span className="text-[#8492a6] w-16 ">{item.packegeday}</span>
            </div>

            {/* inner second 2 */}
            <div className="flex items-center space-x-3 ml-5 ">
              <span className=" text-deepfuchsia">
                {item.icon}
              </span>
              <span className="text-[#8492a6]">{item.packegedate}</span>
            </div>

            {/* inner third 3 */}
            <div className="flex items-center space-x-3 ml-5">
              <span className=" text-deepfuchsia ">
                {item.icon}
              </span>
              <span className="text-[#8492a6] ">
                4
              </span>
            </div>

            {/* button div */}
            <div className="grid grid-cols-1 place-items-center flex-wrap my-5">
  <p className="text-deepfuchsia text-[24px] font-semibold text-center">
    {item.fordollor}
  </p>
  <button
    className="text-whitecolor bg-Darkviolet hover:bg-deepfuchsia px-8 py-2 rounded-md 
              text-textfont"
              onClick={()=>{
                window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
          navigate('/bundleservice1')
              }}
  >
    {item.buttonName}
  </button>
</div>

          </div>
        ))}
      </div>
      <div className='mt-10 flex justify-center items-center '>
    <button className='text-whitecolor 
     bg-Darkviolet hover:bg-deepfuchsia px-6 py- rounded-full
     '
     onClick={()=>{
      window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
      navigate('/lulmorenumbr')
     }}
     >Show more</button>
</div> 
 <hr className="w-1/2 my-4 border-b  border-gray-300 mx-auto mt-10" />
      </div>
    
    </>
  );
};

export default Mushakal;
