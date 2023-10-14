import React from "react";

function Feature({ icon, heading, msg }) {
  return (
    <div className="w-[100%] flex flex-col max-[400px]:items-center max-[400px]:gap-2">
      {icon}
      <h1 className="text-[28px] font-semibold max-[400px]:text-center">
        {heading}
      </h1>
      <p className="text-[16px] font-medium max-[400px]:text-center">{msg}</p>
    </div>
  );
}
export default Feature;
