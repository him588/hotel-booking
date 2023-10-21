import React, { useState } from "react";
import { Input } from "../../core";
import { useNavigate } from "react-router-dom";
import { useLocalstorage, useSetuser } from "../../custom";

function Form() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error1, seterror1] = useState(false);
  const [error2, seterror2] = useState(false);
  const navigate = useNavigate();
  const all_user = useLocalstorage();
  const user = JSON.parse(localStorage.getItem("user"));
  const index = all_user.indexOf(email);

  const setuser = useSetuser;

  function handlecheck() {
    if (!all_user.includes(email)) {
      seterror1(true);
    } else {
      seterror1(false);
      if (email === user[index].email && password === user[index].password) {
        seterror2(false);
        navigate("/hotels");
        setuser(email, user);
      } else {
        seterror2(true);
      }
    }
  }

  return (
    <div className="font-[Raleway] mt-[-80px] max-[500px]:w-[100%]">
      <h1 className="text-[35px] font-bold">Welcome...</h1>
      <p
        className={`text-[20px]  text-[#929191] mt-[-5px] max-[500px]:text-[16px] `}
      >
        Please submit your details to login
      </p>
      <div className="mt-[30px] flex flex-col items-start gap-4">
        <Input field={"Email"} input={email} setinput={setemail}></Input>
        <p
          className={`text-[14px] text-[red] mt-[-13px] ${
            error1 ? "block" : "hidden"
          }`}
        >
          Wrong email please enter correct email
        </p>
        <Input
          field={"Password"}
          input={password}
          setinput={setpassword}
        ></Input>
        <p
          className={`text-[14px] text-[red] mt-[-13px] ${
            error2 ? "block" : "hidden"
          }`}
        >
          Please enter correct Password
        </p>
      </div>
      <button
        className="h-[45px] w-[350px] bg-[black] rounded-full mt-[25px] font-bold text-[white] ml-[-5px] max-[900px]:w-[100%] "
        onClick={handlecheck}
      >
        Login
      </button>
      <p className="text-[16px] font-medium mt-[10px] max-[400px]:text-center">
        Didn't have any account go to{" "}
        <span
          className="text-[#b22c2c] text-[18px] cursor-pointer underline-offset-3 underline"
          onClick={() => navigate("/signup")}
        >
          Signup.
        </span>
      </p>
    </div>
  );
}
export default Form;
