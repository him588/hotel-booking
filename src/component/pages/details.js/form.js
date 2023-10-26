import React, { useMemo, useState } from "react";
// import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { HelperText } from "../../core";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Form({ price }) {
  const navigate = useNavigate();
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  const maxdate = dayjs().add(3, "month");
  const [checkin, setcheckin] = useState(today);
  const [checkout, setcheckout] = useState(tomorrow);
  const [day, setday] = useState("");
  const [payment, setpayment] = useState("");

  useMemo(() => {
    const gap = checkout - checkin;
    const days = Math.ceil(gap / 86400000);
    setday(days);
    const roomamount = Math.round(price);
    setpayment(roomamount * days);
  }, [checkin, checkout, price]);

  // console.log(days / 86400000);
  return (
    <div className="w-full   font-[Raleway]   ">
      <p className=" text-[20px] font-normal">
        <span className="font-[Lato] text-[20px] font-semibold">${price}</span>
        |night
      </p>
      <div className="flex w-full gap-2 h-[70px] items-center justify-between mt-4 border-[1px] border-solid border-[grey] px-1 rounded-lg ">
        <div className=" h-[30px]  w-[50%] -mt-7">
          <HelperText
            label={"Checkin"}
            mindate={today}
            value={checkin}
            maxdate={checkout}
            setvalue={setcheckin}
          />
        </div>
        <div className=" h-[30px] w-[50%] -mt-7">
          <HelperText
            label={"Checkout"}
            mindate={tomorrow}
            value={checkout}
            setvalue={setcheckout}
            maxdate={maxdate}
          />
        </div>
      </div>

      <button
        onClick={() => navigate("/success")}
        className="h-[45px] w-full bg-[#F33F3A] py-[10px] mt-3 rounded-lg text-[white] font-medium text-[20px]"
      >
        Reserve
      </button>
      <p className=" py-[10px] text-center font-[Raleway] text-gray-500 font-[12px]">
        We won't be charge yet
      </p>
      <div className=" flex justify-between items-center py-[10px] font-[Lato] text-[18px] text-[#474748]">
        <p className="  underline underline-offset-3">
          $ {price} X {day} nights
        </p>
        <p>${payment}</p>
      </div>
      <div className=" flex justify-between items-center py-[10px] font-[Lato] text-[18px] text-[#474748]">
        <p className="  underline underline-offset-3">
          Hostela service charges
        </p>
        <p>$50</p>
      </div>
      <div className="my-[6px] h-[1px] w-full bg-gray-300"></div>
      <div className=" flex justify-between items-center py-[10px] font-[Lato] text-[18px] text-[#474748]">
        <p className=" font-medium">Total before taxes</p>
        <p>${payment + 50}</p>
      </div>
    </div>
  );
}
export default Form;
