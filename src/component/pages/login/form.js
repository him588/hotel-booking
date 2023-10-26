import React, { useState } from "react";
import { Input } from "../../core";
import { useNavigate } from "react-router-dom";
import { useLocalstorage, setCurrentUser, useUsers } from "../../custom";
// import { useUser } from "../../custom/login/useUser";

function Form() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const all_user = useLocalstorage();
  const { users } = useUsers();

  function handlecheck() {
    if (!all_user.includes(data.email)) {
      setErrors((prev) => {
        return { ...prev, email: "Please enter correct email" };
      });
    } else {
      const existing_user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (!existing_user) {
        setErrors((prev) => {
          return {
            ...prev,
            email:
              "We could not find the any user with the corresponding email",
          };
        });

        return;
      }

      navigate("/hotels");
      setCurrentUser(data.email, users);
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
        <Input
          field={"Email"}
          value={data.email}
          onChange={(value) => {
            setData((prev) => {
              return { ...prev, email: value };
            });
            setErrors((prev) => {
              return { ...prev, email: "" };
            });
          }}
          error={errors.email}
        />
        <Input
          field={"Password"}
          value={data.password}
          onChange={(value) => {
            setData((prev) => {
              return { ...prev, password: value };
            });
            setErrors((prev) => {
              return { ...prev, password: "" };
            });
          }}
          error={errors.password}
        />
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
