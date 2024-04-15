import React from 'react'
import Reminder from "./Reminder";

function TransactionFees() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div
        className="flex flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0  p-px rounded-[5px] bg-[#1e2026] border border-[#1e2026]">
        <div
          className="flex flex-row-reverse justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative p-4">
          <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-right text-[#784ed1]">
              کارمزد معاملات
            </p>
          </div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M14.6967 15.4166L6.6967 7.41665V14.5833H5.03003V4.58331H15.03V6.24998H7.86336L15.8634 14.25L14.6967 15.4166Z"
              fill="#E3E4E5"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-4 py-[2.75px]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
            <div
              className="flex flex-row-reverse justify-end items-start self-stretch [&>*]:w-[33.33%] flex-grow-0 flex-shrink-0 pl-2  pt-[7.25px] pb-2">
              <div
                className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0  relative  pb-[0.75px]">
                <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-center text-[#9371da]">
                  بازار تومانی
                </p>
              </div>
              <div
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0  relative pl-2 pr-[101.19000244140625px] pb-[0.75px]">
                <p className="flex-grow-0 flex-shrink-0 w-[70px] text-[19px] font-medium text-left text-[#9371da]">
                  بازار تتری
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
              <div
                className="flex flex-row-reverse justify-center items-center self-stretch flex-grow-0 flex-shrink-0 [&>*]:w-[33.33%] pt-[15.25px] pb-4 rounded-[5px] bg-[#292c34]">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0  h-[28.5px]  pb-[0.75px] border-t-0 border-r-0 border-b-0 border-l border-[#a3a5a8] border-dashed">
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                    <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-left text-[#9371da]">
                      میکر
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  relative  pb-[0.75px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-center text-white">
                    0.2%
                  </p>
                </div>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  relative pl-4  pb-[0.75px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-left text-white">
                    0.1%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
              <div
                className="flex flex-row-reverse justify-center items-center self-stretch flex-grow-0 flex-shrink-0 [&>*]:w-[33.33%] pt-[15.25px] pb-4 rounded-[5px] bg-[#292c34]">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0  h-[28.5px]  pb-[0.75px] border-t-0 border-r-0 border-b-0 border-l border-[#a3a5a8] border-dashed">
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                    <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-left text-[#9371da]">
                      تیکر
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  relative  pb-[0.75px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-center text-white">
                    0.25%
                  </p>
                </div>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  relative pl-4  pb-[0.75px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-left text-white">
                    0.13%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0 h-[109px] relative">
            <div className="flex justify-center items-start">
              <div className="self-stretch flex-grow relative">
                <div className="flex flex-row-reverse justify-between items-start ">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pb-[17px]">
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[2.842170943040401e-14px]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
                        تومان0
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pb-[17px]">
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[1.4210854715202004e-14px]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
                        میلیون تومان100
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-row-reverse justify-between items-start [&>*]:w-[10%] pl-[0.07999999821186066px]">
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#00aea4]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#00aea4]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative px-[3px]">
                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-2 rounded-[25px] bg-[#efefef]"></div>
                  </div>
                </div>
                <div className="flex justify-start items-end   pt-2 pb-4">
                  <div
                    className="flex flex-row-reverse justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[3.240000009536743px]">
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#a3a5a8]">
                      روز گذشته:30ارزش معاملات
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
                      میلیون تومان23.3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reminder />

    </div>
  )


}

export default TransactionFees