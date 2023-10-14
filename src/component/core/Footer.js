import React from "react";
import { Copyicon, Faceicon, Twiticon, Instaicon } from "../icon";

function Fotter() {
  return (
    <div className="w-full flex justify-between mt-[30px] bg-[#f9f9ff]">
      <div className="flex items-center text-[#bdbdbd]">
        <Copyicon h={25} w={25}></Copyicon>
        2023 Hostela, Inc
      </div>
      <div className="flex gap-3 max-[400px]:gap-1">
        <Faceicon h={30} w={30}></Faceicon>
        <Twiticon h={30} w={30}></Twiticon>
        <div className="mt-[-3.5px] ml-[-5px]">
          <Instaicon h={38} w={38}></Instaicon>
        </div>
      </div>
    </div>
  );
}
export default Fotter;
