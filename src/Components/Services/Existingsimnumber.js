import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formschema } from "./Formschema";
import Footer from "../Header/Footer";
import Footer2 from "../Header/Footer2";

const Existingsimnumber = () => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  //   const formInitialvalue={
  //      simnumber:null
  //   }
  // const formik=useFormik({
  //   initialValues:formInitialvalue,
  //   validationSchema:Formschema,

  // onSubmit: (e) => {
  // e.prevantDefault();
  // setData('useractive');
  //   }

  // })
  const handsubmit = (e) => {
    e.preventDefault();
    setData("inActive User");
    setTimeout(() => {
      setData("");
    }, 2000);
  };

  const handleClick = () => {
    navigate("/esimprovisioning");
  };

  return (
    <>
      <main>
        <div className="mt-28 md:w-8/12 pb-5 md:px-0 px-4  w-full lg:ml-16 lg:h-[50vh] h-auto shadow-lg rounded-md border-2">
          <h1 className="text-[25px] font mt-8 lg:ml-14 ml-0 text-center lg:w-48 rounded-e-lg text-white bg-[#BF00FF] font-semibold">
            Existing eSIM
          </h1>
          <form onSubmit={handsubmit}>
            <section className="  ">
              <div className="mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                <h1 className="text-[16px] font font-bold  lg:mb-4">
                  Sim Number <span className="text-red-500">*</span>
                </h1>

                <div>
                <input
                  type="number"
                  id="number"
                  name="simnumber"
                  //   value={formik.values.simnumber}
                  //   onChange={formik.handleChange}
                  className="form-control text-lg rounded-md block md:w-60 md:ml-8 md:mr-8 w-full pl-3 h-8 input"
                  placeholder="5256xxxxxxx"
                  required
                />
                </div>

                <div className="md:pb-0 pt-2">
                <button
                  type="submit"
                  className="text-[16px] font rounded-md text-center  text-white bg-[#BF00FF] py-1 md:w-3/12 w-full "
                >
                  {" "}
                  verify
                </button>
                </div>
              </div>
              {/* {formik.touched.simnumber && formik.errors.simnumber ? (<span style={{ color: "red", fontSize:'16px' ,  }}>{formik.errors.simnumber}</span>):null} */}
              <div className="text-center text-red-500  text-[12px] mt-1">
                {data}
              </div>
            </section>
          </form>
          <div className=" md:w-5/12 md:mx-auto md:pt-5 ">
            <button
              type="button"
              className="text-[16px] font rounded-xl text-center border border-[#BF00FF]
                 hover:text-white text-[#BF00FF] opacity-100 bg-white hover:bg-[#BF00FF]
                  py-1  md:w-5/12 w-full "
              onClick={handleClick}
            >
              {" "}
              Back
            </button>
          </div>
        </div>
        <Footer />
      <Footer2/>
      </main>
    </>
  );
};

export default Existingsimnumber;
