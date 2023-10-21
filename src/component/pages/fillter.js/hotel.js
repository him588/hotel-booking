import React, { useEffect, useState } from "react";
import Header from "../../core/header";
import { Card, Filter } from "../../core";
import { useParams } from "react-router-dom";
import { filter } from "../../helper/filter";
import Itemlist from "./itemlist";
import Nothing from "./nothing";

function Fillter() {
  let { location } = useParams();
  const [items, setitems] = useState([]);
  const [filitem, setfilitem] = useState(true);
  useEffect(() => {
    setitems(filter(JSON.parse(localStorage.getItem("data")), location));
  }, [location]);

  return (
    <div className="w-[100%] bg-[#f9f9ff] min-h-screen ">
      <Header></Header>
      {items.length !== 0 ? (
        <div className="w-full">
          <Filter
            setfilitem={setfilitem}
            items={items}
            filitem={filitem}
          ></Filter>
          {filitem === true ? (
            <div className="p-[30px] w-full grid grid-cols-4 place-items-center gap-[20px] bg-[#f9f9ff] max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:p-[20px] max-[400px]:grid-cols-1 max-[400px]:mt-[-10px] ">
              {items.map((item, index) => {
                return <Card details={item} key={index}></Card>;
              })}
            </div>
          ) : (
            <Itemlist filitem={filitem}></Itemlist>
          )}
        </div>
      ) : (
        <Nothing></Nothing>
      )}
    </div>
  );
}
export default Fillter;
