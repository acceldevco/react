import React from "react";

function Lang() {
  return (
    <div onInput={(e)=>console.log(e)} className="[&>*]:w-full  w-[97%] mt-[70px] rounded-2xl bg-[#141619] flex flex-col gap-[116px] h-full items-end justify-start overflow-hidden px-[34px] py-11">
      <div className="bg-[#212529] flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 items-end justify-center overflow-hidden p-[20px] rounded-[14px]">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 [&>*]:text-[15px] [&>*]:cursor-pointer">
          <div>
            <input
              type="radio"
              id="html"
              className="peer/draft appearance-none absolute p-5"
              name="fav_language"
              value="madefile"
            />
            <label
              for="html"
              className="peer-checked/draft:bg-[#784ed1] hover:bg-[#784ed1] p-2 rounded-[10px] text-center text-white"
            >
              ساختن فایل po
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="html"
              className="peer/draft appearance-none absolute p-5"
              name="fav_language"
              value="download"
            />
            <label
              for="html"
              className="peer-checked/draft:bg-[#784ed1] hover:bg-[#784ed1] p-2 rounded-[10px] text-center text-white"
            >
              دانلود زبان{" "}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="html"
              className="peer/draft appearance-none absolute p-5"
              name="fav_language"
              value="lang"
            />
            <label
              for="html"
              className="peer-checked/draft:bg-[#784ed1] hover:bg-[#784ed1] p-2 rounded-[10px] text-center text-white"
            >
              زبان ها{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="[&>*]:h-[300px] [&>*]:w-[25%] flex flex-grow-0 flex-shrink-0 gap-[52px] justify-end">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 rounded-[14px] bg-[#212529]">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 "
            preserveAspectRatio="none"
          >
            <path
              d="M26 1V51M1 26H51"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 rounded-[14px] bg-[#212529]">
          <p className="flex-grow-0 flex-shrink-0 text-[34px] text-center text-white">
            FA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lang;
