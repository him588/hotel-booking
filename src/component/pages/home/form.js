import React from "react";
import Mainform from "./mainform";

function Form() {
  return (
    <div className="flex items-center gap-[-10px] mt-6 font-[Raleway] max-[400px]:relative">
      <div className="h-[400px] w-[400px] bg-[white] relative z-20 mr-[-40px] rounded-md p-[20px] max-[400px]:relative max-[400px]:w-full max-[400px]:h-auto max-[400px]:backdrop-filter max-[400px]:backdrop-blur-sm max-[400px]:bg-opacity-20 max-[400px]:bg-clip-padding ">
        <h1 className="text-[25px] font-medium">
          Find hotel and rooms in India
        </h1>
        <p>Our Room can be a best place art studio.</p>
        {/* HERE IS OUR FORM */}
        <Mainform></Mainform>
      </div>
      <div className="h-[450px] w-[76%] bg-slate-600 rounded-lg overflow-hidden max-[400px]:w-[102%] max-[400px]:absolute max-[400px]:right-0 max-[400px]:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="h-[100%] w-[100%]"
        />
      </div>
    </div>
  );
}
export default Form;
