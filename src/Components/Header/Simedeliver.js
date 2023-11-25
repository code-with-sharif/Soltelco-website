import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GiClockwork } from 'react-icons/gi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';

function Simedeliver() {
  return (
    <>
      <main className='border w-full lg:h-[25rem] h-auto sm:px-0 px-6 bg-[#F6F6F6] mt-14 '>
      <section >
        <div className=' px-6  text-center py-8'>
        <h1 className='text-deepfuchsia text-[24px] font font-semibold pb-3'>Get a new SIM delivered in</h1>
        <h2 className='text-deepfuchsia text-lg pb-3 font'>3 simple steps</h2>
        <p className='text-[20px] text-[#8492a6] pb-3 font'>Order a new prepaid SIM card online and get the 4G SIM
            delivered at your doorstep.</p>
             </div>
    </section>
      {/* Card section */}
      <div className= '   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 sm:px-6 px-0 justify-center '>
        <div className=' border text-center xs:mt-4 '>
          <div><BiPhoneCall className='mx-auto text-deepfuchsia text-3xl font-bold' /></div>
          <h1 className='text-[19px] text-deepfuchsia '>Choose your Number</h1>
          <p className='text-[19px]  text-[#8492a6] pt-4'>you will be able to pick a <br /> number of your choice.</p>
        </div>
        {/* card 2 */}
        <div className='border  text-center  lg:mt-14 mt-'>
          <div><GiClockwork className='mx-auto text-deepfuchsia text-3xl font-bold' /></div>
          <h1 className='text-[19px] text-deepfuchsia '>Select a Package</h1>
          <p className='text-[19px]  text-[#8492a6] pt-4'>We will provide you with multiple mobile packages to <br />ensure easy and convenient access to our services.

          </p>
        </div>
        {/* card 3 */}
        <div className='border  text-center lg:mt-28 mt-4'>
          <div><MdOutlineLocalGroceryStore className='mx-auto text-deepfuchsia text-3xl font-extrabold' /></div>
          <h1 className='text-[19px] text-deepfuchsia '>Select a Package</h1>
          <p className='text-[19px]  text-[#8492a6] pt-4'>Enter delivery details and get your SIM  delivered at your doorstep.</p>
        </div>
      </div>
      </main>
    </>
  );
}

export default Simedeliver;
