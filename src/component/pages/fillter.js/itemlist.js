import React from "react";
import { Card } from "../../core";

import Nothing from "./nothing";
function Itemlist({ filitem }) {
  console.log(filitem);
  return (
    <div>
      {filitem.length === 0 ? (
        <Nothing></Nothing>
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
