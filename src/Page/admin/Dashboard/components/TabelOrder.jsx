import React from 'react'

function TabelOrder() {
  return (
    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-full">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow px-[15px] pb-4">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 p-px rounded-[5px] bg-[#1e2026] border border-[#1e2026]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
          <div className="flex flex-row-reverse justify-between items-center self-stretch flex-grow-0 flex-shrink-0 pb-px border-t-0 border-r-0 border-b border-l-0 border-[#4c505b] [&>*]:w-[50%]">
            <div className="flex flex-row-reverse justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden ">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 relative px-[9px] pt-[16.5px] pb-[9px] rounded-[4.8px]">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-[#9f62f2]">
                  سفارش‌های باز
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-[104.99px] h-0.5 bg-[#9f62f2]"></div>
              </div>
              <div className="flex justify-center flex-col items-center flex-grow-0 flex-shrink-0 h-12 relative px-[9px] pt-[16.5px] pb-[9px] rounded-[4.8px]">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-[#a3a5a8]">
                  موقعیت‌های باز
                </p>
              </div>
              <div className="flex justify-center flex-col items-center flex-grow-0 flex-shrink-0 h-12 relative px-[9px] pt-[16.5px] pb-[9px] rounded-[4.8px]">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-[#a3a5a8]">
                  تاریخچه‌ی معاملات
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
              <div className="flex-grow-0 flex-shrink-0 w-[124.94px] h-9 relative">
                <div className="flex justify-start items-center h-9 absolute left-[78.94px] top-0 px-[9px] pt-[7.03000020980835px] pb-[8.970000267028809px] rounded border border-[#784ed1]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="none"
                  >
                    <g clipPath="url(#clip0_504_1401)">
                      <path
                        d="M10.4521 20.7168C10.3893 20.7167 10.3271 20.7042 10.2691 20.6799C10.2112 20.6556 10.1586 20.6201 10.1145 20.5753L7.3926 17.8534C7.34688 17.808 7.31057 17.7541 7.2858 17.6946C7.26103 17.6352 7.24829 17.5714 7.24829 17.507C7.24829 17.4426 7.26103 17.3789 7.2858 17.3194C7.31057 17.26 7.34688 17.206 7.3926 17.1607L10.1145 14.4387C10.1586 14.3921 10.2116 14.3549 10.2705 14.3294C10.3294 14.3039 10.3928 14.2907 10.457 14.2904C10.5864 14.2904 10.7104 14.3418 10.8019 14.4333C10.8934 14.5248 10.9448 14.6489 10.9448 14.7783V16.5266C11.9031 16.5262 12.8467 16.2906 13.6927 15.8403C14.5387 15.3901 15.2613 14.739 15.7969 13.9443C16.3325 13.1496 16.6647 12.2355 16.7645 11.2824C16.8643 10.3293 16.7286 9.36619 16.3692 8.47777C16.3022 8.30555 16.2877 8.11735 16.3277 7.93692C16.3676 7.7565 16.4602 7.59196 16.5936 7.46411C16.6829 7.37367 16.7892 7.30178 16.9064 7.25256C17.0236 7.20333 17.1494 7.17776 17.2765 7.17729C17.4732 7.17615 17.6657 7.23451 17.8287 7.34472C17.9916 7.45493 18.1175 7.61184 18.1897 7.79485C18.5595 8.70916 18.748 9.68663 18.7448 10.6729C18.7425 12.7422 17.9194 14.726 16.4562 16.1892C14.993 17.6524 13.0092 18.4754 10.9399 18.4778V20.2339C10.9386 20.3624 10.8867 20.4852 10.7953 20.5757C10.704 20.6661 10.5806 20.7168 10.4521 20.7168ZM4.6082 14.1695C4.41165 14.1698 4.21952 14.1111 4.05671 14.001C3.8939 13.8909 3.7679 13.7345 3.69503 13.5519C3.32344 12.6376 3.13323 11.6598 3.13502 10.6729C3.13735 8.60362 3.96038 6.61977 5.42357 5.15658C6.88677 3.69338 8.87063 2.87034 10.9399 2.86801V1.12168C10.9399 1.05721 10.9527 0.993373 10.9775 0.93387C11.0023 0.874366 11.0387 0.820361 11.0845 0.775C11.1303 0.729638 11.1847 0.693813 11.2444 0.669588C11.3042 0.645362 11.3681 0.63323 11.4326 0.633875C11.4953 0.634041 11.5573 0.646616 11.615 0.670898C11.6728 0.695179 11.7252 0.730674 11.7692 0.775327L14.4911 3.4963C14.5369 3.54165 14.5731 3.59561 14.5979 3.65506C14.6227 3.7145 14.6354 3.77825 14.6354 3.84264C14.6354 3.90704 14.6227 3.9708 14.5979 4.03024C14.5731 4.08969 14.5369 4.14365 14.4911 4.18899L11.7692 6.91094C11.7249 6.95761 11.6717 6.99482 11.6127 7.02031C11.5536 7.0458 11.49 7.05904 11.4257 7.05924C11.3007 7.05874 11.1805 7.01099 11.0892 6.92557C11.0412 6.87958 11.0031 6.82427 10.9773 6.76304C10.9514 6.7018 10.9384 6.63594 10.9389 6.56948V4.81923C9.38699 4.82104 7.89913 5.43834 6.80175 6.53572C5.70436 7.6331 5.08707 9.12096 5.08526 10.6729C5.08186 11.4258 5.22776 12.1719 5.51453 12.868C5.582 13.0403 5.59671 13.2288 5.55675 13.4095C5.51679 13.5901 5.42399 13.7549 5.29016 13.8826C5.20034 13.9732 5.09349 14.045 4.97578 14.0941C4.85807 14.1432 4.73183 14.1684 4.6043 14.1685L4.6082 14.1695Z"
                        fill="#784ED1"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_504_1401">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.939941 0.629974)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="w-[70px] h-[22.5px]  opacity-[0.65] text-[15px] font-medium text-center text-[#4c505b]">
                  لغو همه
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 px-2 pb-2">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden pb-4">
            <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[11.5px] pb-[12.5px] w-full">
              <div className="flex flex-row-reverse justify-start items-end flex-grow-0 flex-shrink-0 [&>div>p]:w-full [&>*]:py-[9px] [&>*]:w-[9%] w-full">
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 border-l-2 relative bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    زمان
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative  border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    بازار
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    سمت
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative  border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    نوع
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative  border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    قیمت
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    مقدار
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative border-l-2  bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    پر شده
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    کارمزد
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    ارزش پر شده
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative  border-l-2 bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    وضعیت
                  </p>
                </div>
                <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 relative   rounded-tl rounded-bl bg-[#4c505b]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-white">
                    لغو
                  </p>
                </div>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-base text-center text-white">
                هیچ سفارش بازی ندارید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TabelOrder