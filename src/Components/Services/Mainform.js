import { Navigation } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mainform = () => {
    const navigate=useNavigate()
    // const handleClick=()=>{
    //     navigate('/choosenumber');
    // }
    const Customerinformation=()=>{
        navigate('/Customerinformation');
    }
  return (
    <main>
    <div className=" mt-28 lg:w-[55rem] w-auto lg:ml-16 ml-0   lg:h-[100vh] h-auto 
    shadow-lg rounded-md border-2 pb-5">
      <h1
        className="text-[30px] font  mt-8 lg:ml-14  text-center lg:w-48 w-auto rounded-e-lg
     text-white bg-[#BF00FF] font-semibold"
      >
        Main Form
      </h1>
      <h2
        className="text-[20px] font   rounded-xl text-center  
     text-white bg-[rgb(191,0,255)] py-1 px-12  lg:w-56 w-auto mx-auto mt-8"
      >
        Package Summary
      </h2>
      <div className="flex my-8 md:justify-center flex-row   lg:w-[90%] ">
        <section className="lg:text-end lg:mr-[10rem] mr-0 sm:ml-0 ml-4   w-32 lg:w-60">
          <h1 className="text-[16px] font  text-[#BF00FF]   mt-3 lg:mt-3 font-bold">
          SIM Catagory:
          </h1>
          <h2 className="text-[16px] font  text-[#BF00FF]   mt-3 lg:mt-3 font-bold">
          SIM Crad Number:
          </h2>
          <h3 className="text-[16px] font  text-[#BF00FF]   mt-3 lg:mt-3 font-bold">
          SIM Package:
          </h3>
          <h4 className="text-[16px] font  text-[#BF00FF]   md:mt-3 mt-7 lg:mt-3 font-bold">
          Validity:
          </h4>
          <h5 className="text-[16px] font  text-[#BF00FF]   mt-3 lg:mt-3 font-bold">
          Price:
          </h5>
         
        </section>


        {/* section 2 */}


        <section className="">
          <h1 className="text-[16px] font  text-[#000] mt-3  font-bold">
          Luul VIP          </h1>
          <h2 className="text-[16px] font  text-[#000] mt-3 font-bold">
          252672222296
          </h2>
          <h3 className="text-[16px] font  text-[#000] mt-3 font-bold">
          25GB Monthly Bundle
          </h3>
          <h4 className="text-[16px] font  text-[#000] md:mt-3 mt-7 font-bold">
          30 days
          </h4>
          <h5 className="text-[16px] font  text-[#000] mt-3 font-bold">
          50$
          </h5>
        
         
      </section>
      </div>

              <div className="flex justify-around  mt-3 lg:pl-12 lg:pr-24">
              <button
              type="submit"
              className="text-[20px] font   rounded-xl text-center border border-[#BF00FF]
                    hover:text-white text-[#BF00FF] pacity-100 bg-white hover:bg-[#BF00FF] py-1 lg:px-12 px-6 "
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth', // Add smooth scrolling behavior
                      });
                    
                    navigate(-1)} }
            >
              {" "}
              Back
            </button>
                <button
                  type="submit"
                  className="text-[20px] font   rounded-xl text-center text-white bg-[#BF00FF] py-1 lg:px-12 px-6 "
                  onClick={()=>{

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth', // Add smooth scrolling behavior
                      });
                    navigate('/Customerinformation')
                  }}
                >
                  {" "}
                  Next
                </button>
                
              </div>
          
      {/* </section> */}
    </div>
  </main>
  )
}

export default Mainform;