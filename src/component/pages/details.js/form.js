import React from "react";

function Form({ price }) {
  return (
    <div className="w-full h-auto font-[Raleway]  ">
      <p className=" text-[23px] font-normal">
        <span className="font-[Raleway] text-[25px] font-semibold">
          ${price}
        </span>
        /night
      </p>
      <div className="flex w-full h-[60px] items-center justify-between mt-4 border-[1px] border-solid border-[grey] px-1 rounded-lg ">
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

      <button className="h-[50px] w-full bg-[#F33F3A] py-[10px] mt-3 rounded-lg text-[white] font-medium text-[20px]">
        Reserve
      </button>
    </div>
  );
}
export default Form;
