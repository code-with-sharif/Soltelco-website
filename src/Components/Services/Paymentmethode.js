import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formschema } from "./Formschema";
import Footer from "../Header/Footer";
import Footer2 from "../Header/Footer2";

const Paymentmethode = () => {
  const navigate = useNavigate();
  const formInitialvalue={
    phonenumber:null,
  }
const formik=useFormik({
  initialValues:formInitialvalue,
  validationSchema:Formschema,
  onSubmit:()=>{
    navigate("/loadingBars");
  }
})
  const handleClick = () => {
    navigate("/bundleservice1");
  };

   
    
   
    
    
   


  return (
    <>
      <main>
        <div className="mt-28  pb-5 px-2 md:w-10/12 md:h-10/12  w-auto lg:ml-16  shadow-lg rounded-md border-2">
          <h1 className="text-[30px] font mt-8 lg:ml-14 ml-0 text-center lg:w-48 rounded-e-lg text-white bg-[#BF00FF] font-semibold">
            Payment Details
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <section className="flex items-center  ">
              <div className="sm:mr-[10rem] mr-[1rem] lg:pl-14 pl-0  sm:ml-14   lg:w-60 w-20 mt-5">
                <h1 className="text-[18px] font font-bold  lg:mb-4">
                  Mobile Number <span className="text-red-500">*</span>
                </h1>
                <h2 className="text-[18px] font font-bold ">Account type</h2>
              </div>

              <div className="mt-5  ">
                <input
                  type="number"
                  id="number"
                  name="phonenumber"
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                  // min="0"
                  // max="12"
                  className="form-control text-lg rounded-md block  w-full pl-3 h-8  input"
                  placeholder="5256xxxxxxx"
                  required
                />
                      

                
                <input
                  type="radio"
                  id="radioOption1"
                  name="accountType"
                  value="US Dollar"
                  required
                />
                    
                    <label for="radioOption1" className="text-[#212529] font font-bold ml-1 text-[16px]">
                  US Dollar
                </label> 
                
                <input
                  type="radio"
                  id="radioOption2"
                  name="accountType"
                  value="Somali Shilling"
                  className="ml-5"
                  required
                />
                <label for="radioOption2" className="text-[#212529] font font-bold ml-1 text-[16px]">
                  Somali Shilling
                </label>

    <br />
                {
                      formik.touched.phonenumber && formik.errors.phonenumber ?
                      (<span style={{ color: "red", fontSize:'16px' , textAlign:'end' }}>{formik.errors.phonenumber}</span>):null
                    }    
              </div>
            </section>
            <div className="flex justify-around sm:ml-12 sm:mr-20 mt-8 ">
              <button
                type="button"
                className="text-[20px] font rounded-xl text-center border border-[#BF00FF] hover:text-white text-[#BF00FF] opacity-100 bg-white hover:bg-[#BF00FF] py-1  lg:px-12 px-6 "
                onClick={handleClick}
              >
                {" "}
                Back
              </button>
                <button
                  type="submit"
                  className="text-[20px] font rounded-xl text-center text-white bg-[#BF00FF] py-1 lg:px-12 px-6"
                >
                  {" "}
                  Pay Now
                </button>
            </div>
          </form>
        </div>
        <Footer />
      <Footer2 />
      </main>
    </>
  );
};

export default Paymentmethode;
