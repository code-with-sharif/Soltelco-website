import React from 'react';
import Footer from '../Header/Footer';
import Footer2 from '../Header/Footer2';

const Career = () => {
  return (
    <main>
      <section className='mt-[6.5rem] '>
        <div className='relative w-full border-2 '>
          <div className='carrer w-full lg:h-[15rem] h-auto text-center absolute text-white sm:text-[24px] font'>
            <h1 className='relative top-20 text-[#BF00FF]'>jobs /Carreer</h1>
            <p className='relative lg:top-20  lg:pl-20 lg:pr-20'>
              Soltelco is the first Telecommunications company in Somaliland and revived up now to
              provide innovative, reliable and affordable telecommunication services to
              Somalilanders.
            </p>
          </div>
        </div>
      </section>

      <div className='lg:ml-20 ml-4 mr-4 lg:mr-20 mt-72  h-a flex justify-between '>
        <h1 className='text-[24px] font font-bold'>jobs</h1>
        <div>
          <h1 className='text-[20px] font'>Type of Jobs</h1>
          <select className='border-2 border-[#BF00FF] text-[16px] rounded-sm'>
            <option className='text-[16px]'>Engineering</option>
            <option className='text-[16px]'>IT</option>
            <option className='text-[16px]'>HR</option>
          </select>
        </div>
      </div>

      <hr className='w-[85%]  my-5 bg-gray-600 mx-auto' />
      <div className='lg:ml-20 lg:mr-20  ml-4 mr-4 flex justify-between '>
        <h1 className='text-[20px]  text-[#8492a6] font font-bold'>Recommended Job :

</h1>
        <div>
          <button className='bg-[#bf00ff] px-3 py-1 rounded-sm font text-[16px]'> job request</button>
        </div>
      </div>
      <p className='text-center text-[#bf00ff] text-[1.75rem] font mt-3'> job not available</p>
      <Footer />
      <Footer2 />
    </main>
  );
};

export default Career;
