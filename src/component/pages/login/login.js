import React from "react";
import { Tick, Facicon } from "../../icon";
import logo from "../../images/latest.png";
import Form from "./form";
// import data from "../../data/data";

function Login() {
  return (
    <div className="flex items-center justify-between h-[120vh] w-full bg-[#f9f9ff] px-[30px] py-[20px] font-[Raleway] max-[900px]:px-[20px] max-[900px]:gap-[20px] max-[500px]:flex-col max-[500px]:h-[170vh] max-[500px]:px-[10px] ">
      <img
        src={logo}
        alt=""
        className="h-[100px] w-[100px] absolute top-4 left-4"
      />

      <div className="w-[50%] backdrop-filter backdrop-blur-sm bg-opacity-70 bg-clip-padding bg-[#f9f9ff] relative z-50 p-[30px] max-[900px]:p-[0px] max-[900px]:mt-[0px] max-[500px]:w-[95%] max-[500px]:mt-[140px] max-[500px]:mb-[0px] max-[500px]:p-[30px] max-[500px]:rounded-xl">
        <Form></Form>
      </div>
      <div className="w-[50%]  h-full relative max-[500px]:h-[500px] max-[500px]:w-[100%] max-[500px]:mt-[-150px] ">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SE9URUx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="h-full w-full absolute z-10 rounded-[50px] max-[500px]:h-[450px] max-[500px]:rounded-[15px]"
        />
        <div className="flex flex-col gap-4  z-20 p-[20px] absolute bottom-[40px] max-[900px]:p-[10px] max-[500px]:relative max-[500px]:mt-[250px] max-[500px]:p-[10px]">
          <h1 className=" text-[30px] font-semibold text-[white] max-[500px]:text-[28px]">
            Let's get started with us...
          </h1>
          <p className="text-[25px] font-medium text-[white] max-[500px]:text-[18px]">
            Our practice is serving you the best experience that you ever had.
          </p>
          <div className="flex gap-5 mt-[10px]">
            <div className="h-[45px] flex items-center gap-2 justify-center w-[45%] border-[1.5px] rounded-full border-[white] border-solid max-[900px]:w-[50%]">
              <div className="mt-[2px]">
                <Tick h={22} w={22}></Tick>
              </div>
              <p className="text-[20px] font-medium text-[white] max-[500px]:text-[15px]">
                <span className="text-[25px] max-[500px]:text-[20px] ">
                  100
                </span>
                % Comfort
              </p>
            </div>
            <div className="h-[45px] flex items-center gap-2 justify-center w-[45%] border-[1.5px] rounded-full border-[white] border-solid max-[900px]:w-[50%]">
              <div className="mt-[2px]">
                <Facicon h={20} w={20}></Facicon>
              </div>
              <p className="text-[20px] font-medium text-[white] max-[500px]:text-[15px]">
                Free facilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
