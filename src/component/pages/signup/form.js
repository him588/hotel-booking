import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function Form() {
  const [input, setinput] = useState([]);
  const [error, seterror] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setinput(Array.from(document.querySelectorAll("input")));
    seterror(Array.from(document.querySelectorAll(".error")));
  }, []);
  const email = [];
  if (localStorage.getItem("user") === null) {
    localStorage.setItem("user", JSON.stringify([]));
  }
  let user = JSON.parse(localStorage.getItem("user"));

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  function checkname() {
    if (input[0].value.length > 3) {
      error[0].classList.remove("error_show");
    }
  }
  function checkemail() {
    if (emailRegex.test(input[1].value)) {
      error[1].classList.remove("error_show");
    }
  }
  function checkpass() {
    if (input[2].value.length > 6) {
      error[2].classList.remove("error_show");
    }
  }

  function adduser() {
    if (input[0].value.length > 3) {
    } else {
      error[0].classList.add("error_show");
      return;
    }
    if (emailRegex.test(input[1].value)) {
    } else {
      error[1].classList.add("error_show");
      return;
    }
    if (input[2].value.length > 6) {
    } else {
      error[2].classList.add("error_show");
      return;
    }
    for (let i = 0; i < user.length; i++) {
      email.push(user[i].email);
    }

    if (email.includes(input[1].value)) {
      alert("this email is already registered");
      return;
    } else {
      let signup = {
        name: input[0].value,
        email: input[1].value,
        password: input[2].value,
      };
      user = [...user, signup];
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    }
  }
  return (
    <div className="font-[Raleway] w-[full]">
      <h1 className="text-[35px] font-bold max-[500px]:text-[28px]">
        Create your account
      </h1>
      <p className="text-[20px]  text-[#929191] max-[500px]:text-[16px]">
        Lets get started to enjoy your journey
      </p>
      <div className="mt-[30px] flex flex-col items-start gap-4">
        <div>
          <p className="text-[16px] font-bold relative">
            Name
            <span className="text-[35px] h-[40px] w-[40px] absolute text-[#f44c4c] mt-[-15px] leading-[-10px]">
              *
            </span>{" "}
          </p>
          <input
            type="text"
            className="w-[350px] h-[45px] border-[1.2px] border-solid border-[grey] rounded-full mt-[2px] ml-[-5px] outline-none px-5 text-[20px] font-medium placeholder:text-[16px] max-[500px]:w-[100%] "
            placeholder="Enter your name"
            onBlur={checkname}
          />
          <p className="error">Please Enter correct name</p>
        </div>
        <div>
          <p className="text-[16px] font-bold relative">
            Email
            <span className="text-[35px] h-[40px] w-[40px] absolute text-[#f44c4c] mt-[-15px] leading-[-10px]">
              *
            </span>{" "}
          </p>
          <input
            type="text"
            className="w-[350px] h-[45px] border-[1.2px] border-solid border-[grey] rounded-full mt-[2px] ml-[-5px] outline-none px-5 text-[20px] font-medium placeholder:text-[16px] max-[500px]:w-[100%]"
            placeholder="Enter your email"
            onBlur={checkemail}
          />
          <p className="error">Please Enter correct Email</p>
        </div>
        <div>
          <p className="text-[16px] font-bold relative">
            Password
            <span className="text-[35px] h-[40px] w-[40px] absolute text-[#f44c4c] mt-[-15px] leading-[-10px]">
              *
            </span>{" "}
          </p>
          <input
            type="text"
            className="w-[350px] h-[45px] border-[1.2px] border-solid border-[grey] rounded-full mt-[2px] ml-[-5px] outline-none px-5 text-[20px] font-medium placeholder:text-[16px] max-[500px]:w-[100%]"
            placeholder="Enter your password"
            onBlur={checkpass}
          />
          <p className="error ">Please Enter correct Password</p>
        </div>
        <button
          className="h-[45px] w-[350px] bg-[black] rounded-full mt-[10px] font-bold text-[white] ml-[-5px] max-[500px]:w-[100%] "
          onClick={adduser}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
export default Form;
