import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Luldata } from "../Services/Lullnumberjson";
import { Stunderddata } from "../Services/Standerdnumberjson";
import { Xarriidata } from "../Services/Xariinumberjson";
import { useNavigate } from "react-router-dom";

const Searchnmber = () => {
  const navigate = useNavigate();
  const combineArray = [...Luldata, ...Stunderddata, ...Xarriidata];
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({
    phoneNbr: "",
  });
  const [foundNumber, setFoundNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.length <= 12) {
      setError("");
    }

    if (name === "phoneNbr") {
      if (value.length <= 12) {
        setPhoneNumber((pre) => ({
          ...pre,
          [name]: value,
        }));
      } else {
        setError("Number should not exceed 12 digits");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = combineArray.find(
      (item) => item.number === phoneNumber.phoneNbr
    );

    if (found) {
      setFoundNumber(found);
    } else {
      setFoundNumber("");
      setError("Number not Available");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <main className="mt-32">
      <h1 className="text-[#c054d4] text-[24px] font-bold text-center">
        Apne Liye Yahan Koi Bhi Number Chunte Hain!
      </h1>
      <p className="text-[#8492a6] text-[18px] text-center mr-[20%] ml-[20%] mt-[1%]">
        Soltelco aap ke liye pehli martaba Somaliland mein aik aisa option laya
        hai jahan aap apne pasand ke mutabiq VIP ya Standard Number chun sakte
        hain.
      </p>

      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="search"
            className="mt-10 block text-[16px]  font-medium text-[#C054D4] "
          >
            Search your number here
          </label>
          <div className="bg-[#C054D4] rounded-full  lg:h-8 lg:w-[20rem] flex items-center pl-6">
            <input
              type="number"
              id="number"
              name="phoneNbr"
              onChange={handleChange}
              value={phoneNumber.phoneNbr}
              className=" py-1 bg-[#C054D4] outline-none border-none text-sm rounded-md"
              placeholder="25267xxx"
              required
            />
            <button type="submit" className="ml-1 text-white">
              <FaSearch />
            </button>
          </div>
          <p className="text-red-600 text-[12px] mt-2">{error}</p>
          {foundNumber && (
            <div className="mt-5">
              <p>
                <span className="text-[#BF00FF] text-[24px]">
                  {" "}
                  Number Available:{" "}
                </span>{" "}
                {foundNumber.number}
              </p>
              <p>
                <span className="text-[#BF00FF] text-[24px]"> Price: </span>{" "}
                {foundNumber.price}
              </p>
              <button
                className="bg-[#BF00FF] text-white w-3/12 py-2 rounded-md text-[16px]"
                onClick={() => {
                  navigate("/mainform");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {foundNumber.buttonName}
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Searchnmber;
