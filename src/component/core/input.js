function Input({ field, input, setinput }) {
  function handlechange(e) {
    setinput(e.target.value);
  }
  return (
    <div className="w-[100%]">
      <p className="text-[16px] font-bold relative">
        {field}
        <span className="text-[35px] h-[40px] w-[40px] absolute text-[#f44c4c] mt-[-15px] leading-[-10px]">
          *
        </span>{" "}
      </p>
      <input
        type="text"
        className="w-[350px] h-[45px] border-[1.2px] border-solid border-[grey] rounded-full mt-[2px] ml-[-5px] outline-none px-5 text-[20px] font-medium placeholder:text-[16px] max-[900px]:w-[100%] "
        placeholder="Enter your name"
        value={input}
        onChange={handlechange}
      />
    </div>
  );
}
export default Input;
