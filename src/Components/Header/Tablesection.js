import React from 'react';
import jsonData from './Tablesection.json';
import { BiStar } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Tablesection = () => {
  const navigate = useNavigate();

  // Define an array of colors
  const colors = ['skyblue', 'skyblue', 'black', 'black', 'Darkviolet', 'Darkviolet'];

  
  

  return (
    <section className=''>
      <div className="text-center py-20 sm:px-36 px-0">
        <h1 className="mb-4 text-deepfuchsia  text-[24px] font-bold">
          Choose a Number of Your Choice.
        </h1>
        <p className="mb-4 text-[#8492a6] font-sans lg:text-lg text-base md:px-0 px-2 ">
          Soltelco brings to you for the first time in Somaliland an option where you can
          select a VIP or Standard Number based on your preference.
        </p>
        <button
          className='bg-[#BF00FF] text-whitecolor hover:bg-Darkviolet py-1 px-3 rounded-md text-[20px]'
          onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth', // Add smooth scrolling behavior
                      });
                      navigate('/choosenumber');
                    }}
        >
          Show more
        </button>
      </div>
      {/* table */}
      <div className='w-full md:ms-0 flex justify-center items-center text-center'>
        <table className=" md:w-[900px] w-full divide-gray-200 shadow-md border">
          <thead>
            <tr>
              <th className="lg:px-6 px-2 py-3 text-left text-xs font-sans font-[700px] text-Darkviolet">
                Number
              </th>
              <th className="lg:px-6 px-2 py-3 text-xs font-sans font-[700px] text-Darkviolet">
                Type
              </th>
              <th className="lg:px-6 px-2 py-2 text-xs font-sans font-[700px] text-Darkviolet">
                Choose
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {jsonData.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 border-b border-t border-[#BF00FF]`}
              >
                <td className="lg:px-6  py-2 items-center flex justify-start mt-2">
                  <BiStar
                    className='mr-1 w-4 text-xs md:text-base'
                    style={{ color: colors[index],}}
                  />{' '}
                  <span className='text-xs md:text-base'>{item.Number}</span>
                </td>
                <td className="lg:px-6 px-2 py-4 text-xs md:text-base font-sans">{item.type}</td>
                <td>
                  <button
                    className='w-12 px-0  text-center py-1 text-xs bg-[#BF00FF] text-whitecolor md:text-sm font-sans rounded-md'
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth', // Add smooth scrolling behavior
                      });
                      navigate('/mainform');
                    }}
                  >
                    {item.Choose}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Tablesection;
