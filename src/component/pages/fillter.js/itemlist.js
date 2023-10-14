import React from "react";
import { Card, Fotter } from "../../core";
import img from "../../images/sorry.png";
function Itemlist({ filitem }) {
  console.log(filitem);
  return (
    <div>
      {filitem.length === 0 ? (
        <div className=" flex flex-col items-center bg-[#f9f9ff] p-[20px] ">
          <h1 className=" font-[Raleway] text-center font-semibold text-[45px] mt-[-60px] max-[400px]:text-[40px] max-[400px]:mt-[-30px]">
            Sorry for inconvenience
          </h1>
          <img
            src={img}
            alt=""
            className="h-[550px] w-[550px] block my-[-30px] max-[400px]:h-[400px] max-[400px]:w-[370px] max-[400px]:mt-[-20px]"
          />
          <Fotter></Fotter>
        </div>
      ) : (
        <div className="p-[30px] w-full grid grid-cols-4 place-items-center gap-[20px] bg-[#f9f9ff] max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:p-[20px] max-[400px]:grid-cols-1 max-[400px]:mt-[-10px] ">
          {filitem.map((item, index) => {
            return <Card details={item} key={index}></Card>;
          })}
        </div>
      )}
    </div>
  );
}
export default Itemlist;
