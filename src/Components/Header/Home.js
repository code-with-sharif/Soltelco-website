import React, { Fragment } from 'react';
import Videofeaturesection from './Videofeaturesection';
import Simedeliver from './Simedeliver';
import Footer from './Footer';
import Footer2 from './Footer2';
import Tablesection from './Tablesection';
import { Card } from '../Card/Card';
import { data } from '../Card/Cardjson';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  return (
    <>
      <Videofeaturesection />


      <Tablesection />
      <Simedeliver />
      <div className='mt-10 w-10/12 mx-auto'>
      <div className="  text-center sm:px-0 px-1 ">
            <h1 className="text-deepfuchsia text-[24px] font-semibold pb-3">
              Explore our most popular Services
            </h1>
            <p className="lg:text-headingfont text-[16px] text-[#8492a6]">
              There is never been a time to look for the best mobile plans.
            </p>
          </div> 

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 
       ">
        {data.map((item, index) => (
          <Fragment key={index}>
            <Card
              title={item.title}
              icon={item.icon}
              packegeday={item.packegeday}
              packegedate={item.packegedate}
              fordollor={item.fordollor}
              buttonName={item.buttonName}
            />
          </Fragment>
        ))}
      </div>
      <div className='mt-10 flex justify-center items-center '>
      <button
  className='text-whitecolor  bg-Darkviolet hover:bg-deepfuchsia px-8 lg:py-3 py-1 rounded-sm lg:text-lg text-base'
  onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth', // Add smooth scrolling behavior
                      });
                      navigate('/databundle');
                    }}
>
  Explore More Plans
</button>

</div>  
      </div>
      <Footer />
      <Footer2 />
    </>
  );
}

export default Home;
