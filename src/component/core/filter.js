import React, { useState } from "react";
import { Filtericon } from "../icon";

function Filter() {
  const [show, setshow] = useState(false);
  return (
    <div className="p-[25px] w-full font-[Raleway]">
      <div
        onClick={() => setshow(true)}
        className=" h-[45px] cursor-pointer  text-[16px] font-semibold flex items-center justify-center gap-1 w-[100px] shadow-lg  border-solid rounded-lg border-[#a7a7a7] max-[400px]:mt-[30px] max-[400px]:p-[10px] max-[400px]:ml-[-10px] "
      >
        <Filtericon h={20} w={20}></Filtericon>
        Filters
      </div>

      <div
        className={`h-[500px] max-[400px]:h-[400px] w-[500px] max-[400px]:w-[320px] left-[-2px] top-[160px] max-[400px]:top-[88px] bg-[#f9ffff]  rounded-r-md absolute  z-50 transition-all duration-500 ${
          show ? "translate-x-[0]" : "translate-x-[-100%]"
        }   `}
      ></div>
    </div>
  );
}
export default Filter;
