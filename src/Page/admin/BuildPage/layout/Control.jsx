import React, { useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";

export default function Control(cntManager) {
  const [showdisplay, setshowdisplay] = useState(false);
  // console.log(cntManager.cntManager);
  return (
    <form>
      {/* <button onClick={(e)=>{e.preventDefault(); document.querySelectorAll('form')[0].reset()}}>dasdsad</button> */}
      <div
        className="flex flex-col justify-start md:px-5 w-[58%] md:w-full"
        onChange={(e) => cntManager.cntManager(e)}
      >
        <p className="md:ml-[0] ml-[235px] sm:text-3xl md:text-[32px] text-[34px] text-center text-red-500">
          تنظیمات
        </p>
        <div className="flex flex-col items-start justify-start w-[73%] md:w-full ">
          <div className="flex flex-col gap-[9px] justify-start w-[99%] md:w-full">
            <p className="text-xl text-white" size="txtInterRegular30">
              margin
            </p>
            <div className="flex [&>*]:w-[25%] gap-2 [&>*]:text-center">
              <input
                type="number"
                id=""
                name="margin_t"
                className="[appearance:textfield] margin [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="t"
              />
              <input
                type="number"
                id=""
                name="margin_d"
                className="[appearance:textfield] margin [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="d"
              />
              <input
                type="number"
                id=""
                name="margin_l"
                className="[appearance:textfield] margin [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="l"
              />
              <input
                type="number"
                id=""
                name="margin_r"
                className="[appearance:textfield] margin [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="r"
              />
            </div>

            <div className="flex gap-5"></div>
          </div>
          <div className="flex flex-col gap-[9px] justify-start  w-full">
            <p className="text-xl text-white">padding</p>
            <div className="flex [&>*]:w-[25%] gap-2 [&>*]:text-center">
              <input
                type="number"
                id=""
                name="padding_t"
                className="[appearance:textfield] padding [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="t"
              />
              <input
                type="number"
                id=""
                name="padding_d"
                className="[appearance:textfield] padding [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="d"
              />
              <input
                type="number"
                id=""
                name="padding_l"
                className="[appearance:textfield] padding [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="l"
              />
              <input
                type="number"
                id=""
                name="padding_r"
                className="[appearance:textfield] padding [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="r"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[9px] justify-start  w-full">
            <p className="text-xl text-white">radius</p>
            <input
              type="number"
              name="rou_size"
              id=""
              className="[appearance:textfield] radius [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="flex flex-col gap-[9px] justify-start w-full">
            <p className="text-xl text-white" size="txtInterRegular30">
              width
            </p>
            <input type="number" name="numberWidth" id="" />
          </div>
           <div>
           <p className="text-xl text-white" size="txtInterRegular30">
              dropdown
            </p>
            <div className=" text-white">
              wsize:
              dri:

            </div>
           </div>
          <div className="flex flex-col justify-center items-start overflow-hidden gap-[19px] ">
            <div className="flex justify-center items-center relative gap-3 flex-row-reverse">
              <p className=" text-[15px] text-center text-white">flex</p>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={(e) => {
                  cntManager.cntManager({
                    target: { name: "display_flex", value: e.target.checked },
                  });
                  setshowdisplay(e.target.checked);
                }}
              />
            </div>
            <div className={`${showdisplay ? "show" : "hidden"} showdisplay`}>
              <div className="flex flex-col gap-[9px] justify-start  w-full">
                <p className="text-xl text-white">dir</p>
                <div className=" relative overflow-hidden">
                  <select name="display_dir" className="display_dir" id="">
                    <option value="row">row</option>
                    <option value="col">col</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-[9px] justify-start  w-full">
                <p className="text-xl text-white">jus</p>
                <div className=" relative overflow-hidden">
                  <select name="display_jus" className="display_jus" id="">
                    <option value="start">start</option>
                    <option value="center">center</option>
                    <option value="end">end</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-[9px] justify-start  w-full">
                <p className="text-xl text-white">item</p>
                <div className=" relative overflow-hidden">
                  <select name="display_ite" className="display_ite" id="">
                    <option value="start">start</option>
                    <option value="center">center</option>
                    <option value="end">end</option>
                  </select>
                </div>
              </div>

              <div>
                <div>gap</div>
                <div>
                  <input
                    type="number"
                    name="display_gap"
                    className="display_gap"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center justify-center ">
          <div>
            <span className="text-white  text-left text-[15px]">max-w:</span>
            <input type="number" name="max_w" id="" />
          </div>
          <div>
            <span className="text-white  text-left text-[15px]">max-h:</span>
            <input type="number" name="max_h" id="" />
          </div>
        </div>
        <p className="text-xl text-white">background-color</p>
        <HexAlphaColorPicker
          color="#3cd6bf"
          onChange={(e) =>
            cntManager.cntManager({ target: { name: "color_type", value: e } })
          }
        />
        <p className="text-xl text-white">background</p>
        <HexAlphaColorPicker
          color="#3cd6bf"
          onChange={(e) =>
            cntManager.cntManager({ target: { name: "bg_type", value: e } })
          }
        />
      </div>
      <div
        onInput={(e) => cntManager.cntManager(e)}
        dangerouslySetInnerHTML={{ __html: cntManager.setting }}
      ></div>
    </form>
  );
}
