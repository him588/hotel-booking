import React, { useEffect, useState } from "react";
import Header from "../../core/header";
import { Card, Filter } from "../../core";
import data from "../../data/data";
import { useParams } from "react-router-dom";
import { filter } from "../../helper/filter";

function Fillter() {
  let { location } = useParams();
  const [items, setitems] = useState([]);
  useEffect(() => {
    setitems(filter(data, location));
  }, [location]);

  return (
    <div className="w-[100%] bg-[#f9f9ff] ">
      <Header></Header>
      <Filter></Filter>
      <div className="p-[30px] w-full grid grid-cols-4 place-items-center gap-[20px] bg-[#f9f9ff] max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:p-[20px] max-[400px]:grid-cols-1 max-[400px]:mt-[-10px] ">
        {items.map((item, index) => {
          return <Card details={item} key={index}></Card>;
        })}
      </div>
    </div>
  );
}
export default Fillter;
