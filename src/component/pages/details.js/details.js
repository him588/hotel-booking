import React, { useContext } from "react";
import { detailscontext } from "../../context";

import { Fotter, Slider } from "../../core";
import img from "../../images/latest.png";
import Form from "./form";
import Images from "./images";
import Ownerinfo from "./ownerinfo";
import Map from "./map";
import { useNavigate } from "react-router-dom";

function Deatils() {
  const details = useContext(detailscontext);
  const navigate = useNavigate();

  return (
    <div className="w-full  bg-[#f9f9ff] font-[Lato] px-[40px] pb-[30px] max-[400px]:px-[20px]">
      <img
        src={img}
        alt=""
        className="h-[110px] w-[110px] cursor-pointer"
        onClick={() => navigate("/hotels")}
      />

      <h1 className="text-[35px] font-medium py-4 max-[400px]:text-[25px]">
        {details.detail.hotelname}
      </h1>
      <div className=" h-[400px] w-full rounded-xl overflow-hidden min-[400px]:hidden">
        <Slider images={details.detail.img}></Slider>
      </div>
      <Images></Images>
      <div className="flex gap-3 relative max-[400px]:flex-col">
        <div className="py-[20px] w-[70%] font-medium max-[400px]:w-full  ">
          <p className="text-[25px] font-medium max-[400px]:text-[25px]">
            Room in {details.detail.address.city},
            {details.detail.address.country}
          </p>
          <p className="text-[18px] font-medium">
            {details.detail.Description}
          </p>

          <div className="w-[100%] h-[.5px] mt-[30px] bg-gray-300"></div>
          <Ownerinfo></Ownerinfo>
        </div>
        <div className="w-[30%] sticky top-0  h-[390px]  bg-[#f9f9ff]  shadow-xl mt-[30px] border-[1px] border-solid border-grey rounded-xl p-3 max-[400px]:w-full max-[400px]:mt-[-15px] max-[400px]:bg-[#f9f9ff]">
          <Form price={details.detail.BaseRate}></Form>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-300 "></div>
      <Map></Map>
      <Fotter></Fotter>
    </div>
  );
}
export default Deatils;
