import React, { useCallback, useRef, useState } from "react"
import { Filtericon } from "../../icon"

function Filter({ items, setfilitem }) {
	const [show, setshow] = useState(false)
	const [minvalue, setminvalue] = useState("")
	const [maxvalue, setmaxvalue] = useState("")
	const [sleepcount, setsleepcount] = useState("")
	const count1 = useRef()
	const count2 = useRef()
	const count3 = useRef()

	const set_sleep = useCallback((e, ref1, ref2, ref3) => {
		setsleepcount(e.target.innerHTML)
		ref1.current.style.backgroundColor = "#fc615e"
		ref1.current.style.color = "White"
		ref2.current.style.backgroundColor = ""
		ref2.current.style.color = "black"
		ref3.current.style.backgroundColor = ""
		ref3.current.style.color = "black"
	}, [])

	function change(e, setstate) {
		setstate(+e.target.value)
	}
	function handleclear() {
		setshow(false)
		setfilitem(true)
		setminvalue("")
		setmaxvalue("")
		count1.current.style.backgroundColor = "White"
		count2.current.style.backgroundColor = "White"
		count3.current.style.backgroundColor = "White"
		count1.current.style.color = "black"
		count2.current.style.color = "black"
		count3.current.style.color = "black"
	}
	function handlefilter() {
		const fillter_item = items.filter((item) => {
			if (
				item.BaseRate > (minvalue === "" ? 0 : +minvalue) &&
				item.BaseRate < (maxvalue === "" ? 1000 : +maxvalue) &&
				item.SleepsCount === (sleepcount === "" ? 2 : +sleepcount)
			) {
				return true
			} else {
				return false
			}
		})
		setfilitem(fillter_item)
		setshow(false)
		setminvalue("")
		setmaxvalue("")
		setsleepcount("")
	}

	return (
		<div className="p-[25px] w-full font-[Raleway] ">
			<div
				onClick={() => setshow(true)}
				className={`h-[45px] cursor-pointer  text-[16px] font-semibold flex items-center justify-center gap-1 w-[100px] shadow-lg  border-solid rounded-lg border-[#a7a7a7] max-[400px]:mt-[30px] max-[400px]:p-[10px] max-[400px]:ml-[-10px] ${
					show ? " invisible" : ""
				}`}
			>
				<Filtericon h={20} w={20}></Filtericon>
				Filters
			</div>

			<div
				className={`h-[350px]  backdrop-filter backdrop-blur-sm bg-opacity-70 bg-clip-padding flex flex-col items-center gap-5 max-[400px]:h-[400px] p-[40px] max-[400px]:p-[15px] w-[350px] max-[400px]:w-[320px] left-[-2px] top-[160px] max-[400px]:top-[88px] bg-[#f9ffff]  rounded-r-md absolute  z-50 transition-all duration-500 ${
					show ? "translate-x-[0]" : "translate-x-[-100%]"
				}   `}
			>
				<p
					onClick={handleclear}
					className="text-[#113711] absolute top-[10px] right-[10px] text-[18px] cursor-pointer underline-offset-3 underline"
				>
					Clear all
				</p>
				<div className="w-full">
					<p className="text-[20px] font-semibold mb-2">Price</p>
					<div className="w-full flex gap-[20px]  ">
						<input
							type="text"
							className="h-[45px] text-[18px] font-medium w-[50%] border-[1px] px-2 border-solid border-[grey] rounded-md outline-none"
							placeholder="min-price"
							value={minvalue}
							onChange={(e) => change(e, setminvalue)}
						/>
						<input
							type="text"
							className="h-[45px] text-[18px] font-medium w-[50%] border-[1px] px-2 border-solid border-[grey] rounded-md outline-none"
							placeholder="max-price"
							value={maxvalue}
							onChange={(e) => change(e, setmaxvalue)}
						/>
					</div>
				</div>
				<div className="w-full">
					<p className="text-[20px] font-semibold my-2">Sleep count</p>
					<div className="flex gap-[20px] items-center">
						<button
							ref={count1}
							onClick={(e) => set_sleep(e, count1, count2, count3)}
							className="h-[40px] flex justify-center text-[25px] text-[black] bg-white font-medium w-[80px] border-[1px]  border-solid border-[grey] rounded-md outline-none"
						>
							2
						</button>
						<button
							ref={count2}
							onClick={(e) => set_sleep(e, count2, count3, count1)}
							className="h-[40px] flex justify-center text-[25px] bg-white text-[black] font-medium w-[80px] border-[1px]  border-solid border-[grey] rounded-md outline-none"
						>
							4
						</button>
						<button
							ref={count3}
							onClick={(e) => {
								set_sleep(e, count3, count2, count1)
							}}
							className="h-[40px] flex justify-center text-[25px] bg-white text-[black] font-medium w-[80px] border-[1px]  border-solid border-[grey] rounded-md outline-none"
						>
							6
						</button>
					</div>
				</div>
				<button
					className=" text-[18px] font-semibold h-[45px] w-[150px] bg-[#f03d3a] text-[white] mt-[10px] rounded-lg"
					onClick={handlefilter}
				>
					Show Result
				</button>
			</div>
		</div>
	)
}
export default Filter
