import React, { useState } from "react";
import { Searchicon } from "../icon";
import data from "../data/data";
import { filter, makecapital } from "../helper/filter";
import { useNavigate } from "react-router-dom";

function Searchbar({ show, setshow }) {
  const [input, setinput] = useState("");
  const navigate = useNavigate();

  function handle_click() {
    if (input !== "") {
      const value = makecapital(input);
      const search = filter(data, value);
      setinput("");
      setshow(false);
      navigate(`/hotels/${value}`);
    }
  }

  return (
    <div
      className={`absolute w-[70%] z-50 bg-[#f9f9ff] duration-300 z transition-all left-[15%] justify-between   gap-4 px-[20px] py-[20px] h-[90px] shadow-lg border-[1px] mt-[150px] flex items-center rounded-full box-border max-[400px]:w-[96%] max-[400px]:left-[2.5%] max-[400px]:gap-[0px]  max-[400px]:h-[55px] max-[400px]:px-[10px] max-[400px]:mt-[0] max-[400px]:top-[25px]  ${
        show
          ? "translate-y-[ 0px]"
          : "translate-y-[-200px] max-[400px]:translate-y-[-12px]"
      } `}
    >
      <div>
        <p className="text-[16px] font-semibold max-[400px]:hidden">Where</p>
        <input
          type="text"
          className=" outline-none font-medium bg-transparent"
          placeholder="Location ..."
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
      </div>
      <div className="h-[70%] w-[.5px] bg-[#a7a7a7] max-[400px]:hidden"></div>
      <div className=" max-[400px]:hidden">
        <p className="text-[16px] font-semibold">Check in</p>
        <p className="text-[15px] cursor-pointer font-normal text-[grey]">
          Add dates
        </p>
      </div>
      <div className="h-[70%] w-[.5px] bg-[#a7a7a7] max-[400px]:hidden "></div>
      <div className=" max-[400px]:hidden">
        <p className="text-[16px] font-semibold">Check out</p>
        <p className="text-[15px] cursor-pointer font-normal text-[grey]">
          Add dates
        </p>
      </div>
      <div className="h-[70%] w-[.5px] bg-[#a7a7a7] max-[400px]:hidden"></div>
      <div className=" max-[400px]:hidden">
        <p className="text-[16px] font-semibold">Who</p>
        <p className="text-[15px] cursor-pointer">2 guests</p>
      </div>
      <button
        className="flex gap-2 items-center outline-none px-[30px] rounded-full text-[16px] text-[white]  font-medium bg-[#F03D3A] h-full max-[400px]:px-[15px] max-[400px]:text-[14px] max-[400px]:h-[40px] "
        onClick={handle_click}
      >
        <Searchicon h={18} w={18}></Searchicon>
        Search
      </button>
    </div>
  );
}
export default Searchbar;
