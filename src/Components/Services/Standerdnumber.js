import React from 'react'
import { useNavigate } from 'react-router-dom';

const Standerdnumber = ({title,number,price,buttonName}) => {
  const navigate=useNavigate();
  return (
    <>

    <div className=" mt-8 mx-auto ">
    
                
    <div
      className=" text-center w-[13rem] space-y-3  h-44 bg-[#F6F6F6] rounded-2xl 
    hover:border-b-[#BF00FF]  hover:shadow-2xl hover:bg-white"
    >
      <h1 className=" pt-6 text-[#c054d4] font  ">
        {title}
      </h1>
     
        <h2 className="text-[#c054d4] text-[12px]">
        {number}
        </h2>
     
    
      
        <h3 className="text-[#c054d4] text-[12px]">
          {price}
        </h3>
     
      <div className="">
       
        <button
          className="text-whitecolor 
          bg-Darkviolet hover:bg-deepfuchsia px-8 py-2 rounded-md 
          text-textfont  "
          onClick={()=>{ 
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    
    navigate("/mainform")}}
       >
         {buttonName}
        </button>
      </div>
    </div>
     </div>
        </>
  )
}

export default Standerdnumber;