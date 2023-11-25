import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formschema } from "./Formschema";
import Footer from "../Header/Footer";
import Footer2 from "../Header/Footer2";

const Bundleservice1 = () => {
  const navigate = useNavigate();
  const formInitialvalue = {
    phonenumber: null,
  };
  const formik = useFormik({
    initialValues: formInitialvalue,
    validationSchema: Formschema,
    onSubmit: () => {
      // console.log(value);
    navigate("/Paymentmethode");

    },
  });
 
  return (
    <>
      <main>
        <div className=" mt-28 lg:w-[55rem] w-full  lg:ml-16 ml-0   lg:h-full h-auto 
        shadow-lg rounded-md border-2">
          <h1
            className="text-[30px] font  mt-8 md:ml-14  text-center w-48 rounded-e-lg
         text-white bg-[#BF00FF] font-semibold"
          >
            Services Bundles
          </h1>
          <h2
            className="text-[20px] font   rounded-xl text-center  
         text-white bg-[rgb(191,0,255)] py-1 px-12  lg:w-72 w-full mx-auto mt-8"
          >
            Package Summary
          </h2>
          <div className="flex my-8 md:justify-center px-3 justify-end   flex-row   lg:w-[90%] ">
            <section className="lg:text-end lg:mr-[10rem] mr-0 w-40 lg:w-60">
              <h1 className="text-[16px] font  text-[#BF00FF]   mt-3 md:mt-3 font-bold">
                Bundle Name:
              </h1>
              <h2 className="text-[16px] font  text-[#BF00FF]   mt-7 md:mt-3 font-bold">
                Internet:
              </h2>
              <h3 className="text-[16px] font  text-[#BF00FF]   mt-7 md:mt-3 font-bold">
                Soltelco Minutes:
              </h3>
              <h4 className="text-[16px] font  text-[#BF00FF]     mt-3 font-bold">
                Telesom Minutes:
              </h4>
              <h5 className="text-[16px] font  text-[#BF00FF]   mt-3 md:mt-3 font-bold">
                SMS:
              </h5>
              <h5 className="text-[16px] font  text-[#BF00FF]   mt-3 md:mt-3 font-bold">
                Price:
              </h5>

              <p className="text-[14px] font  font-bold text-[#212529]  md:mt-12 mt-14 ">
                Sim Number <span className="text-red-500">*</span>
              </p>
              <div className="">
                <button
                  type="submit"
                  className="text-[20px] font   rounded-xl text-center border border-[#BF00FF]
                        hover:text-white text-[#BF00FF] pacity-100 bg-white hover:bg-[#BF00FF] py-1 px-3 lg:w-full w-11/12 md:mt-12 mt-14 md:mr-0  mr-2 "
                  onClick={()=>navigate(-1)}
                >
                  {" "}
                  Back
                </button>
              </div>
            </section>


            {/* section 2 */}


            <section className="md:text-start text-end">
              <h1 className="text-[16px] font  text-[#000] mt-3  font-bold">
                $3 = 400MB Daily / 12GB Monthly
              </h1>
              <h2 className="text-[16px] font  text-[#000] mt-3 font-bold">
                Monthly Caps 3 Dollar
              </h2>
              <h3 className="text-[16px] font  text-[#000] md:mt-3 mt-4 font-bold">
                5
              </h3>
              <h4 className="text-[16px] font  text-[#000] md:mt-3 mt-5 font-bold">
                45
              </h4>
              <h5 className="text-[16px] font  text-[#000] mt-3 font-bold">
                Only for three day
              </h5>
              <h6 className="text-[16px] font  text-[#000] mt-3 font-bold">
                $3
              </h6>
              <div className="mt-5">
                <form onSubmit={formik.handleSubmit}>
                  <div className="grid grid-cols-1">
                    <label
                      htmlFor="number"
                      className="font font-semibold text-[14px] text-[#9308c2]"
                    >
                      Format of number is 25267XXXXXXX
                    </label>
                    <input
                      type="number"
                      id="number"
                      
                      name="phonenumber"
                      value={formik.values.phonenumber}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      
                      className="lg:w-60 w-full px-3 py-2 input  form-control text-sm rounded-md  "
                      placeholder="Enter Your Soltelco Number"
                      required
                    />
                    {
                      formik.touched.phonenumber && formik.errors.phonenumber ?
                      (<span style={{ color: "red", fontSize:'16px' }}>{formik.errors.phonenumber}</span>):null
                    }

                  </div>

                  <div className="">
                    <button
                      type="submit"
                      className="text-[20px] font   rounded-xl text-center text-white bg-[#BF00FF] py-1 px-3 w-full mt-11  "
                      
                    >
                      {" "}
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
          {/* </section> */}
        </div>
        <Footer />
      <Footer2 /> 
      </main>
    </>
  );
};

export default Bundleservice1;
