import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Faqstestimg = () => {
  return (
    <section className='mt-[6.5rem] mb-96'>

<div className='relative w-full  border-2 '>
 
 <h1 className='   faqApplyCaompanyLogo text-center absolute 
  flex items-center justify-center text-white  sm:text-[24px] text-[30px]  font '>
Frequently Asked Questions
</h1>

<div className='faqLinkButton shadow-lg sm:ml-[42%] ml-[25%] top-[480px] absolute '>
<span className='text-[18px] font text-[#000] font-bold hover:text-[#BF00FF]'>HOME</span>
<span className='text-[20px]'><MdOutlineKeyboardDoubleArrowRight /></span>
<span className='text-[18px] font text-[#BF00FF] font-bold '>FAQs</span>
</div>
</div>
    </section>
  )
}

export default Faqstestimg;