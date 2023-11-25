import React from 'react'
import faqsemial from '../../Images/faqsemial.png'
import faqswhatsapp from '../../Images/faqsaccordionwhatsapp.png'
const Lowerpartaccordion = () => {
  return (
   <>
   <main className='mt-8  flex justify-between lg:flex-row flex-col '>
    <section className='flex  '>
        <div>
            <img className=' lg:h-[3rem] h-[2rem] lg:mt-[1rem] mr-[2rem] lg:ml-0 ml-2' src={faqsemial} alt="" />
        </div>
        <div>
            <h1 className='text-[#212529] font text-[22px]'>Get in Touch !</h1>
            <p className='text-[16px] font text[#8492a6] mb-[1rem]'>Feel free to contact us for your queries</p>
            <button className='bg-[#BF00FF] hover:bg-[#C054D4] font
             text[18px]  lg:px-6 px-3 rounded-lg text-white'>submit a request </button>
        </div>
    </section>
    {/*  section 2 for whatsapp */}
    <section className='flex sm:mt-0 mt-5 ml-0 md:px-0 px-3'>
        <div>
            <img className=' lg:h-[3rem] h-[2rem] lg:mt-[1rem] mr-[2rem] ' src={faqswhatsapp} alt="" />
        </div>
        <div >
            <h1 className='text-[#212529] font text-[22px]'>Send a Direct Message</h1>
            <p className='text-[16px] font text[#8492a6] mb-[1rem]'>Start a chat with our Customer Care Representative</p>
            <button className='bg-[#BF00FF] hover:bg-[#C054D4] font
             text[18px]  px-6  rounded-lg text-white text-center'>Start Chart</button>
        </div>
    </section> 
   </main>
   </>
  )
}

export default Lowerpartaccordion;