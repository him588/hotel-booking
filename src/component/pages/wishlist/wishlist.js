import React from "react";

import { Header, Card, Fotter } from "../../core";

function Wishlist() {
  const data = JSON.parse(localStorage.getItem("currentuser"));
  const items = data.wishlist;

  return (
    <div className=" w-full min-h-screen bg-[#f9f9ff] overflow-hidden">
      <Header></Header>

      <div className="p-[30px] w-full grid grid-cols-4 place-items-center gap-[20px] bg-[#f9f9ff] max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:p-[20px] max-[400px]:grid-cols-1 max-[400px]:mt-[90px]">
        {items.map((item, index) => {
          return <Card details={item} key={index}></Card>;
        })}
      </div>
      <div className=" px-[20px]">
        <Fotter></Fotter>
      </div>
    </div>
    // <footer></footer>
  );
}
export default Wishlist;
