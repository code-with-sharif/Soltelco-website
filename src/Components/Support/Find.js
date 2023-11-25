import React, { useState } from 'react';
import data from '../Support/Find.json';
import Footer from '../Header/Footer';
import Footer2 from '../Header/Footer2';

const Find = () => {
  const [mape, setMap] = useState(6);
  const [activeIndex, setActiveIndex] = useState(null);
 const URLdata=[
  
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125905.44862991932!2d43.91076655955417!3d9.548176573441378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bf87108c7219%3A0x61638d9da9bd62d2!2sHargeisa%2C%20Somalia!5e0!3m2!1sen!2s!4v1698667045712!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62879.84234921084!2d43.13352466431302!3d9.934777278820437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x162f7f8531f14aeb%3A0xe89a7fd201ba8d55!2sBorama%2C%20Somalia!5e0!3m2!1sen!2s!4v1698667209069!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13272.81922222506!2d73.0371536!3d33.7295198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbefce01e6917%3A0x3e66e0de3e2598c0!2sFaisal%20Mosque!5e0!3m2!1sen!2s!4v1698725823191!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6843400083617!2d67.036972174958!3d24.874628444691282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5e736977c1%3A0x70ed36c8a6891d3a!2sMazar-e-Quaid-e-Azam!5e0!3m2!1sen!2s!4v1698725928107!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.508651022025!2d74.30691007519509!3d31.592519343574686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c82d18c2ced%3A0x1aa4688a984fdde1!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1698726010685!5m2!1sen!2s",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0526854950335!2d73.085941075283!3d33.733453734496734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc08190000001%3A0xbf92dedeb7109e9d!2sAgile%20Vectors!5e0!3m2!1sen!2s!4v1698726183452!5m2!1sen!2s"
  
 ]
  return (
    <main className='mt-32'>
      <h1 className='text-[48px] text-[#c054d4] font text-center font-bold'>
        Welcome to Soltelco Branches
      </h1>
      <p className='text-[16px] text-[#8492a6] font text-center  sm:px-0 px-4'>
        Please Select Your Location to find our sites here...
      </p>
       <section>
        <h1 className='text-[#c054d4] text-[24px] font font-bold text-center lg:text-start lg:ml-32  mt-10'>
          Our Popular Cities
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='flex flex-wrap justify-center items-center gap-12 py-10 sm:w-[865px] w-[284px] md:px-6 sm:px-0 xs:px-0 lg:px-0'>
            {data.map((item, index) => (
              <div
                key={index}
                style={{ marginTop: '-25px' }}
                className={`bg-[#DFA9E9] text-white border-[2px] border-[#FFFFFF]
                  hover:border-[#BF00FF] rounded-full text-center cursor-pointer px-2
                  ${activeIndex === index ? 'bg-deepfuchsia text-white' : 'hover:bg-[#FFFFFF] hover:text-[#BF00FF]'}`}
                onClick={() => {
                  setActiveIndex(index);
                  setTimeout(() => {
                    setActiveIndex(null);
                  }, 1000);
                  setMap(index );
                }}
              >
                <span className='text-[18px] font font-bold'>{item.heading1}</span>,
                <span className='text-[14px] font'>{item.heading2}</span>
              </div>
            ))}
          </div>
        </div>
      </section> 
      {/* mapesectioon */}
      <section>
   
  {mape !== null && (
            <iframe
            className='w-full '
              src={URLdata[mape]}
              // width="1515"
              height="150"
              style={{ border: '0', marginBottom: '-30px', marginTop:"-40px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          )}
 
      </section> 
      <Footer />
    <Footer2 />
    </main>
  );
};

export default Find;
