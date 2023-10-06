import React from "react";
import Header from "../../core/header";
import data from "../../data/data";
import { Card } from "../../core";
function Listing() {
  return (
    <div className=" w-full bg-[#f9f9ff] overflow-hidden">
      <Header></Header>
      <div className="p-[30px] grid grid-cols-4 gap-[20px]">
        {data.map((item, index) => {
          return <Card details={item} key={index}></Card>;
        })}
      </div>
    </div>
  );
}
export default Listing;
