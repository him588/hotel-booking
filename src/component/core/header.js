import React, { useState } from "react";
import img from "../images/latest.png";
import { Searchicon, Menu, Profile } from "../icon";
import Searchbar from "./searchbar";

function Header() {
  const [show, setshow] = useState(false);
  const weight = window.innerWidth;

  return (
    <div
      onClick={() => setshow(true)}
      className="py-[10px] px-[20px] flex items-center justify-between bg-[#f9f9ff] font-[Raleway] relative max-[400px]:px-[10px]"
    >
      <img
        src={img}
        alt=""
        className="h-[100px] w-[100px] max-[400px]:hidden"
      />

      {show ? (
        <p
          className="font-semibold underline underline-offset-8 text-[20px] cursor-pointer max-[400px]:hidden "
          onClick={(e) => {
            e.stopPropagation();
            setshow(false);
          }}
        >
          Stay
        </p>
      ) : (
        ""
      )}

      <div
        className={`w-[40%] justify-between gap-4 px-[10px] py-[5px] transition-all duration-300  h-[50px] shadow-lg border-[1px] flex items-center rounded-full box-border max-[400px]:w-[95%] max-[400px]:absolute max-[400px]:left-[2.5%] max-[400px]:top-[110px] max-[400px]:gap-[5px] max-[400px]:h-[45px] ${
          show
            ? " translate-y-[-100px] hidden"
            : "translate-y-[0px] max-[400px]:hidden"
        } `}
      >
        <p className="text-[16px] font-semibold cursor-pointer max-[]: ">
          Anywhere
        </p>
        <div className="h-[70%] w-[.5px] bg-[#a7a7a7]"></div>
        <p className="text-[16px] font-semibold cursor-pointer ">Select Date</p>
        <div className="h-[70%] w-[.5px] bg-[#a7a7a7]"></div>
        <p className="text-[16px] font-semibold cursor-pointer ">guests</p>
        <div className="h-[70%] w-[.5px] bg-[#a7a7a7]"></div>
        <div
          className="rounded-full h-[35px] cursor-pointer w-[35px] bg-[#F03D3A] flex items-center justify-center  "
          onClick={() => setshow(true)}
        >
          <Searchicon h={20} w={20}></Searchicon>
        </div>
      </div>

      <div className="shadow-lg h-[50px] flex items-center justify-between w-[90px] rounded-full border-[1px] p-[10px] box-border max-[400px]:shadow-none max-[400px]:top-[75px] max-[400px]:bg-none max-[400px]:border-none max-[400px]:absolute max-[400px]:right-[5px]  max-[400px]:w-auto ">
        <Menu h={28} w={28}></Menu>
        <Profile h={weight > 400 ? 28 : 0} w={weight > 400 ? 28 : 0}></Profile>
      </div>

      <Searchbar show={show} setshow={setshow}></Searchbar>
    </div>
  );
}

export default Header;
