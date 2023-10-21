import React from "react";
import img from "../../images/sorry.png";
import { Fotter } from "../../core";

function Nothing() {
  return (
    <div className=" flex flex-col items-center bg-[#f9f9ff] p-[20px] ">
      <h1 className=" font-[Raleway] text-center font-semibold text-[45px] mt-[0px] max-[400px]:text-[40px] max-[400px]:mt-[50px] ">
        Sorry for inconvenience
      </h1>
      <img
        src={img}
        alt=""
        className="h-[550px] w-[550px] block my-[-30px] max-[400px]:h-[400px] max-[400px]:w-[370px] max-[400px]:mt-[-20px]"
      />
      <Fotter></Fotter>
    </div>
  );
}
export default Nothing;
