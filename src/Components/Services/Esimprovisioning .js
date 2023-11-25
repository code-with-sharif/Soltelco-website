import React from "react";
import { FaCheck } from "react-icons/fa";
import Footer from "../Header/Footer";
import Footer2 from "../Header/Footer2";
import { useNavigate } from "react-router-dom";

const Esimprovisioning = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/existingsimnumber");
  };
  // const movenextpage = () => {
  //   navigate("/esimsupporteddevice");
  // };
  const Ordernow = () => {
    navigate("/choosenumber");
  };
  // const Ordernow=()=>{
  const newnumber = () => {
    navigate("/choosenumber");
  };
 
  return (
    <>
      <main className="mt-32 sm:pl-[5rem] pl-0 flex lg:flex-row flex-col flex-wrap ">
        {/* Price Card */}
        <section>
          <div className="sm:w-[15rem] w-auto h-[21rem] shadow-xl border-2 rounded-md  relative  sm:mr-0 mr-3 overflow-hidden ">
            <h1 className="w-48 h-6 bg-[#BF00FF]  text-[16px] font pricecard    absolute left-[-50px]  top-0 pl-10  text-white">
              {" "}
              price: 5${" "}
            </h1>

            <h1 className=" mt-6 text-[#5f358f] font text-center text-[24px] font-bold">
              test
            </h1>
            <img className="w-28 h-28 mx-auto" src="../../" alt="" />
            <h2 className=" flex text-[#8492a6] my-1 pl-[4rem] text-[18px]">
              <FaCheck className="text-white  text-[16px] bg-[#5f358f] rounded-full mr-2" />
              7 Gb internet Data
            </h2>
            <h2 className=" flex text-[#8492a6] my- pl-[4rem] text-[18px]">
              <FaCheck className="text-white  text-[16px] bg-[#5f358f] rounded-full mr-2" />
              150 Minute of Airtime
            </h2>
            <h2 className=" flex text-[#8492a6] my- pl-[4rem] text-[18px]">
              <FaCheck className="text-white  text-[16px] bg-[#5f358f] rounded-full mr-2" />
              100 SMS
            </h2>
            <button className="bg-[#BF00FF] hover:bg-[#C054D4] w-28 mx-auto  px-6 py-2 rounded-lg ml-16 text-[16px] text-white mt-4" onClick={Ordernow}>
              Order Now
            </button>
          </div>
        </section>
        {/* ////  section 2 */}
        <section className="lg:pl-[3rem] pl-0">
          <div className="sm:w-96 w-auto h-[10vh] mt-20  sm:pl-8 pl-0">
            <h1 className="text-[#c054d4] font font-bold text-[28px]  lg:text-center ">
              Soltelco eSIM
            </h1>
            <p className="text-[#8492a6] text-[18px] my-3 px-3">
              Ku hel eSim GOOBTA AAD JOOGTO adiga oo helaya 7GB xidhmo internet
              ah, 150 daqiiqo oo Ku-hadal ah, 100 SMS iyo Adeegyo kale oo
              dheeraad ah.
            </p>
            <div className="sm:space-x-3 space-x-1 flex">
              <span>
                <button className="bg-[#BF00FF] hover:bg-[#C054D4] w-full   mx-auto  py-1 px-2 rounded-lg  text-[16px] text-white mt-4" onClick={newnumber}>
                  {" "}
                  New Number
                </button>
              </span>
              <span>
                <button
                  className="bg-[#BF00FF] hover:bg-[#C054D4] w-full mx-auto  py-1  px-2 rounded-lg  text-[16px] text-white mt-4"
                  onClick={handleclick}
                >
                  {" "}
                  Existing Number
                </button>
              </span>
            </div>
          </div>
        </section>
      </main>
      {/* lower third 3 section */}
      <section>
        <div className=" md:w-8/12 w-full mx-auto lg:mt-20 mt-40 text-center shadow-lg border-2">
          <div className="sm:space-x-3 space-x-1 flex lg:justify-center flex-wrap lg:w- w-auto  ml-0  md:ml-20 my-7">
            <span>
              <button className="bg-[#BF00FF] hover:bg-[#C054D4] sm:w-28 w-auto mx-auto  px-6 py-2.5 rounded-lg  text-[16px] text-white ">
                {" "}
                What is esim
              </button>
            </span>
            <span>
              <button
                className="bg-white opacity-100 border-2 border-[#BF00FF] hover:bg-[#BF00FF] sm:w-28 w-auto mx-auto   py-2 rounded-lg  text-[16px] text-[#C054D4] hover:text-white shadow-lg "
                onClick={()=>{ 
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
    
    navigate("/esimsupporteddevice")}}
              >
                {" "}
                Supported device
              </button>
            </span>
            <p className="text-[#8492a6] text-[16px] block  pr-3 pt-5 text-center ">
              Adeega eSIM waa adeeg casri ah oo kuu suuto galinaya in add ku
              isticmaalsho mobile kaaga simcard la'aan uu mobile kaaga
            </p>
          </div>
        </div>
      </section>
      <Footer />
    <Footer2 /> 
    </>
  );
};

export default Esimprovisioning;
