import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./input";
import { useAdduser } from "../../custom";
// import useAdduser from "../../"
function Form() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name_error, setname_error] = useState(false);
  const [email_error, setemail_error] = useState(false);
  const [password_error, setpassword_error] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const user_emails = [];
  if (localStorage.getItem("user") === null) {
    localStorage.setItem("user", JSON.stringify([]));
  }
  let user = JSON.parse(localStorage.getItem("user"));

  for (let i = 0; i < user.length; i++) {
    user_emails.push(user[i].email);
  }
  function checkname() {
    if (name.length > 3) {
      setname_error(false);
    }
  }
  function checkemail() {
    if (emailRegex.test(email)) {
      setemail_error(false);
    }
  }
  function checkpass() {
    if (password.length > 6) {
      setpassword_error(false);
    }
  }
  const fun = useAdduser(
    name,
    email,
    password,
    setname_error,
    setemail_error,
    setpassword_error,
    user_emails,
    user
  );
  return (
    <div className="font-[Raleway] w-[full]">
      <h1 className="text-[35px] font-bold max-[500px]:text-[28px]">
        Create your account
      </h1>
      <p className="text-[20px]  text-[#929191] max-[500px]:text-[16px]">
        Lets get started to enjoy your journey
      </p>
      <div className="mt-[30px] flex flex-col items-start gap-4">
        <Input
          name={"name"}
          input={name}
          setinput={setname}
          check_input={checkname}
          error={name_error}
        ></Input>
        <Input
          name={"Email"}
          input={email}
          setinput={setemail}
          check_input={checkemail}
          error={email_error}
        ></Input>
        <Input
          name={"Password"}
          input={password}
          setinput={setpassword}
          check_input={checkpass}
          error={password_error}
        ></Input>
        <button
          className="h-[45px] w-[350px] bg-[black] rounded-full mt-[10px] font-bold text-[white] ml-[-5px] max-[500px]:w-[100%] "
          onClick={() => fun()}
        >
          Sign up
        </button>
        <p className="text-[16px] font-medium text-center">
          Already have account go to{" "}
          <span
            className="text-[#1c5d1c] text-[18px] cursor-pointer underline-offset-3 underline"
            onClick={() => navigate("/login")}
          >
            Login.
          </span>
        </p>
      </div>
    </div>
  );
}
export default Form;
