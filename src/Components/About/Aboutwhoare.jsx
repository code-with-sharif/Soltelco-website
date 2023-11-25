import React from 'react'
import img from '../../Images/Aboutimg.jpg';
import mission from '../../Images/missionlogo.png';
import vission from '../../Images/vision logo.003a2263.png';
import aboutcor1 from '../../Images/aboutcore1imge.png';
import aboutcor2 from '../../Images/aboutcore2imge.png';
import aboutcor3 from '../../Images/aboutcore3imge.png';
import { useNavigate } from 'react-router-dom';
function Aboutwhoare() {
  const navigate=useNavigate();
  const Contactus=()=>{
    navigate("/contact");
  }
  return (
    <main>
        <div className='ml-14 mt-32  flex'>
            <div className=' w-[500px] h-36 lg:overflow-y-hidden   md:block  hidden'>
            <img  className='lg:w-64 lg:h-56 '  src={img} alt="" />
            </div>
            <div className=' ml-[-70px] sm:ml-6  sm:pr-16 mr-20' >
                <h1 className='text-deepfuchsia text-[22px] font-sans '>Who are we?</h1>
                <p className='text-[#8492a6] sm:text-[16px] text-[12px]'>Soltelco is the first Telecommunications company in 
                    Somaliland and revived up now to provide  innovative, 
                    reliable and affordable telecommunication services to Somalilanders.</p>
                    <p className='my-4 text-[#8492a6] sm:text-[16px] text-[12px] '>We are creating experiences that make a different with digital 
                        Services that make life easy.</p>
                        <button className='lg:px-8 py-1 px-2 rounded-lg bg-[#BF00FF] hover:bg-Darkviolet text-whitecolor text-[16px]' onClick={Contactus}>Contacts Us</button>
            </div>
        </div>
        {/* Our Mission */}
  <div className='grid grid-cols-1 mt-20'>
    <div className='flex justify-center items-center'>
    <img className='w-[20px] h-[20px] mr-1 mb-4 ' src={mission} alt="" />
      <h1 className='text-[18px] font-semibold font-sans text-[#c054d4] inline-block mr-2'>Our Mission</h1>
    </div>
  <p className='text-[#8492a6]  sm:text-[16px] text-[12px] block text-center px-2 sm:px-16'> To empower fully digitalized customer experience with engaging, customer-centric and economic telecom services and solutions. </p>


  </div>
{/* Our Vision */}
<div className='grid grid-cols-1   mt-4'>
    <div className='flex justify-center items-center'>
    <img className='w-[20px] h-[20px] mr-1 mb-4' src={vission} alt="" />
      <h1 className='text-[18px] font-semibold font-sans text-[#c054d4] inline-block mr-2'>Our Vision</h1>
    </div>
  <p className='text-[#8492a6]  sm:text-[16px] text-[12px] block text-center'> 
  To be the Fastest and Most Engaging Service Provider.  </p>
 </div>

 {/* Core Values */}
 <h1 className='text-[#bf00ff] font text-[24px] font-semibold mt-16 text-center'>Core Values</h1>

 <div className='flex flex-row justify-center mt-12 '>

  <div className='grid grid-col w-[400px] h-[150px] hover:shadow-md '>
  <div className='flex  flex-col justify-center items-center'>
    <img className='h-[50px] w-[50px]' src={aboutcor1} alt="" />
  </div>

    <p className=' sm:text-[16px] text-[12px] font-sans text-[#8492a6] text-center mt-3'>Customer Excellence</p>
</div>
{/* two 2 */}

<div className='grid grid-col w-[400px] h-[150px] hover:shadow-md '>
  <div className='flex justify-center flex-col items-center'>
    <img className='h-[50px] w-[50px]' src={aboutcor2} alt="" />
  </div>

    <p className=' sm:text-[16px] text-[12px] font text-center text-[#8492a6] mt-3'>Customer Excellence</p>
</div>
{/* thrree 3 */}
 <div className='grid grid-col w-[400px] h-[150px] hover:shadow-md '>
  <div className='flex  flex-col justify-center items-center'>
    <img className='h-[50px] w-[50px]' src={aboutcor3} alt="" />
  </div>

    <p className=' sm:text-[16px] text-[12px] font text-[#8492a6] mt-3 text-center'>Customer Excellence</p>
</div>
</div>




    </main>
  )
}

export default Aboutwhoare;