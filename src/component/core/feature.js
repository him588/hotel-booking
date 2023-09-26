import React from "react";

function Feature({ icon, heading, msg }) {
  return (
    <div className="w-[100%]">
      {icon}
      <h1 className="text-[28px] font-semibold">{heading}</h1>
      <p className="text-[16px] font-medium">{msg}</p>
    </div>
  );
}
export default Feature;
