import React, { useState } from "react";
import { Down } from "../icon";

function Dropdown() {
  const arr = [1, 2, 3, 4, 5];
  const [show, setshow] = useState(false);
  function handleclick() {
    if (!show) {
      setshow(true);
    } else {
      setshow(false);
    }
  }
  return (
    <div
      className="flex items-center relative gap-[15px]  "
      onClick={handleclick}
    >
      <p className="cursor-pointer text-[18px] font-normal">0</p>
      <div
        className={`flex justify-center mt-[3px] items-center duration-500 transition-all ${
          show ? "rotate-180 " : "rotate-0"
        } `}
      >
        <Down h={22} w={22}></Down>
      </div>
      <div
        className={` absolute bg-[#FFFFFF] bg-opacity-90 flex items-center z-50 flex-col text-[16px] gap-1  rounded-lg   top-[34px] duration-500 left-[5px] transition-all overflow-hidden ${
          show ? "h-[150px] w-[60px] " : "h-0 w-[60px] "
        } `}
      >
        {arr.map((item, index) => {
          return (
            <p className="cursor-pointer" key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
