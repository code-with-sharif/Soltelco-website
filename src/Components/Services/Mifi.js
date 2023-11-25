import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Header/Footer';
import Footer2 from '../Header/Footer2';

function Mifi() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/bundleservice1");
  }
  return (
<main className='mt-32'>
<h1 className='font-bold lg:mb-20 mb-5  text-[22px] text-[#bf00ff] text-center font'>Wifi Packages</h1>

    <div className='sm:pl-24 pl-2 flex'>
        <div className='h-[22px] w-[12%] bg-[#bf00ff]'></div>
        <div className=' '>
  <div className='ml-4 p-3'>
    <h1 className='text-[22px] mb-1 h-6 text-[#bf00ff]'>
       WIFI Features
    </h1>
    <h2 className='font text-[20px]'>
      <span className="red-circle -ml-4"></span> IKU Mifi Mx1 4G Router
    </h2>
    <h3 className='font text-[20px]'>
      <span className="red-circle  -ml-4"></span> 4G LTE Connectivity | Up to 150 MBps / 50Mbps
    </h3>
    <h4 className='font text-[20px]'>
      <span className="red-circle  -ml-4"></span> 4G LTE high-speed connection
    </h4>
    <h5 className='font text-[20px]'>
      <span className="red-circle  -ml-4"></span> Connectivity: Connect up to 10 devices
    </h5>
    <h6 className='font text-[20px]'>
      <span className="red-circle  -ml-4"></span> Long battery Life: 3000 mAh battery
    </h6>
    <p className='font text-[20px]'>
      <span className="red-circle  -ml-4"></span> Wi-Fi Routing: WIFI 802.11 b/g/n
    </p>
  </div>
</div>
 </div>
    {/* CARD   */}
    <div className='sm:pl-24 pl- mb-10 sm:mt-12 mt-4'>
    <h1 className='text-[24px] font-bold text-[#5f358f] ml-3'>Mifi Plans</h1>
    <div className="sm:w-[12rem] w-auto h-52  bg-[#F6F6F6] rounded-2xl 
           hover:shadow-lg hover:bg-white  border-2 border-white">
  <h1 className="text-center text-[#bf00ff] font-semibold font text-[18px] mt-4 ">$3 = 400MB Daily / 12GB <br /> Monthly</h1>
<p className='text-center text-[#8492a6] text-[24px] font-normal mt-[1.5rem]'>Monthly Caps 3 Dollar</p>
{/* button div */}
<div className='self-center mt-4 relative'>
    <p className='text-[#bf00ff] text-[16px] font-normal  ml-4'>For  $3 only</p>
    <button className='text-whitecolor 
     bg-[#BF00FF] hover:bg-deepfuchsia px-5 py-3 rounded-md 
     text-textfont absolute left-16 mt-2' onClick={()=>{ 
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    
    navigate("/bundleservice1")}}
    >Buy Now</button>
</div> 
</div>  

    </div>
    <Footer />
      <Footer2 />
</main>
    )
}

export default Mifi;