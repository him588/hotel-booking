import React, { useContext } from "react";

import { Star, Wish } from "../icon";
import Slider from "./imageslider";
import { detailscontext } from "../context";
import { useNavigate } from "react-router-dom";
import additem from "../helper/additem";

function Card({ details }) {
  const detail = useContext(detailscontext);
  const navigate = useNavigate();
  function handleclick() {
    detail.setdetail(details);
    navigate(`/hotel/${details.hotelname}`);
  }
  function handle_add(e) {
    e.stopPropagation();
    const users = JSON.parse(localStorage.getItem("user"));
    const current_user = JSON.parse(localStorage.getItem("currentuser"));
    additem(users, current_user, details);
  }

  return (
    <div
      className="flex h-[auto] w-[280px] flex-col font-[Raleway]  rounded-xl overflow-hidden cursor-pointer max-[900px]:w-[250px] max-[400px]:w-[300px]"
      onClick={handleclick}
    >
      <div className="h-[280px] w-[full] overflow-hidden relative">
        <Slider images={details.img}></Slider>
        <div
          onClick={handle_add}
          className="h-[40px] w-[40px] bg-[#535353]/50 absolute z-40 flex items-center justify-center top-1 right-1 rounded-full"
        >
          <Wish h={20} w={20} c={"#ffffff"}></Wish>
        </div>
      </div>
      <div className="flex justify-between items-center mt-1">
        <div>
          <p className=" font-semibold text-[18px] ">
            {details.address.city},India
          </p>
        </div>
        <div className="flex items-center mr-1 mt-[-10px] gap-[2px]">
          <Star h={17} w={17}></Star>
          <p className="font-medium font-[Poppins] text-[16px] ">
            {details.rating}.0
          </p>
        </div>
      </div>
      <p className="font-medium text-[16px] text-[#666666]">
        {details.Description}
      </p>
      <p className="   mt-3  text-[16px] font-[Raleway] font-medium">
        <span className="font-[Poppins] text-[18px] font-medium">
          ${details.BaseRate}
        </span>
        night
      </p>
    </div>
  );
}
export default Card;
