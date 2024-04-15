import React from 'react'
import Button from '../../../../shared/Button'
// import  styles  from './Welcome.module.css'
// import 'virtual:uno.css'
function Welcome() {
  // console.log(styles)
  return (
    <div className={`flex  flex-col justify-end items-end self-stretch flex-grow-0 flex-shrink-0 space-y-[-1.4210854715202004e-14px] px-[17px] pt-[17px] pb-[200px] rounded-[5px] bg-[#1e2026] border border-[#1e2026]`}>
    <div className="flex flex-col justify-end items-end self-stretch flex-grow-0 flex-shrink-0 gap-[7.25px] pt-[16.299999237060547px] pb-6">
      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  pb-[0.6899999976158142px]">
        <p className="flex-grow-0 flex-shrink-0 text-[22px] font-medium text-right text-[#15d1c6]">
          به نوبیتکس خوش آمدید
        </p>
      </div>
      <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  pb-[0.75px]">
        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-[#a3a5a8]">
          مرحله به مرحله پیش بروید تا بهترین خدمات را دریافت
          کنید
        </p>
      </div>
    </div>
    <div className="flex flex-row-reverse justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative [&>*]:w-[14%]">
      <div className="self-stretch flex-grow relative">
        <div className="flex flex-row-reverse justify-between items-center ">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 relative p-2.5 rounded-[20px] border border-[#00aea4]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_504_1256)">
                <path
                  d="M17.057 19.991H3.00702C2.47586 19.9913 1.96627 19.7808 1.59003 19.4059C1.21378 19.031 1.00159 18.5222 1 17.991V3.991C1.00159 3.45984 1.21378 2.95101 1.59003 2.57608C1.96627 2.20115 2.47586 1.99073 3.00702 1.991H4.00702V0.990997C4.00702 0.72472 4.1128 0.469353 4.30109 0.281067C4.48937 0.0927804 4.74471 -0.0130005 5.01099 -0.0130005C5.27726 -0.0130005 5.53266 0.0927804 5.72095 0.281067C5.90923 0.469353 6.01501 0.72472 6.01501 0.990997V1.991H14.043V0.990997C14.043 0.724853 14.1487 0.469595 14.3369 0.281403C14.5251 0.0932098 14.7804 -0.0125122 15.0465 -0.0125122C15.3127 -0.0125122 15.5679 0.0932098 15.7561 0.281403C15.9443 0.469595 16.05 0.724853 16.05 0.990997V1.991H17.05C17.5811 1.99073 18.0907 2.20115 18.467 2.57608C18.8432 2.95101 19.0554 3.45984 19.057 3.991V17.991C19.0554 18.5209 18.8442 19.0287 18.4695 19.4035C18.0948 19.7782 17.587 19.9894 17.057 19.991ZM10.033 12.891C8.74049 12.9294 7.46542 13.2005 6.26898 13.691C5.23898 14.122 4.01099 14.871 4.01099 15.991V16.991H16.054V15.991C16.054 14.871 14.826 14.122 13.796 13.691C12.5996 13.2004 11.3245 12.9294 10.032 12.891H10.033ZM10.033 4.991C9.44011 4.99297 8.86105 5.17059 8.36902 5.50143C7.87699 5.83228 7.49402 6.3015 7.26849 6.84985C7.04296 7.3982 6.98499 8.00108 7.10187 8.58237C7.21875 9.16365 7.50528 9.69726 7.92523 10.1158C8.34518 10.5344 8.87976 10.8191 9.46143 10.9341C10.0431 11.049 10.6458 10.989 11.1934 10.7617C11.741 10.5343 12.2089 10.1498 12.5381 9.65668C12.8673 9.16355 13.043 8.58391 13.043 7.991C13.0406 7.19417 12.7222 6.43082 12.1578 5.86841C11.5933 5.306 10.8288 4.99046 10.032 4.991H10.033Z"
                  fill="#15D1C6"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_504_1256">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 -0.0100098)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex-grow h-0.5 border border-[#00aea4]"></div>
        </div>
        <div className="flex flex-col justify-end items-end gap-2 pt-3 pb-[18px]">
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-right text-[#15d1c6]">
              ثبت نام
            </p>
          </div>
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden  pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-right text-[#a3a5a8]">
              برای شروع لازم است ایمیل خود را تایید کنید
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-grow relative">
        <div className="flex flex-row-reverse justify-between items-center ">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 relative p-2.5 rounded-[20px] border border-[#00aea4]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_504_1245)">
                <path
                  d="M13.9072 19.03C13.7641 19.03 13.6225 19.0008 13.4911 18.944C13.3597 18.8873 13.2414 18.8043 13.1433 18.7001L10.9176 16.3497C10.7217 16.1362 10.613 15.857 10.613 15.5673C10.613 15.2776 10.7217 14.9983 10.9176 14.7848L10.9285 14.774C11.0257 14.6704 11.143 14.5878 11.2733 14.5312C11.4036 14.4746 11.544 14.4453 11.686 14.4449C11.8268 14.4448 11.9661 14.474 12.095 14.5307C12.2238 14.5873 12.3395 14.6702 12.4345 14.774L13.9072 16.3107L18.6694 11.2945C18.7664 11.1905 18.8837 11.1075 19.0141 11.0507C19.1445 10.994 19.2852 10.9647 19.4274 10.9647C19.5696 10.9647 19.7103 10.994 19.8407 11.0507C19.9711 11.1075 20.0885 11.1905 20.1854 11.2945L20.1963 11.3053C20.3921 11.5186 20.5008 11.7977 20.5008 12.0873C20.5008 12.3769 20.3921 12.656 20.1963 12.8693L14.6701 18.6955C14.5727 18.8006 14.4546 18.8845 14.3234 18.9421C14.1921 18.9996 14.0505 19.0295 13.9072 19.03ZM10.1764 18.9487H0.5V16.6977C0.5 15.7766 1.05957 14.4432 3.72364 13.3267C5.43321 12.6303 7.25441 12.2481 9.09971 12.1985C9.4593 12.2006 9.81847 12.2231 10.1755 12.2663L9.27147 13.1884C8.65535 13.8325 8.30966 14.6883 8.30562 15.5797C8.30159 16.471 8.63951 17.3299 9.24977 17.9796L10.1728 18.945L10.1764 18.9487ZM9.10062 9.94933C8.20216 9.98977 7.31215 9.76028 6.54526 9.29043C5.77838 8.82057 5.16974 8.13188 4.79773 7.31305C4.42573 6.49421 4.30741 5.58275 4.458 4.69607C4.6086 3.80939 5.02121 2.98819 5.6427 2.33809C6.26419 1.68799 7.06609 1.23884 7.94509 1.04853C8.8241 0.858212 9.73996 0.935417 10.5747 1.27022C11.4094 1.60503 12.1248 2.18205 12.6287 2.92703C13.1325 3.67201 13.4018 4.55083 13.4018 5.45021C13.4263 6.61672 12.9873 7.74533 12.1811 8.5887C11.3748 9.43208 10.2671 9.92135 9.10062 9.94933Z"
                  fill="#15D1C6"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_504_1245">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5 -0.0100098)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex-grow h-0.5 border border-[#00aea4]"></div>
        </div>
        <div className="flex flex-col justify-end items-end  gap-2 pt-3 pb-[18px]">
          <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative  pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-right text-[#15d1c6]">
              احراز هویت
            </p>
          </div>
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden pl-[34.11000061035156px] pr-[1.1368683772161603e-13px] pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-right text-[#a3a5a8]">
              برای استفاده از خدمات نوبیتکس، اطلاعات هویتی
              خود را کامل کنید
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-grow relative">
        <div className="flex flex-row-reverse justify-between items-center ">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 relative p-2.5 rounded-[20px] border border-[#00aea4]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_504_1234)">
                <path
                  d="M9.69689 15.8991V8.62633C9.69689 7.62633 10.506 6.80814 11.5151 6.80814H19.6969V5.89905C19.6969 4.89905 18.8787 4.08087 17.8787 4.08087H5.15143C4.14234 4.08087 3.33325 4.89905 3.33325 5.89905V18.6263C3.33325 19.6263 4.14234 20.4445 5.15143 20.4445H17.8787C18.8787 20.4445 19.6969 19.6263 19.6969 18.6263V17.7172H11.5151C10.506 17.7172 9.69689 16.8991 9.69689 15.8991ZM12.4242 8.62633C11.9242 8.62633 11.5151 9.03542 11.5151 9.53542V14.99C11.5151 15.49 11.9242 15.8991 12.4242 15.8991H20.606V8.62633H12.4242ZM15.1514 13.6263C14.3969 13.6263 13.7878 13.0172 13.7878 12.2627C13.7878 11.5081 14.3969 10.8991 15.1514 10.8991C15.906 10.8991 16.5151 11.5081 16.5151 12.2627C16.5151 13.0172 15.906 13.6263 15.1514 13.6263Z"
                  fill="#15D1C6"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_504_1234">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 -0.0100098)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex-grow h-0.5 border border-[#00aea4]"></div>
        </div>
        <div className="flex flex-col justify-end items-end  gap-2 pt-3 pb-[18px]">
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative  pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-right text-[#15d1c6]">
              شارژ حساب
            </p>
          </div>
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden  pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-right text-[#a3a5a8]">
              حسابتان را با واریز تومانی یا رمزارز شارژ کنید
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-grow-0 flex-shrink-0  relative">
        <div className="flex justify-end items-center">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 relative p-2.5 rounded-[20px] border border-[#4c505b]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_504_1218)">
                <path
                  d="M10.5 19.1566C6.22417 18.1116 3 13.8125 3 9.15664V5.23996C2.99978 4.91702 3.09339 4.60099 3.26945 4.33026C3.4455 4.05952 3.6964 3.84576 3.99167 3.71497L9.825 1.12329C10.0375 1.02872 10.2674 0.979858 10.5 0.979858C10.7326 0.979858 10.9625 1.02872 11.175 1.12329L17.0083 3.71497C17.3036 3.84576 17.5545 4.05952 17.7306 4.33026C17.9066 4.60099 18.0002 4.91702 18 5.23996V9.15664C18 13.8133 14.7758 18.1125 10.5 19.1566ZM6.67167 9.98997C6.50821 9.99146 6.34879 10.041 6.21327 10.1324C6.07775 10.2238 5.97211 10.353 5.9095 10.504C5.84688 10.655 5.83004 10.8211 5.8611 10.9816C5.89216 11.1421 5.96972 11.2899 6.08416 11.4066L8.24249 13.565C8.32012 13.6424 8.41228 13.7038 8.51366 13.7455C8.61505 13.7873 8.72369 13.8086 8.83333 13.8083C8.94193 13.809 9.04957 13.7879 9.1498 13.7461C9.25003 13.7043 9.3408 13.6427 9.41668 13.565L14.9083 8.07331C14.9956 7.99861 15.0664 7.90667 15.1164 7.80328C15.1665 7.6999 15.1946 7.58729 15.199 7.47252C15.2034 7.35776 15.1841 7.24331 15.1422 7.13637C15.1003 7.02943 15.0368 6.9323 14.9555 6.85108C14.8743 6.76987 14.7772 6.70631 14.6703 6.66442C14.5633 6.62252 14.4489 6.60322 14.3341 6.60766C14.2194 6.61209 14.1068 6.64019 14.0034 6.69021C13.9 6.74022 13.808 6.81105 13.7333 6.89828L8.83333 11.7983L7.25832 10.2325C7.18132 10.1552 7.08975 10.094 6.9889 10.0523C6.88805 10.0107 6.77994 9.98949 6.67083 9.98997H6.67167Z"
                  fill="#A3A5A8"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_504_1218">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5 -0.0100098)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end  gap-2 pt-3 pb-[18px]">
          <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative  pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-right text-white">
              امنیت
            </p>
          </div>
          <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden pb-[0.5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-right text-[#a3a5a8]">
              شناسه دوعاملی خود را فعال کنید
            </p>
          </div>
        </div>
<Button w={'150px'} sztext={"10px"} p={'1px'} h={'20px'} value={'فعالسازی شناسه دو عاملی'}/>
      </div>
    </div>
  </div>
  )
}

export default Welcome