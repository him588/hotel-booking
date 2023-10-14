import React, { useContext } from "react";

import { Star, Wish } from "../icon";
import Slider from "./imageslider";
import { detailscontext } from "../context";
import { useNavigate } from "react-router-dom";

function Card({ details }) {
  // localStorage.clear();
  const current_user = localStorage.getItem("currentuser"); // CURRENT USER EMAIL WHICH WE SET IN AT TIME OF LOGIN//

  const detail = useContext(detailscontext);
  const navigate = useNavigate();

  function handleclick() {
    detail.setdetail(details);
    navigate(`/hotel/${details.hotelname}`);
  }
  function handle_add(e) {
    e.stopPropagation();
    const users = JSON.parse(localStorage.getItem("user")); //THIS IS OUR ALL USER THAT'S IN LOCALSTORAGE//

    const user_details = users.find((person) => {
      if (person.email === current_user) {
        return true;
      } else {
        return false;
      }
    });
    const index = users.findIndex((user) => user.email === user_details.email); // WE USE INDEX FOR SPLICE NEW USER DETAILS//

    const is_containes = user_details.wishlist.some(
      (item) => item.hotelid === details.hotelid
    );

    // HERE WE DO OUR MAIN WORK TO UPDATE OUR AND RESET IN LOCALSTORAGE //
    if (is_containes) {
      alert("Item already in your wishlist");
    } else {
      user_details.wishlist.push(details);
      console.log(user_details);

      users.splice(index, 1, user_details);
      localStorage.setItem("user", JSON.stringify(users));
    }
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
          <Wish h={20} w={20}></Wish>
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
