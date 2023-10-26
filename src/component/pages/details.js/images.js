import React, { useContext } from "react";
import { detailscontext } from "../../context";

export default function Images() {
  const details = useContext(detailscontext);
  return (
    <div className="grid grid-cols-4 grid-rows-2 h-[400px] gap-2 w-full rounded-xl overflow-hidden max-[400px]:hidden">
      <div className=" grid col-span-2 row-span-2 relative max-[400px]:col-span-3 ">
        <img
          src={details.detail.img[0]}
          alt=""
          className=" object-fill absolute bottom-0 top-0 w-full h-[400px]"
        />
      </div>
      <div className=" max-[400px]:hidden">
        <img src={details.detail.img[1]} alt="" className="h-[100%] w-[100%]" />
      </div>
      <div className=" max-[400px]:hidden">
        <img src={details.detail.img[2]} alt="" className="h-[100%] w-[100%]" />
      </div>
      <div className=" max-[400px]:hidden">
        <img src={details.detail.img[3]} alt="" className="h-[100%] w-[100%]" />
      </div>
      <div className=" max-[400px]:hidden">
        <img src={details.detail.img[4]} alt="" className="h-[100%] w-[100%]" />
      </div>
    </div>
  );
}
