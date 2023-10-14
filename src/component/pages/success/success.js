import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  return (
    <div className="h-[auto] w-[100%]  bg-[#f9f9ff] p-[40px] font-[Raleway] flex items-center flex-col px-[40px] py-[40px] max-[400px]:px-[20px] ">
      <h1 className=" text-[35px] font-medium max-[400px]:text-[30px]  max-[400px]:text-center ">
        You will enjoy our hotel with graditude
      </h1>
      <div className="mt-[40px] grid grid-cols-2 grid-rows-2 w-[100%] h-[800px] gap-y-[80px] max-[400px]:gap-y-[60px]  gap-x-[60px] max-[400px]:flex max-[400px]:flex-col max-[400px]:h-auto">
        <div className="w-[100%] h-[100%]">
          <img
            src="https://cdn.statically.io/img/templates.happyaddons.com/wp-content/uploads/2020/11/katlyn-giberson-185277-1200x900-1.jpg?quality=100&f=auto"
            alt=""
            className="h-[100%]  w-[100%] max-[400px]:rounded-md object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center gap-8 max-[400px]:items-center max-[400px]:gap-6">
          <h1 className="text-[30px] font-medium mt-[-10px] text-[#e96188]">
            Homely atmosphere
          </h1>
          <p className=" text-[18px] font-light">
            As your favourite hotel focused on lasting options to poverty, we
            turn profits into hope. We do this by creating a product you love,
            serving you with a smile, as well as offering all of our profits to
            individuals in need.
          </p>
          <button
            onClick={() => {
              navigate("/hotels");
            }}
            className="text-[18px] flex items-center justify-center rounded-3xl font-semibold bg-[#e96188] h-[40px] w-[100px] py-4 text-[white]"
          >
            Explore
          </button>
        </div>
        <div className=" flex flex-col justify-center gap-8 max-[400px]:items-center max-[400px]:gap-6">
          <h1 className="text-[30px] font-medium mt-[-10px] text-[#e96188]">
            Beautyfull places
          </h1>
          <p className=" text-[18px] font-light">
            As your favourite hotel focused on lasting options to poverty, we
            turn profits into hope. We do this by creating a product you love,
            serving you with a smile, as well as offering all of our profits to
            individuals in need.
          </p>
          <button
            onClick={() => {
              navigate("/hotels");
            }}
            className="text-[18px] flex items-center justify-center rounded-3xl font-semibold bg-[#e96188] h-[40px] w-[100px] py-4 text-[white]"
          >
            Explore
          </button>
        </div>
        <div className="w-[100%] h-[100%]">
          <img
            src="https://a0.muscache.com/im/pictures/1587524e-f8f5-4c20-8507-c809dffda998.jpg?im_w=960"
            alt=""
            className="h-[100%]  w-[100%] max-[400px]:rounded-md  object-cover"
          />
        </div>
      </div>
      <p className="mt-[60px] font-medium text-[18px] text-[#e96188] max-[400px]:text-[16px] max-[400px]:text-center ">
        Note : Payment link and conformation details has been send to your
        email.{" "}
      </p>
    </div>
  );
}
export default Success;
