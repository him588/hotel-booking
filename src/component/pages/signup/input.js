import React from "react";

function Input({ name, input, setinput, check_input, error }) {
  return (
    <div>
      <p className="text-[16px] font-bold relative">
        {name}
        <span className="text-[35px] h-[40px] w-[40px] absolute text-[#f44c4c] mt-[-15px] leading-[-10px]">
          *
        </span>{" "}
      </p>
      <input
        type="text"
        className="w-[350px] h-[45px] border-[1.2px] border-solid border-[grey] rounded-full mt-[2px] ml-[-5px] outline-none px-5 text-[20px] font-medium placeholder:text-[16px] max-[500px]:w-[100%] "
        placeholder="Enter your name"
        onBlur={check_input}
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <p className={`text-[14px] text-[red] ${error ? "block" : " hidden"} `}>
        Please Enter correct name
      </p>
    </div>
  );
}
export default Input;
