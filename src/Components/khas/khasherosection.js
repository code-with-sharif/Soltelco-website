import React from 'react';
import Khasplusimg from '../../Images/Khasplusimg.jpg';
import img2 from '../../Images/Kaash plus logo2.jpg';

const khasherosection = () => (
  <main className="mt-32">
    <div className="  w-full  grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      <div className="w-full float-right     ">
        <img
          className="  lg:w-7/12 w-full h-8/12 lg:float-right shadow-2xl  rounded-3xl opacity-100"
          src={Khasplusimg}
          alt="" />
      </div>
      <div className="  w-6/12  mx-auto grid grid-cols-1 ">
        <div className=' mx-auto'>
          <img className="lg:w-[300px]  w-full h-[250px] " src={img2} alt="" />
        </div>
        <div className=' lg:-mt-5 '>
          <h1 className='text-[24px] font font-semibold  text-[#f16722] text-center'>
            Kaash Plus Mobile Money Services
          </h1>
          <p className='text-[16px] text-[#000]  text-center'>
            KAASH Plus is a Mobile money service that allows users to Buy Goods, Buy Airtime, Store, Send, and Receive Money using their mobile phone.
          </p>
        </div>
      </div>
    </div>

  </main>
);

export default khasherosection;
