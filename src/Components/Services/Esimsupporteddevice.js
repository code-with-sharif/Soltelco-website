import React, { Fragment } from "react";
import feature from "../Services/Esimsuport1.json";
import sumsung from "../Services/Esimsuport2.json";
import Footer from "../Header/Footer";
import Footer2 from "../Header/Footer2";
const Esimsupporteddevice = () => {
  return (
    <>
      <h1 className=" mt-32 sm:px-0 px-5 text-center text-[2rem] mb-[2rem] font-semibold font  text-[#bf00ff]">
        eSIM Supported devices
      </h1>
      <main className="mt- w-[80%] mx-auto ">
        <div className="  flex sm:flex-row flex-col  justify-center  ">
          <section className="lg:w-[50%] w-full  ">
              <ul>
            {feature.map((item, index) => (
                <Fragment key={index}>
                {item.title && (
                    <li className="list-none text-[#bf00ff] font-semibold text-[1.5rem]">
                      {item.title}
                    </li>
                  )}
                  {item.name && (
                    <li className="pl-5 list-disc mt-0 list-inside">{item.name}</li>
                  )}
                </Fragment>
            ))}
              </ul>
          </section>
          {/* setion 2  */}
          <section className="lg:w-[50%] w-full">
            
            <ul className="lg:pl-5">
            {sumsung.map((item, index) => (
                <Fragment key={index}>
                {item.title && (
                    <li className="list-none  text-[#bf00ff] font-semibold text-[1.5rem]">
                      {item.title}
                    </li>
                  )}
                  {item.name && (
                    <li className="pl-5 list-disc mt-0 list-inside">{item.name}</li>
                  )}
                </Fragment>
            ))}
            </ul>
          </section>
        </div>

      </main>
      <Footer />
      <Footer2 />
    </>
  );
};

export default Esimsupporteddevice;
