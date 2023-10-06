import React, { useContext } from "react";
import { detailscontext } from "../../context";
import { Header } from "../../core";
import { Star } from "../../icon";
import Form from "./form";

function Deatils() {
  const details = useContext(detailscontext);
  console.log(details.detail);
  return (
    <div className="w-full bg-[#f9f9ff] font-[Raleway] p-[20px]">
      <Header></Header>

      <h1 className="text-[35px] font-semibold py-4">
        {details.detail.hotelname}
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 h-[400px] gap-2 w-full rounded-xl overflow-hidden ">
        <div className=" grid col-span-2 row-span-2 relative ">
          <img
            src={details.detail.img[0]}
            alt=""
            className=" object-fill absolute bottom-0 top-0 w-full h-[400px]"
          />
        </div>
        <div>
          <img
            src={details.detail.img[1]}
            alt=""
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <img
            src={details.detail.img[2]}
            alt=""
            className="h-[100%] w-[100%]"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="py-[20px] w-[70%] font-medium  ">
          <p className="text-[25px] font-semibold">
            Room in {details.detail.address.city},
            {details.detail.address.country}
          </p>
          <p className="text-[20px] font-medium">
            {details.detail.Description}
          </p>
          <div className="flex items-center gap-1">
            <p className=" text-[20px] mt-[-4px]">{details.detail.rating}</p>

            <Star h={20} w={20}></Star>
          </div>
          <div className="w-[100%] h-[.5px] mt-[30px] bg-[grey]"></div>
        </div>
        <div className="w-[30%] h-[200px] bg-[white] mt-[30px] rounded-xl p-3">
          <Form price={details.detail.BaseRate}></Form>
        </div>
      </div>
    </div>
  );
}
export default Deatils;