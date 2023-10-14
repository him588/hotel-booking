import React from "react";
import { Dropdown } from "../../core";
import { useNavigate } from "react-router-dom";

function Mainform() {
  const loginstatus = localStorage.getItem("loginstatus");

  console.log(loginstatus);
  const navigate = useNavigate();
  function handlesubmit() {
    if (loginstatus === "true") {
      navigate("/hotels");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="w-full h-auto mt-7 ">
      <input
        type="text"
        className="h-[45px] w-full  border-[1.3px] border-solid border-[grey] outline-none rounded-md text-[22px] px-2 "
        placeholder="Anywhere in India"
      />
      <div className="flex w-full h-[60px] items-center justify-between mt-4 border-[1px] border-solid max-[400px]:bg-white border-[grey] px-1 rounded-lg ">
        <div>
          <p className="text-[16px] font-medium">CheckIn</p>
          <p className="text-[14px] cursor-pointer">Add Date</p>
        </div>
        <div className="h-[90%] w-[1px] bg-black"></div>
        <div className="flex flex-col items-center">
          <p className="text-[16px] font-medium">CheckOut</p>
          <p className="text-[14px] cursor-pointer">Add Date</p>
        </div>
      </div>
      <div className="flex w-full h-[60px] items-center justify-between mt-4 border-[1px] border-solid border-[grey] px-1 rounded-lg max-[400px]:bg-white ">
        <div>
          <p className="text-[16px] font-medium">Adult</p>
          <Dropdown></Dropdown>
        </div>
        <div className="h-[90%] w-[1px] bg-black"></div>
        <div className="flex flex-col items-center">
          <p className="text-[16px] font-medium">Children</p>
          <Dropdown></Dropdown>
        </div>
      </div>
      <button
        onClick={handlesubmit}
        className="h-[50px] w-full bg-[#F33F3A] py-[10px] mt-3 rounded-lg text-[white] font-medium text-[20px]"
      >
        Submit
      </button>
    </div>
  );
}
export default Mainform;
