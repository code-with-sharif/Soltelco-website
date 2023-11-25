import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiPhoneCallThin } from "react-icons/pi";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import footerimg from "../../Images/footerimg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  const handleSubscribe = () => {
    if (email) {
      if (subscribedEmails.includes(email)) {
        setMessage("You already subscribed, thanks!");
      } else {
        setSubscribedEmails([...subscribedEmails, email]);
        setMessage("Subscribe Successful!");
      }
      setEmail("");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setMessage("Please enter an email address.");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className="">
        <div className="w-full  pb-5  bg-[#673C95] mt-10  flex md:flex-row flex-col md:flex-nowrap flex-wrap flex-shrink   ">
          <div className="lg:ml-[5rem] ml-0 pt-2 px-4 text-justify  lg:w-6/12 w-full  ">
            <img className="text-whitecolor w-32 h-24" src={footerimg} alt="" />
            <p className="text-whitecolor text-subheadingfont ">
              Soltelco is the first Telecommunications Company in Somaliland and
              revived up now to provide innovative, reliable, and affordable
              telecommunication services.
            </p>

            <div className="ml-2 pt-4 place-items-baseline text-whitecolor text-textfont flex space-x-1">
              <span className="font-extrabold">
                <MdOutlineLocationOn />
              </span>
              <span>
                Timo Cadde Road, 26 June District 252 Hargesia, Somaliland
              </span>
            </div>

            <div className="ml-2 pt-1 place-items-baseline text-whitecolor text-textfont flex space-x-1">
              <span className="font-extrabold">
                <PiPhoneCallThin />
              </span>
              <span> Call Center: 161</span>
            </div>

            <div className="ml-2 pt-1  place-items-baseline text-whitecolor text-textfont flex space-x-1">
              <span className="font-extrabold">
                <SiWhatsapp />
              </span>
              <span> +252 67 0000000</span>
            </div>

            <div className="ml-2 pt-1 place-items-baseline text-whitecolor text-textfont break-all flex space-x-1">
              <span className="font-extrabold">
                <MdEmail />
              </span>
              <span> info@soltelconetwork.com</span>
            </div>

            <div class="mt-2 ml-3 flex extrasmalldevice gap-1 ">
              <span class="w-5 h-7 bg-white text-Darkviolet hover:bg-Darkviolet hover:text-whitecolor rounded-md flex justify-center items-center">
                <ImFacebook />
              </span>

              <span class="w-7 h-7 bg-white text-Darkviolet hover:bg-Darkviolet hover:text-whitecolor rounded-md flex justify-center items-center">
                <FiInstagram />
              </span>
              <span class="w-7 h-7 bg-white text-Darkviolet hover:bg-Darkviolet hover:text-whitecolor rounded-md flex justify-center items-center">
                <FaTwitter />
              </span>

              <span class="w-7 h-7 bg-white text-Darkviolet hover:bg-Darkviolet hover:text-whitecolor rounded-md flex justify-center items-center">
                <ImLinkedin2 />
              </span>

              <span class="w-7 h-7 bg-white text-Darkviolet hover:bg-Darkviolet hover:text-whitecolor rounded-md flex justify-center items-center">
                <FaTiktok />
              </span>
            </div>
          </div>

          {/* help link */}

          <div className="lg:mt-24 mt-10 pl-4  lg:w-5/12  w-full ">
            <p className=" text-whitecolor text-headingfont">Help Section</p>
            <div className="flex text-whitecolor hover:text-deepfuchsia mt-4 items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/find" onClick={scrollToTop}>
                <button className="text-[16px] cursor-pointer ">Find Us</button>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/contact" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">Contact Us</span>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/faqs" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">FAQs</span>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <span
                className="text-[16px] cursor-pointer"
                onClick={scrollToTop}
              >
                My Soltelco
              </span>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/career" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">Careers</span>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/blogs" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">Blogs</span>
              </Link>
            </div>
          </div>

          {/* quick links */}

          <div className="lg:mt-24 mt-10    pl-4  lg:w-5/12  w-full ">
            <p className=" text-whitecolor text-headingfont">Quick links</p>
            <div className="flex text-whitecolor hover:text-deepfuchsia mt-5 items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/esimprovisioning" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">
                  eSIM Provisioning
                </span>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/choosenumber" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">
                  Choose Your Number
                </span>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/kurtugul" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">MiFi</span>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/Kaashplus" onClick={scrollToTop}>
                <span className="text-[16px]  cursor-pointer">KAASHPlus</span>
              </Link>
            </div>

            <div className="flex text-whitecolor hover:text-deepfuchsia  items-baseline gap-1">
              <span className="text-[10px]">
                <FaGreaterThan />
              </span>
              <Link to="/databundle" onClick={scrollToTop}>
                <span className="text-[16px] cursor-pointer">
                  Data&Voice bundles
                </span>
              </Link>
            </div>
          </div>
          {/* news links */}

          <div className="lg:mt-24 mt-10  sm:pl-3 pl-4   w-full  ">
            <h1 className="text-whitecolor text-headingfont">Newsletter</h1>
            <p className="text-whitecolor text-[16px] my-5 pr-3 ">
              Sign up and receive the latest tips via email
            </p>

            <div class="mb-6 flex flex-col flex-wrap pr-5">
              <div>
                <label
                  for="email"
                  class="block text-start text-whitecolor text-[24px] font-bold"
                >
                  Write Your email
                </label>
                <input
                  type="email"
                  id="email-address-icon"
                  name="email"
                 
                  className="lg:w-8/12 w-32  pl-2 input text-Darkviolet text-base rounded-lg"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="mt-1 text-white bg-Darkviolet font-medium rounded-lg 
                  text-sm w- py-1 lg:w-8/12 w-32 text-center"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
                <p className=" text-whitecolor">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
