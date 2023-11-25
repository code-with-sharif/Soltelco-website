import React from 'react'
import Blogsherosectionimg from '../../Images/blogherosection.jpg';
import Footer from '../Header/Footer';
import Footer2 from '../Header/Footer2';
import { BsWhatsapp, BsArrowRightShort } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import categories from '../Blog/Categories.json';
import advertiseimg from '../../Images/advertiseweekend.png'




const Allblog = () => {
  return (
    <>
<main className='lg:mt-28 mt-20'>
<div className='md:px-11 '>
        <img className='w-full h-[270px] rounded-[40px]' src={Blogsherosectionimg} alt="" />
      </div>

      <div className='md:w-11/12 w-full mx-auto pb-4 flex md:flex-nowrap flex-wrap mt-5  h-auto'>
{/* section 11 */}
<section className='lg:w-7/12 w-full'>
<div className=' flex flex-wrap lg:justify-start justify-center gap-6'>
            <box className='md:w-5/12 w-full md:px-0 px-1 rounded-lg '>
              <div className='transition-transform  hover:-translate-y-4  duration-500 '>
                <h1 className='lg:text-[24px] text-[16px] font-sans text-[#000000] font-bold hover:text-Darkviolet cursor-pointer'>
                  Somaliland Trade Fair 2023
                </h1>

                <div className=' lg:h-[400px] w-full  h-[150px] md:mx-0 mx-auto  border rounded-lg cursor-pointer relative z-10'>
                  {/* Icon: whatsapp 1 */}
                  <span className='w-6 h-6 bg-[#25D366] text-white flex justify-center items-center rounded-full absolute bottom-2 right-9'>
                    <BsWhatsapp />
                  </span>

                  {/* Icon: Facebook 2 */}
                  <span className='w-6 h-6 bg-[#3B5998] text-white flex justify-center items-center rounded-full absolute bottom-2 right-2'>
                    <BiLogoFacebook />
                  </span>
                </div>
                <div className='flex items-center   w-full border-b-2 justify-end group '>
                  <p className='text-[16px] text-[#8492a6] p-1 cursor-pointer group-hover-text-Darkviolet'>Read more</p>
                  <span className='text-[20px] text-[#8492a6] p-1 cursor-pointer group-hover:text-Darkviolet'><BsArrowRightShort /></span>
                </div>
              </div>
            </box>
            {/* box 2 */}

            <box className='md:w-5/12 w-full md:px-0 px-1  rounded-lg '>
              <div className='transition-transform  hover:-translate-y-4  duration-500 '>
                <h1 className='lg:text-[24px] text-[16px] font-sans text-[#000000] font-bold hover:text-Darkviolet cursor-pointer'>
                Somaliland Job Fair – Borama 
                </h1>

                <div className=' lg:h-[400px] w-full  h-[150px] md:mx-0 mx-auto  border rounded-lg cursor-pointer relative z-10'>
                  {/* Icon: whatsapp 1 */}
                  <span className='w-6 h-6 bg-[#25D366] text-white flex justify-center items-center rounded-full absolute bottom-2 right-9'>
                    <BsWhatsapp />
                  </span>

                  {/* Icon: Facebook 2 */}
                  <span className='w-6 h-6 bg-[#3B5998] text-white flex justify-center items-center rounded-full absolute bottom-2 right-2'>
                    <BiLogoFacebook />
                  </span>
                </div>
                <div className='flex items-center   w-full border-b-2 justify-end group '>
                  <p className='text-[16px] text-[#8492a6] p-1 cursor-pointer group-hover-text-Darkviolet'>Read more</p>
                  <span className='text-[20px] text-[#8492a6] p-1 cursor-pointer group-hover:text-Darkviolet'><BsArrowRightShort /></span>
                </div>
              </div>
            </box>
            {/* box 3 */}
            <box className='md:w-5/12 w-full md:px-0 px-1  rounded-lg '>
              <div className='transition-transform  hover:-translate-y-4  duration-500 '>
                <h1 className='lg:text-[24px] text-[16px] font-sans text-[#000000] font-bold hover:text-Darkviolet cursor-pointer'>
                Somaliland ICT Conference  Borama 2022
                </h1>

                <div className=' lg:h-[400px] w-full  h-[150px] md:mx-0 mx-auto border rounded-lg cursor-pointer relative z-10'>
                  {/* Icon: whatsapp 1 */}
                  <span className='w-6 h-6 bg-[#25D366] text-white flex justify-center items-center rounded-full absolute bottom-2 right-9'>
                    <BsWhatsapp />
                  </span>

                  {/* Icon: Facebook 2 */}
                  <span className='w-6 h-6 bg-[#3B5998] text-white flex justify-center items-center rounded-full absolute bottom-2 right-2'>
                    <BiLogoFacebook />
                  </span>
                </div>
                <div className='flex items-center   w-full border-b-2 justify-end group '>
                  <p className='text-[16px] text-[#8492a6] p-1 cursor-pointer group-hover-text-Darkviolet'>Read more</p>
                  <span className='text-[20px] text-[#8492a6] p-1 cursor-pointer group-hover:text-Darkviolet'><BsArrowRightShort /></span>
                </div>
              </div>
            </box>
            
          </div>

</section>
{/* secion 22 */}
<section className='md:w-5/12 w-full '>
<main className='flex flex-col lg:justify-end lg:items-end flex-wrap'>
<div className=" bg-[#EBD9FF]   rounded-lg lg:w-9/12 w-full p-8 mb-4 ">
                <div className="mb-3">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      className="relative rounded-s-3xl m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto
                        rounded-l border border-solid border-neutral-300 bg-white px-3 py-[0.125rem]  <!-- Reduced height -->
                        text-base font-normal leading-[1.6] text-black outline-none transition duration-200
                        ease-in-out focus:z-[3] focus:border-primary focus:text-black
                        focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none
                        dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200
                        dark:focus:border-primary"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon1" />

                    {/* <!-- Search button --> */}
                    <button
                      className="rounded-e-3xl relative z-[2]  flex items-center rounded-r bg-white px-6 py-2.5
                        text-xs font-medium uppercase leading-tight text-black shadow-md transition
                        duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700
                        focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                      type="button"
                      id="button-addon1"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="black"
                        className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <h1 className=''>Recent Posts</h1>
                <div className='flex gap-4 mb-2'>
                  <div className='  w-[300px] h-[150px] border-4'>img</div>
                  <div>
                    <span className=' text-[20px] font hover:text-Darkviolet font-bold'>
                      Somaliland Trade Fair 2023
                    </span>
                    <br />
                    <span className=' text-[20px] font hover:text-Darkviolet font-bold'>
                      2023-08-08
                    </span>
                  </div>
                </div>
                {/* inner card 2 */}
                <div className='flex gap-4 mb-2'>
                  <div className='  w-[400px] h-[150px] border-4'>img</div>
                  <div>
                    <span className=' text-[20px] font hover:text-Darkviolet font-bold'>
                      Somaliland Job Fair – Borama 2023
                    </span>
                    <br />
                    <span className=' text-[16px] font hover:text-Darkviolet font-bold'>
                      2023-08-08
                    </span>
                  </div>
                </div> 
                {/* inner card 3 */}
                <div className='flex gap-4 mb-2'>
                  <div className='  w-[450px] h-[150px] border-2'>img</div>
                  <div>
                    <span className=' text-[20px] font hover:text-Darkviolet font-bold'>
                      Somaliland ICT Conference – Borama 2022
                    </span>
                    <br />
                    <span className=' text-[16px] font hover:text-Darkviolet font-bold'>
                      2023-08-08
                    </span>
                  </div>
                </div>
              </div>
              {/* box2 */}

              <div className='bg-[#EBD9FF]  md:w-9/12 w-full h-auto rounded-lg py-5'>
                <h1 className='text-center pt-3 text-[20px] font font-extrabold'>Popular Categories</h1>
                <ul className='pl-10'>
  {categories.categories.map((category, index) => (
    <li key={index}>
      <span className='inline-block w-3 h-3  rounded-full bg-[#C054D4] mr-2'></span>
     <span className='hover:text-[#C054D4]'> {category}</span>

    </li>
  ))}
</ul>

</div> 
{/* box 3  */}
<div className='bg-[#EBD9FF]  md:w-9/12 w-full h-[410px] rounded-lg  py-5  mt-2 '>
    <h1 className='text-center'>For Advertisement</h1>
    <img  className='mx-auto w-[70%] h-[90%]' src={advertiseimg} alt="" />
  </div>

</main>

</section>

</div>

      <div>
      <Footer />
      <Footer2 />
      </div>
</main>
    </>
  )
}

export default Allblog;