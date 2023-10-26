import React from "react";

import { CiMedal, CiLocationOn } from "react-icons/ci";
import { IoCalendarClearOutline, IoWifiOutline } from "react-icons/io5";
import { GiMountainCave, GiValley } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { FaSmoking } from "react-icons/fa";
import { MdSmokeFree } from "react-icons/md";

// import FontAwesomeIcon

export default function Ownerinfo() {
  return (
    <div className=" font-[Lato] mt-4 flex flex-col gap-11">
      <div className=" flex items-center gap-4">
        <CiMedal className=" text-4xl" />
        <div>
          <p className=" text-[18px]  font-medium">Mathew is a superhost</p>
          <p className=" text-[14px] text-gray-400">
            Super hosts are experienced and highly rated
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <CiLocationOn className=" text-4xl" />
        <div>
          <p className=" text-[18px] font-medium">Great location</p>
          <p className=" text-[14px] text-gray-400">
            95% of recent guests gave the location a 5-star rating.
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <IoCalendarClearOutline className=" text-3xl" />
        <div>
          <p className=" text-[18px] font-medium">
            Free cancellation for 48 hours
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div>
        <p className=" text-lg">
          Enjoy the lovely dreamlike Magical setting of this romantic spot in
          nature with the most beautiful view and waterfalls in Kodaikanal.
          Situated in Poombarai village ,TeHyCa is home to unique stays such as
          this Smart Pod & other types of Cabins!
        </p>
        <p className=" text-lg mt-4">
          The Smart Pod comes with a giant glass panel in front and it benefits
          immensely from the magnificence of the infinity view it's facing!! The
          smart features it boasts takes convenience to a higher pedestal with
          voice controls for lights, music , exaust etc.The Smart Pod comes
          equipped with a firepit .With smaller dimensions ,the Smart pod offers
          a cosy stay for two people . The Smart Pod comes with a detached
          private garden restroom with separate shower room & lavatory room ,
          couple washbasin ,all facing a spectacular view!
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div className=" flex flex-col gap-4">
        <h1 className=" text-[30px] font-medium">What this place offers</h1>
        <div className=" grid grid-cols-2 grid-rows-4 gap-y-8">
          <div className=" flex items-center gap-2 ">
            <GiMountainCave className=" text-4xl" />
            <p className=" text-[18px]">Mountainview</p>
          </div>
          <div className=" flex items-center gap-2 ">
            <IoWifiOutline className=" text-4xl" />
            <p className=" text-[18px]">Free wifi</p>
          </div>
          <div className=" flex items-center gap-2 ">
            <GiValley className=" text-4xl text-black" />
            <p className=" text-[18px]">Valley view</p>
          </div>
          <div className=" flex items-center gap-2 ">
            <BsFire className=" text-3xl" />
            <p className=" text-[18px]">Fire pit</p>
          </div>
          <div className=" flex items-center gap-2 ">
            <FaSmoking className=" text-2xl" />
            <p className=" text-[18px]">Smoking allowed</p>
          </div>
          <div className=" flex items-center gap-2 ">
            <MdSmokeFree className=" text-2xl" />
            <p className=" text-[18px]">Smoke alarm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
