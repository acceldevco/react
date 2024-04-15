import React from "react";
import Button from "../../../../shared/Button";

function Footer() {
  return (
    <div className="flex  flex-col justify-end items-end p-5   pt-[17px]  rounded-[5px] bg-[#1e2026] w-full border border-[#1e2026]">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow  bg-[#14151a]">
        <div className="flex flex-col justify-center items-center flex-grow-0 w-full flex-shrink-0 ">
          <div className="flex flex-col justify-start items-start self-center flex-grow-0 flex-shrink-0 w-[90%]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pt-4">
              <div className="flex flex-row-reverse justify-between items-center self-stretch flex-grow-0 flex-shrink-0 p-2 rounded-[5px] bg-[#292c34]">
                <div className="flex flex-row-reverse justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.6843418860808015e-14px]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M10.7348 4.80876C13.3848 5.14209 15.4598 7.21709 15.7932 9.86709C15.8432 10.2921 16.2015 10.6005 16.6182 10.6005C16.6515 10.6005 16.6848 10.6005 16.7182 10.5921C17.1765 10.5338 17.5015 10.1171 17.4432 9.65876C17.0182 6.25043 14.3432 3.57543 10.9348 3.15043C10.4765 3.10043 10.0598 3.42543 10.0098 3.88376C9.9515 4.34209 10.2765 4.75876 10.7348 4.80876ZM11.0515 6.56709C10.6098 6.45043 10.1515 6.71709 10.0348 7.16709C9.91817 7.61709 10.1848 8.06709 10.6348 8.18376C11.5098 8.40876 12.1932 9.09209 12.4265 9.97543C12.5265 10.3504 12.8598 10.6005 13.2348 10.6005C13.3015 10.6005 13.3765 10.5921 13.4432 10.5754C13.8848 10.4588 14.1515 10.0004 14.0432 9.55876C13.6515 8.08376 12.5098 6.94209 11.0515 6.56709ZM16.0265 13.3171L13.9098 13.0755C13.4015 13.0171 12.9015 13.1921 12.5432 13.5505L11.0098 15.0838C8.6515 13.8838 6.71817 11.9588 5.51817 9.59209L7.05983 8.05043C7.41817 7.69209 7.59317 7.19209 7.53483 6.68376L7.29317 4.58376C7.19317 3.74209 6.48483 3.10876 5.63483 3.10876H4.19317C3.2515 3.10876 2.46817 3.89209 2.5265 4.83376C2.96817 11.9505 8.65983 17.6338 15.7682 18.0755C16.7098 18.1338 17.4932 17.3505 17.4932 16.4088V14.9671C17.5015 14.1255 16.8682 13.4171 16.0265 13.3171Z"
                      fill="white"
                    ></path>
                  </svg>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pr-2">
                    <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-white">
                        ساعت شبانه روز در کنار شما هستیم24هفت روز هفته،
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse justify-start items-center flex-grow-0 flex-shrink-0">
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 pl-2">
                    <Button
                      value={"ارتباط با ما"}
                      colorBorder={"#ffff"}
                      bg={''}
                      // colorBorder={"#784ed1"}
                     
                    />
                  </div>
                  <Button h={'40px'} colorBorder={'#784ed1'}  colorbg={'#784ed1'} value={'سوالات متداول'}/>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 w-full flex-shrink-0 px-4 pt-4">
              <div className="flex flex-row-reverse justify-center items-start self-stretch flex-grow-0 flex-shrink-0 [&>*]:text-center [&>*]:w-[20%]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0  pb-[44.5px]">
                  <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 ">
                    <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
                      <p className="flex-grow-0 flex-shrink-0 text-[22px] font-medium text-right text-white">
                        نوبیتکس
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 py-2">
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                        درباره ما
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative py-[3px]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                        نوبیتکس‌مگ
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0  relative  py-[3px]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                        قوانین و مقررات
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0  py-[3px]">
                      <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 relative">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          2022گزارش سال
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                        فرصت‌های شغلی
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  pt-2">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-[68.5px]">
                    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 ">
                      <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
                        <p className="flex-grow-0 flex-shrink-0 text-[22px] font-medium text-right text-white">
                          امکانات
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 py-2">
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#9371da]">
                          دانلود اپلیکیشن
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          بازار آزمایشی نوبیتکس
                        </p>
                      </div>
                      <div className="flex flex-col justify-start self-stretch items-end flex-grow-0 flex-shrink-0  relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          دعوت از دوستان
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 py-[3px]">
                        <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 relative">
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                            APIمستندات
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  pt-2">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-[36.5px]">
                    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 ">
                      <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
                        <p className="flex-grow-0 flex-shrink-0 text-[22px] font-medium text-right text-white">
                          راهنما
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 py-2">
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          سوالات متداول
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          احراز هویت و سطوح کاربری
                        </p>
                      </div>
                      <div className="flex flex-col justify-start self-stretch items-end flex-grow-0 flex-shrink-0  relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          قیمت ها و کارمزدها
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          امنیت حساب کاربری
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          امنیت کیف پول
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  pt-2">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 ">
                      <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
                        <p className="flex-grow-0 flex-shrink-0 text-[22px] font-medium text-right text-white">
                          تماس با ما
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 py-2">
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          ارتباط با ما
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          ثبت تیکت
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          انتقادات و پیشنهاد‌ات
                        </p>
                      </div>
                      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  py-[3px]">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                          support@nobitex.ir
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 pl-[107px]">
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pt-[7.25px] pb-2">
                        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                          <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-right text-white">
                            با ما در دنیای رمزارزها همراه شو!
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row-reverse justify-center items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
                          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[30px]  overflow-hidden">
                            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[30px]  relative overflow-hidden py-[0.6000000238418579px]">
                              <svg
                                width="30"
                                height="29"
                                viewBox="0 0 30 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0  h-[28.8px] relative"
                                preserveAspectRatio="none"
                              >
                                <g clipPath="url(#clip0_504_1507)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M25.7088 0.199982H4.29142C2.26318 0.199982 0.600098 1.86324 0.600098 3.89124V25.3087C0.600098 27.3367 2.26318 29 4.29142 29H25.7087C27.7373 29 29.4001 27.3367 29.4001 25.3088V3.89124C29.4001 1.86324 27.7373 0.199982 25.7088 0.199982ZM10.5001 14.1087V23H6.6001V14.7721V11.78H10.5001V14.1087ZM8.5423 10.1077C7.45732 10.1077 6.57694 9.22794 6.57694 8.1423C6.57694 7.05648 7.45732 6.17784 8.5423 6.17784C9.62878 6.17784 10.5083 7.05654 10.5083 8.1423C10.5083 9.22794 9.62884 10.1077 8.5423 10.1077ZM23.4001 16.88V23H20.0401V17.5501C20.0401 16.2449 19.8989 14.5665 18.1103 14.5665C16.2945 14.5665 16.0201 15.9873 16.0201 17.456V23H12.7801V13.9472V11.78H15.9001V13.28H15.9333C16.3987 12.44 17.5388 11.7788 19.2365 11.7788C22.0968 11.7788 23.0688 13.1313 23.3347 15.2475C23.3978 15.7442 23.4222 16.28 23.4222 16.88H23.4001Z"
                                    fill="white"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_504_1507">
                                    <rect
                                      width="30"
                                      height="28.8"
                                      fill="white"
                                      transform="translate(0 0.199982)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pr-8">
                          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[30px]  overflow-hidden">
                              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[30px]  relative overflow-hidden py-[0.6000000238418579px]">
                                <svg
                                  width="30"
                                  height="29"
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="flex-grow-0 flex-shrink-0  h-[28.8px] relative"
                                  preserveAspectRatio="none"
                                >
                                  <g clipPath="url(#clip0_504_1498)">
                                    <mask
                                      id="mask0_504_1498"
                                      style={{
                                        "mask-type": "luminance",
                                      }}
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="30"
                                      height="29"
                                    >
                                      <path
                                        d="M29.4001 0.199982H0.600098V29H29.4001V0.199982Z"
                                        fill="white"
                                      ></path>
                                    </mask>
                                    <g mask="url(#mask0_504_1498)">
                                      <path
                                        d="M15.0001 0.199982C7.04719 0.199982 0.600098 6.64708 0.600098 14.6C0.600098 22.5529 7.04719 29 15.0001 29C22.953 29 29.4001 22.5529 29.4001 14.6C29.4001 6.64708 22.953 0.199982 15.0001 0.199982ZM22.4846 9.30888L19.9271 21.5187C19.8961 21.6664 19.8285 21.8039 19.7306 21.9187C19.6327 22.0335 19.5074 22.1217 19.3664 22.1755C19.2254 22.2292 19.0731 22.2466 18.9237 22.2261C18.7742 22.2057 18.6323 22.148 18.5109 22.0583L14.7907 19.3099L12.5369 21.4361C12.5075 21.464 12.4727 21.4857 12.4347 21.5C12.3967 21.5141 12.3563 21.5207 12.3157 21.5192C12.2753 21.5176 12.2354 21.508 12.1986 21.491C12.1619 21.4738 12.1289 21.4496 12.1015 21.4196L12.0531 21.3664L12.4447 17.5766L19.5032 11.1274C19.5381 11.0956 19.5599 11.0518 19.5641 11.0048C19.5683 10.9577 19.5547 10.9108 19.526 10.8732C19.4973 10.8357 19.4556 10.8103 19.4091 10.8019C19.3626 10.7936 19.3147 10.8031 19.2747 10.8284L10.2478 16.5417L6.3601 15.236C6.25673 15.2013 6.16663 15.1354 6.10217 15.0475C6.03772 14.9595 6.00205 14.8538 6.00009 14.7447C5.99812 14.6356 6.02993 14.5287 6.09115 14.4385C6.15239 14.3482 6.24005 14.2791 6.3421 14.2407L21.5532 8.51058C21.6705 8.46642 21.7976 8.4546 21.9211 8.47634C22.0446 8.49809 22.1599 8.55261 22.2551 8.63419C22.3503 8.71578 22.4219 8.82144 22.4622 8.94012C22.5026 9.05881 22.5103 9.18617 22.4846 9.30888Z"
                                        fill="white"
                                      ></path>
                                    </g>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_504_1498">
                                      <rect
                                        width="30"
                                        height="28.8"
                                        fill="white"
                                        transform="translate(0 0.199982)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pr-8">
                          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[30px]  overflow-hidden">
                              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[30px]  relative overflow-hidden py-[0.6000000238418579px]">
                                <svg
                                  width="30"
                                  height="29"
                                  viewBox="0 0 30 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="flex-grow-0 flex-shrink-0  h-[28.8px] relative"
                                  preserveAspectRatio="none"
                                >
                                  <g clipPath="url(#clip0_504_1490)">
                                    <path
                                      d="M14.8849 17.295C16.3074 17.295 17.4604 16.1418 17.4604 14.7193C17.4604 13.2969 16.3074 12.1437 14.8849 12.1437C13.4624 12.1437 12.3093 13.2969 12.3093 14.7193C12.3093 16.1418 13.4624 17.295 14.8849 17.295Z"
                                      fill="white"
                                    ></path>
                                    <path
                                      d="M18.1006 8.39374H11.6617C10.7252 8.39374 9.90565 8.68642 9.37883 9.21324C8.85201 9.74007 8.55933 10.5596 8.55933 11.4961V17.935C8.55933 18.8716 8.85201 19.6911 9.43737 20.2765C10.0227 20.8033 10.7837 21.096 11.7203 21.096H18.1006C19.0372 21.096 19.8567 20.8033 20.3835 20.2765C20.9689 19.7497 21.2616 18.9302 21.2616 17.9936V11.5547C21.2616 10.6181 20.9689 9.85714 20.4421 9.27178C19.8567 8.68642 19.0958 8.39374 18.1006 8.39374ZM14.8812 18.6961C12.6568 18.6961 10.9008 16.8814 10.9008 14.7156C10.9008 12.4912 12.7154 10.7352 14.8812 10.7352C17.047 10.7352 18.9201 12.4912 18.9201 14.7156C18.9201 16.94 17.1056 18.6961 14.8812 18.6961ZM19.0372 11.4961C18.5104 11.4961 18.1006 11.0864 18.1006 10.5596C18.1006 10.0327 18.5104 9.62299 19.0372 9.62299C19.564 9.62299 19.9738 10.0327 19.9738 10.5596C19.9738 11.0864 19.564 11.4961 19.0372 11.4961Z"
                                      fill="white"
                                    ></path>
                                    <path
                                      d="M14.9999 0.199982C7.03903 0.199982 0.600098 6.63892 0.600098 14.5997C0.600098 22.5607 7.03903 28.9996 14.9999 28.9996C22.9608 28.9996 29.3997 22.5607 29.3997 14.5997C29.4583 6.63892 22.9608 0.199982 14.9999 0.199982ZM22.6681 17.9949C22.6681 19.3412 22.1999 20.5119 21.3803 21.3314C20.5608 22.1509 19.3901 22.5607 18.1023 22.5607H11.7219C10.4341 22.5607 9.26339 22.1509 8.4439 21.3314C7.56586 20.5119 7.15611 19.3412 7.15611 17.9949V11.5559C7.15611 8.86327 8.97071 6.99013 11.7219 6.99013H18.1608C19.5072 6.99013 20.6193 7.45842 21.4388 8.27793C22.2583 9.09742 22.6681 10.2096 22.6681 11.5559V17.9949Z"
                                      fill="white"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_504_1490">
                                      <rect
                                        width="30"
                                        height="28.8"
                                        fill="white"
                                        transform="translate(0 0.199982)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pr-8">
                          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[30px]  overflow-hidden">
                              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[30px]  relative overflow-hidden py-[0.000192688123206608px]">
                                <svg
                                  width="30"
                                  height="31"
                                  viewBox="0 0 30 31"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="flex-grow-0 flex-shrink-0  h-[30px] relative"
                                  preserveAspectRatio="none"
                                >
                                  <g clipPath="url(#clip0_504_1482)">
                                    <path
                                      d="M26.1416 0.600159H3.85839C2.83508 0.600159 1.85368 1.00667 1.1301 1.73025C0.406507 2.45384 0 3.43524 0 4.45855L0 26.7414C0 27.7647 0.406507 28.7461 1.1301 29.4697C1.85368 30.1933 2.83508 30.5998 3.85839 30.5998H26.1416C27.1649 30.5998 28.1463 30.1933 28.8699 29.4697C29.5935 28.7461 30 27.7647 30 26.7414V4.45855C30 3.43524 29.5935 2.45384 28.8699 1.73025C28.1463 1.00667 27.1649 0.600159 26.1416 0.600159ZM23.6012 23.9601C22.0083 23.9601 20.4154 23.9613 18.8225 23.9636C18.7633 23.9678 18.7041 23.956 18.651 23.9293C18.598 23.9026 18.5531 23.8622 18.5212 23.8121C16.9527 21.7003 15.3815 19.5903 13.8076 17.4823C13.7926 17.4619 13.7757 17.4438 13.7533 17.4161C13.2203 17.9864 12.6901 18.5521 12.1613 19.1198C10.9885 20.3787 9.81618 21.639 8.64437 22.9007C8.35573 23.211 8.06438 23.5193 7.7819 23.8349C7.7458 23.8787 7.69976 23.9132 7.6476 23.9356C7.59545 23.958 7.5387 23.9676 7.48208 23.9636C7.06703 23.957 6.65159 23.9613 6.17797 23.9613L13.1028 16.5355L6.18028 7.24058H6.45004C7.97228 7.24058 9.49451 7.24405 11.0168 7.23634C11.2094 7.23634 11.3281 7.29068 11.4445 7.44675C12.9097 9.41217 14.3798 11.3744 15.8548 13.3334C15.8848 13.3719 15.9184 13.4105 15.9638 13.4667C16.0528 13.3723 16.1357 13.2856 16.2174 13.197C18.0354 11.2477 19.8543 9.30003 21.6743 7.35388C21.7401 7.28959 21.8269 7.25126 21.9187 7.24597C22.3329 7.23518 22.7476 7.24096 23.2193 7.24096L16.6097 14.3427L23.822 23.9497C23.723 23.9543 23.6621 23.9601 23.6012 23.9601Z"
                                      fill="white"
                                    ></path>
                                    <path
                                      d="M21.6166 22.7743H21.1129C20.5542 22.7743 19.9954 22.7705 19.4369 22.7774C19.3837 22.7813 19.3304 22.7708 19.2826 22.747C19.2348 22.7232 19.1942 22.687 19.1653 22.6421C17.2774 20.1279 15.3879 17.6152 13.4968 15.1038L8.52039 8.49112C8.49419 8.45644 8.47029 8.4206 8.42944 8.36279C8.49958 8.35778 8.54698 8.35162 8.59438 8.35123C9.28806 8.35123 9.98174 8.35354 10.6754 8.34853C10.7251 8.34485 10.7749 8.35473 10.8194 8.37713C10.8639 8.39953 10.9016 8.4336 10.9282 8.47571C12.7557 10.9228 14.5853 13.3682 16.4171 15.8117C18.1172 18.0819 19.8168 20.3522 21.5161 22.6229C21.5457 22.6618 21.5704 22.7038 21.6166 22.7743Z"
                                      fill="white"
                                    ></path>
                                    <path
                                      d="M16.6097 14.3427L23.2193 7.24097C22.7476 7.24097 22.333 7.23519 21.9187 7.24598C21.8269 7.25127 21.7401 7.2896 21.6743 7.35389C19.8523 9.30004 18.0333 11.2481 16.2174 13.1981C16.1357 13.2856 16.0529 13.3723 15.9638 13.4679C15.9184 13.4128 15.8848 13.375 15.8548 13.3345C14.3829 11.3732 12.9124 9.41103 11.4434 7.44792C11.3278 7.29377 11.2079 7.23635 11.0156 7.2375C9.49337 7.24521 7.97113 7.24174 6.4489 7.24174H6.17913L13.1028 16.5355L6.17798 23.9613C6.65161 23.9613 7.06704 23.9571 7.48209 23.9636C7.53871 23.9676 7.59546 23.958 7.64761 23.9356C7.69977 23.9132 7.74581 23.8787 7.78191 23.8349C8.0644 23.5193 8.35574 23.211 8.64439 22.9007C9.8167 21.6403 10.989 20.38 12.1613 19.1198C12.6901 18.5522 13.2203 17.9864 13.7533 17.4161C13.7757 17.4427 13.7919 17.4619 13.8077 17.4823C15.38 19.5914 16.9512 21.7013 18.5212 23.8122C18.5532 23.8622 18.598 23.9027 18.6511 23.9293C18.7041 23.956 18.7633 23.9678 18.8226 23.9636C20.4154 23.959 22.0083 23.9578 23.6012 23.9601C23.6621 23.9601 23.723 23.9544 23.822 23.9497L16.6097 14.3427ZM21.1128 22.7743C20.5541 22.7743 19.9953 22.7705 19.4368 22.7774C19.3836 22.7813 19.3303 22.7708 19.2825 22.747C19.2347 22.7232 19.1941 22.687 19.1652 22.6422C17.2773 20.128 15.3878 17.6152 13.4967 15.1038L8.5203 8.49113C8.49409 8.45645 8.4702 8.42061 8.42935 8.3628C8.49948 8.35779 8.54689 8.35163 8.59429 8.35124C9.28796 8.35124 9.98164 8.35355 10.6753 8.34854C10.725 8.34486 10.7748 8.35474 10.8193 8.37714C10.8639 8.39954 10.9015 8.43361 10.9281 8.47572C12.7556 10.9229 14.5852 13.3682 16.417 15.8117C18.1171 18.0819 19.8167 20.3522 21.516 22.6229C21.5452 22.6614 21.5699 22.7038 21.6162 22.7743H21.1128Z"
                                      fill="black"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_504_1482">
                                      <rect
                                        width="30"
                                        height="29.9996"
                                        fill="white"
                                        transform="translate(0 0.600159)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 pt-2 pb-4">
            <div className="flex justify-center items-center self-stretch flex-grow ">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative space-x-[-5.6843418860808015e-14px] pr-[5.6843418860808015e-14px]">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#a3a5a8]">
                  © 2016-2024 NOBITEX, v4.64.0
                </p>
                <div className="flex-grow-0 flex-shrink-0  h-[11px] relative bg-[#1e2026]">
                  <p className=" h-[15px] absolute left-0 top-[-2px] text-[10px] text-left text-[#a3a5a8]">
                    - f5f904f
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
