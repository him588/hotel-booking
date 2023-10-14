import React from "react";
import logo from "../../images/latest.png";
import Form from "./form";
import { Amenicon, Calicon, Veriicon } from "../../icon";
import { Feature, Fotter } from "../../core";
import { Link } from "react-router-dom";

function Home() {
  const msg1 =
    "Get 24/7 support and discover helpful review from our trusted community of guest.";
  const msg2 =
    "Explore stays based on the comforts you want for the perfect, dreamy getaway.";
  const msg3 =
    "Stays with flexible cancellation make it easy to rebook if your plans change.";
  return (
    <div className="p-[40px] font-[Raleway] bg-[#f9f9ff] max-[400px]:p-[10px]">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt=""
          className="h-[150px] w-[150px] max-[400px]:w-[100px] max-[400px]:h-[100px]"
        />
        <div className="flex gap-1 mt-[-15px] text-[18px]">
          <Link to={"login"}>
            {" "}
            <p className=" cursor-pointer">Login</p>
          </Link>

          <p>|</p>
          <Link to={"Signup"}>
            <p className=" cursor-pointer">Sign up</p>
          </Link>
        </div>
      </div>
      <Form></Form>
      <div className="flex mt-[80px] justify-between max-[400px]:flex-col">
        <div className="w-[30%] max-[400px]:w-[100%]">
          <Feature
            icon={<Veriicon h={30} w={30}></Veriicon>}
            heading={"Book with confidence"}
            msg={msg1}
          ></Feature>
        </div>
        <div className="w-[30%] max-[400px]:w-[100%] mt-[60px] max-[400px]:mt-[40px]">
          <Feature
            icon={<Amenicon h={35} w={35}></Amenicon>}
            heading={"Find more amenities"}
            msg={msg2}
          ></Feature>
        </div>
        <div className=" w-[30%] mt-[130px] max-[400px]:w-[100%]  max-[400px]:mt-[40px]">
          <Feature
            icon={<Calicon h={30} w={30}></Calicon>}
            heading={"Keep it flexible"}
            msg={msg3}
          ></Feature>
        </div>
      </div>
      <div className="w-[100%] h-[.5px] bg-[grey] mt-[60px]"></div>
      <Fotter></Fotter>
    </div>
  );
}
export default Home;
