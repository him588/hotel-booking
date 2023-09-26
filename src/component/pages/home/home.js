import React from "react";
import logo from "../../images/latest.png";
import Form from "./form";
import {
  Amenicon,
  Calicon,
  Copyicon,
  Faceicon,
  Instaicon,
  Twiticon,
  Veriicon,
} from "../../icon";
import { Feature } from "../../core";
import { Link } from "react-router-dom";

function Home() {
  const msg1 =
    "Get 24/7 support and discover helpful review from our trusted community of guest.";
  const msg2 =
    "Explore stays based on the comforts you want for the perfect, dreamy getaway.";
  const msg3 =
    "Stays with flexible cancellation make it easy to rebook if your plans change.";
  return (
    <div className="p-[40px] font-[Raleway] bg-[#f9f9ff]">
      <div className="flex items-center justify-between">
        <img src={logo} alt="" className="h-[150px] w-[150px]" />
        <div className="flex gap-1 mt-[-15px] text-[18px]">
          <Link to={"login"}>
            {" "}
            <p className=" cursor-pointer">Login</p>
          </Link>

          <p>|</p>
          <p className=" cursor-pointer">Sign up</p>
        </div>
      </div>
      <Form></Form>
      <div className="flex mt-[80px] justify-between">
        <div className="w-[30%]">
          <Feature
            icon={<Veriicon h={30} w={30}></Veriicon>}
            heading={"Book with confidence"}
            msg={msg1}
          ></Feature>
        </div>
        <div className="w-[30%] mt-[60px]">
          <Feature
            icon={<Amenicon h={45} w={45}></Amenicon>}
            heading={"Find more amenities"}
            msg={msg2}
          ></Feature>
        </div>
        <div className=" w-[30%] mt-[130px]">
          <Feature
            icon={<Calicon h={30} w={30}></Calicon>}
            heading={"Keep it flexible"}
            msg={msg3}
          ></Feature>
        </div>
      </div>
      <div className="w-[100%] h-[.5px] bg-[grey] mt-[60px]"></div>
      <div className="w-full flex justify-between mt-[30px]">
        <div className="flex items-center text-[#bdbdbd]">
          <Copyicon h={25} w={25}></Copyicon>
          2023 Hostela, Inc
        </div>
        <div className="flex gap-3">
          <Faceicon h={30} w={30}></Faceicon>
          <Twiticon h={30} w={30}></Twiticon>
          <div className="mt-[-3.5px] ml-[-5px]">
            <Instaicon h={38} w={38}></Instaicon>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
