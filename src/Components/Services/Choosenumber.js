import React, { Fragment } from 'react'
import Searchnmber from './Searchnmber';
import { Luldata } from '../Services/Lullnumberjson';
import Lullnumber from './Lullnumber';
import {Xarriidata} from '../Services/Xariinumberjson';
import {Stunderddata} from '../Services/Standerdnumberjson';
import Standerdnumber from './Standerdnumber';
import Xariinumber from './Xariinumber';
import Footer from '../Header/Footer';
import Footer2 from '../Header/Footer2';
import { useNavigate } from 'react-router-dom';

const Choosenumber = () => {
  const navigate=useNavigate();
  const showmore=()=>{
    navigate("/lulmorenumbr");
    window.scrollTo(0, 0);
  }
  return (
<>

<Searchnmber />
{/* Lull number   */}

<div className='mt-10   sm:w-[1050px] w-auto mx-auto'>
      <div className=" sm:px-0 px-1 ">
            <h1 className="text-deepfuchsia  pl-3 text-[24px] font-semibold ">
            Luul VIP Numbers
            </h1>
            
          </div> 

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  ">
        {Luldata.map((item, index) => (
          <Fragment key={index}>
            <Lullnumber
              title={item.title}
              number={item.number}
              price={item.price}
              buttonName={item.buttonName}
            />
          </Fragment>
        ))}
      </div>
      <div className='mt-10 flex justify-center items-center '>
    <button className='text-whitecolor  bg-Darkviolet hover:bg-deepfuchsia px-10 py-2 rounded-full
     text-[18px] ' onClick={showmore}>show more</button>
</div>  
      </div>
      {/* Xarii number  */}
      <div className='mt-10   sm:w-[1050px] w-auto mx-auto'>
      <div className=" sm:px-0 px-1 ">
            <h1 className="text-deepfuchsia  pl-3 text-[24px] font-semibold ">
            Xariir VIP Numbers
            </h1>
            
          </div> 

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  ">
        {Xarriidata.map((item, index) => (
          <Fragment key={index}>
            <Xariinumber
              title={item.title}
              number={item.number}
              price={item.price}
              buttonName={item.buttonName}
            />
          </Fragment>
        ))}
      </div>
      <div className='mt-10 flex justify-center items-center '>
    <button className='text-whitecolor  bg-Darkviolet hover:bg-deepfuchsia px-10 py-2 rounded-full
     text-[18px] '
     onClick={()=>{ 
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    
    navigate("/lulmorenumbr")}}
     >show more</button>
</div>  
      </div>
      {/* Stunderd data */}
      <div className='mt-10   sm:w-[1050px] w-auto mx-auto'>
      <div className=" sm:px-0 px-1 ">
            <h1 className="text-deepfuchsia  pl-3 text-[24px] font-semibold ">
            Standard Numbers
            </h1>
            
          </div> 

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  ">
        {Stunderddata.map((item, index) => (
          <Fragment key={index}>
            <Standerdnumber
              title={item.title}
              number={item.number}
              price={item.price}
              buttonName={item.buttonName}
            />
          </Fragment>
        ))}
      </div>
      <div className='mt-10 flex justify-center items-center '>
    <button className='text-whitecolor  bg-Darkviolet hover:bg-deepfuchsia px-10 py-2 rounded-full
     text-[18px] '
     onClick={()=>{ 
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    
    navigate("/lulmorenumbr")}}
     >show more</button>
</div>  
      </div>
      <Footer />
      <Footer2 />

</>  )
}

export default Choosenumber;