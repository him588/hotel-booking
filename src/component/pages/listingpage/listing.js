import React from "react";
import Header from "../../core/header";
import data from "../../data/data";
import { Card } from "../../core";
function Listing() {
  return (
    <div className=" w-full bg-[#f9f9ff] overflow-hidden">
      <Header></Header>
      <div className="p-[30px] w-full grid grid-cols-4 place-items-center gap-[20px] bg-[#f9f9ff] max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:p-[20px] max-[400px]:grid-cols-1 max-[400px]:mt-[90px]">
        {data.map((item, index) => {
          return <Card details={item} key={index}></Card>;
        })}
      </div>
    </div>
  );
}
export default Listing;
