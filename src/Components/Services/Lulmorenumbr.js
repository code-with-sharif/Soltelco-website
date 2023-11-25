import React from 'react';
import { Lulmore } from '../Services/Lulmorenumbrjson';
import { Link } from 'react-router-dom';
import Footer from '../Header/Footer';
import Footer2 from '../Header/Footer2';

const Lulmorenumbr = () => {
  return (
    <>
      <div className='mt-32 text-center'>
        <div>
          <h1 className="text-deepfuchsia text-xl font-semibold pb-3">
          Luul VIP Numbers
          </h1>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mx-auto w-[70%] gap-4">
          {Lulmore.map((item, index) => (
            <div key={index} className="text-center w-[11rem] space-y-3 h-48 bg-[#F6F6F6] rounded-2xl hover:border-b-[#BF00FF] hover:shadow-2xl hover:bg-white mx-auto">
              <h1 className="pt-6 text-[#c054d4] font-bold">{item.title}</h1>
              <h2 className="text-[#c054d4]">{item.number}</h2>
              <h3 className="text-[#c054d4]">{item.price}</h3>
              <div className="">
                <button
                  className="text-whitecolor bg-Darkviolet hover:bg-deepfuchsia px-8 py-2 rounded-md text-textfont"
                  // onClick={gotoclick}
                >
                  {item.buttonName}
                </button>
              </div>
            </div>
          ))}
        </div>
       
            

<nav aria-label="Page navigation example" >
  <ul class="inline-flex -space-x-px  mt-8 text-sm">
    <li>
      <Link to="#" class="flex items-center justify-center px-2 h-8 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 rounded-s-full hover:bg-[#BF00FF] ">Prev</Link>
    </li>
    <li>
      <Link to="#" class="flex items-center justify-center px-2 h-8 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 rounded- hover:bg-[#BF00FF] ">1</Link>
    </li>
   
    <li>
      <Link to="#" class="flex items-center justify-center px-2 h-8 ms-0 leading-tight  bg-white border border-e-0 border-gray-300 rounded-e-full hover:bg-[#BF00FF] ">Next</Link>
    </li>
  </ul>
</nav>
 </div>
 <Footer />
      <Footer2 />
    </>
  );
};

export default Lulmorenumbr;
