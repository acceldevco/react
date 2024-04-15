import React, { useRef } from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { makeRequest } from "../../Services/api";

function Login() {
  const ref = useRef(null);
  var i = 1;
  async function action({ request }) {
    let formData = await request.formData();
    // let intent = formData.get("intent");

    // if (intent === "edit") {
    //   await editSong(formData);
    //   return { ok: true };
    // }

    // if (intent === "add") {
    //   await addSong(formData);
    //   return { ok: true };
    // }

    // throw json(
    //   { message: "Invalid intent" },
    //   { status: 400 }
    // );
  }
  return (
    <div
      ref={ref}
      onInput={(e) => {
        if (e.target.classNameList.contains("cap")) {
          console.log(
            ref.current.querySelector(`.numcap${i}`).value,
            ref.current.querySelector(`.numcap${i}`).focus()
          );
          i++;
          [...ref.current.querySelectorAll("[className*='numcap']")].map((d) =>
            console.log(d.value)
          );
        }
      }}
      className=" relative overflow-hidden bg-[#141619]"
    >
      <div className="bg-[#141619] flex items-center justify-center [&>:nth-child(1)]:w-[60%] [&>:nth-child(2)]:w-[30%]">
        <div
          className="flex justify-center items-center flex-grow-0 flex-shrink-0"
          data-pg-collapsed
        >
          <div className="bg-[#141619] flex flex-col flex-grow  items-center justify-center relative self-stretch">
            <div
              className="flex items-start justify-center p-5"
              data-pg-collapsed
            >
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0  overflow-hidden">
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8  relative overflow-hidden">
                  <svg
                    width="250"
                    height="32"
                    viewBox="0 0 250 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0  h-8 relative"
                    preserveAspectRatio="none"
                  >
                    <g clip-path="url(#clip0_943_75)">
                      <path
                        d="M26.0613 16.1791C26.0613 18.3638 25.8488 20.3674 25.4132 22.1898C24.9776 24.0066 24.3295 25.5744 23.4689 26.8932C22.6084 28.2119 21.5459 29.2307 20.2763 29.9552C19.3573 30.4815 18.3373 30.8155 17.2005 30.9569C14.3212 28.1497 15.543 20.2598 18.5976 19.8806C17.2695 23.7463 18.9748 26.1234 20.4144 26.2593C23.4265 26.5479 26.2207 21.1484 26.0242 14.5547C26.0507 15.0924 26.0613 15.6301 26.0613 16.1791Z"
                        fill="#EFE7FF"
                      ></path>
                      <path
                        d="M27.7687 26.9438C24.6769 30.5661 20.1456 32.7226 17.9675 31.5453C17.6807 31.3925 17.4257 31.2001 17.1973 30.968C18.3341 30.8208 19.3594 30.4869 20.2731 29.9662C21.5427 29.2361 22.5998 28.223 23.4657 26.9042C24.3316 25.5855 24.9797 24.0177 25.41 22.2009C25.8456 20.3784 26.0581 18.3748 26.0581 16.1901C26.0581 15.6411 26.0475 15.1034 26.0156 14.5714V14.5544C25.9838 13.5526 25.8828 12.5225 25.7075 11.4755C24.916 6.82872 22.483 1.39525 20.1881 0.00292969C20.7352 0.155746 21.2665 0.348181 21.7871 0.580235C21.8083 0.580235 21.8349 0.591555 21.8508 0.608534C24.2785 1.71221 28.4752 4.40064 30.632 10.0605C32.7303 15.5506 31.5935 22.4726 27.7687 26.9438Z"
                        fill="#B79EF4"
                      ></path>
                      <path
                        d="M13.0826 12.1037C14.4106 8.24368 12.7054 5.8722 11.2658 5.7307C8.35465 5.44771 5.64539 10.4906 5.64539 16.7731C5.63477 16.575 5.63477 16.3769 5.63477 16.1731C5.63477 13.9658 5.86319 11.9396 6.30411 10.0888C6.74503 8.23236 7.39844 6.63062 8.26965 5.27226C9.14087 3.91389 10.2086 2.8555 11.473 2.09708C12.392 1.55373 13.4013 1.20282 14.5222 1.05566C17.3536 3.90257 16.1265 11.7302 13.0826 12.1037Z"
                        fill="#EFE7FF"
                      ></path>
                      <path
                        d="M11.4881 31.993C11.1109 31.8798 10.7444 31.7609 10.3885 31.6308C10.3566 31.6194 10.33 31.6025 10.2928 31.5911C10.2238 31.5628 10.1441 31.5345 10.0644 31.5006C9.99535 31.4666 9.91567 31.4327 9.83598 31.4044C7.41359 30.3007 3.20095 27.6066 1.03886 21.9411C-0.549509 17.7754 -0.283896 12.7891 1.61259 8.67438C1.68164 8.51024 1.76133 8.35176 1.84101 8.19329C2.00038 7.87634 2.17037 7.56504 2.35099 7.25941C2.69098 6.68777 3.05752 6.14442 3.45063 5.61805C3.58344 5.44826 3.71624 5.27846 3.85968 5.10867C3.8703 5.09169 3.89155 5.06905 3.90749 5.05207C3.92874 5.02377 3.9553 4.99547 3.97655 4.96717C7.0736 1.40146 11.5518 -0.715324 13.7086 0.450606C14.0061 0.614742 14.2717 0.818497 14.5108 1.06187C13.3899 1.21469 12.3806 1.55994 11.4615 2.10328C10.1972 2.86736 9.12945 3.9201 8.25824 5.27846C7.38702 6.63683 6.73362 8.23857 6.2927 10.095C5.85178 11.9458 5.62335 13.972 5.62335 16.1793C5.62335 16.3831 5.62335 16.5812 5.63398 16.7793C5.63398 16.9547 5.63398 17.1359 5.6446 17.3113C5.65522 17.9735 5.70303 18.6414 5.78803 19.3262C5.80397 19.5413 5.83584 19.7507 5.87303 19.9714C5.89428 20.1639 5.92615 20.345 5.95802 20.5374C5.96865 20.6223 5.9899 20.7072 6.00583 20.7921C6.08552 21.2732 6.18645 21.7373 6.2927 22.1958C6.40425 22.6486 6.52644 23.09 6.65924 23.5145C6.66987 23.5598 6.68049 23.5994 6.70174 23.6447C7.82263 27.3576 9.70318 30.9063 11.4881 31.993Z"
                        fill="#B79EF4"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M221.391 31.9895H218.602L231.92 16.2098L219.775 0H226.091L235.263 12.2819L245.597 0H248.408L236.543 14.0421L250.001 31.9895H243.641L233.206 17.97L221.391 31.9895ZM73.6928 0.00585938V23.4037H73.4581L54.8073 0.00585938H49.7771V31.984H52.1804V6.72977H52.3705L72.6532 31.984H76.029V0.00585938H73.6928ZM90.9021 30.7217C92.931 31.565 95.1163 31.9895 97.4525 31.9895C99.0175 31.9895 100.515 31.7971 101.935 31.4122C103.36 31.0273 104.696 30.484 105.931 29.7765C107.166 29.069 108.29 28.2257 109.29 27.2409C110.291 26.2561 111.151 25.1637 111.872 23.9638C112.599 22.7639 113.152 21.4735 113.538 20.0981C113.924 18.7228 114.119 17.2965 114.119 15.8193C114.119 14.3591 113.924 12.9497 113.538 11.597C113.147 10.2443 112.593 8.98785 111.872 7.81626C111.151 6.65033 110.291 5.58628 109.29 4.6241C108.29 3.66193 107.166 2.84125 105.931 2.1564C104.696 1.47156 103.36 0.945196 101.935 0.565986C100.504 0.186775 99.0119 0 97.4469 0C95.882 0 94.3841 0.186775 92.9589 0.565986C91.5337 0.939536 90.2035 1.47156 88.9739 2.1564C87.7443 2.84125 86.6265 3.66193 85.6149 4.6241C84.6088 5.58062 83.7481 6.65033 83.0327 7.81626C82.3229 8.98219 81.7696 10.2443 81.3839 11.597C80.9983 12.9497 80.8027 14.3591 80.8027 15.8193C80.8027 18.0493 81.233 20.1491 82.0882 22.1074C82.9489 24.0714 84.1226 25.7863 85.6205 27.2522C87.1127 28.7181 88.8733 29.8784 90.9021 30.7217ZM102.041 29.369C100.711 30.1048 99.1852 30.467 97.4525 30.467C95.692 30.467 94.1494 30.1048 92.8192 29.369C91.489 28.6389 90.3768 27.6201 89.4713 26.3127C88.5659 25.0052 87.884 23.4601 87.4313 21.6772C86.9786 19.8944 86.7494 17.9417 86.7494 15.8193C86.7494 13.7138 86.973 11.7838 87.4313 10.0293C87.8896 8.27471 88.5659 6.76353 89.4713 5.49572C90.3768 4.22225 91.489 3.2431 92.8192 2.54128C94.1438 1.84511 95.692 1.4942 97.4525 1.4942C99.1852 1.4942 100.711 1.83945 102.041 2.54128C103.371 3.2431 104.489 4.22791 105.4 5.49572C106.311 6.76353 106.999 8.27471 107.463 10.0293C107.927 11.7838 108.156 13.7138 108.156 15.8193C108.156 17.9417 107.927 19.8944 107.463 21.6772C106.999 23.4601 106.311 25.0052 105.4 26.3127C104.489 27.6201 103.371 28.6389 102.041 29.369ZM118.904 0H131.625C133.307 0 134.856 0.186775 136.258 0.565986C137.667 0.945196 138.869 1.47722 139.88 2.16772C140.886 2.85823 141.669 3.69023 142.228 4.6524C142.781 5.62024 143.06 6.67863 143.06 7.8389C143.06 8.72184 142.971 9.51422 142.798 10.2047C142.624 10.8952 142.311 11.5348 141.87 12.1234C141.423 12.712 140.836 13.2667 140.093 13.7874C139.355 14.3081 138.421 14.8458 137.292 15.3891V15.4854C138.421 15.6608 139.439 15.9665 140.344 16.4023C141.249 16.8381 142.021 17.3871 142.669 18.0549C143.312 18.7228 143.809 19.5039 144.156 20.3925C144.502 21.2867 144.681 22.2602 144.681 23.3243C144.681 24.5298 144.424 25.6618 143.904 26.7145C143.39 27.7673 142.647 28.6842 141.691 29.4652C140.73 30.2463 139.573 30.8632 138.215 31.3103C136.856 31.7631 135.336 31.9838 133.654 31.9838H118.904V0ZM124.214 14.4043H130.982C132.044 14.4043 132.989 14.2515 133.816 13.9459C134.643 13.6403 135.342 13.2158 135.912 12.6781C136.482 12.1404 136.918 11.4952 137.209 10.7481C137.505 10.001 137.65 9.19161 137.65 8.32565C137.65 7.39177 137.477 6.54279 137.125 5.77871C136.773 5.01463 136.23 4.35809 135.493 3.81474C134.755 3.26574 133.816 2.84691 132.681 2.55825C131.547 2.2696 130.183 2.12245 128.596 2.12245H124.214V14.4043ZM124.22 29.652H129.954C131.497 29.652 132.832 29.5048 133.967 29.2049C135.101 28.9049 136.04 28.4917 136.778 27.9484C137.516 27.4107 138.064 26.7598 138.421 26.007C138.779 25.2486 138.958 24.4223 138.958 23.5224C138.958 22.5092 138.801 21.5697 138.483 20.6981C138.164 19.8265 137.645 19.0794 136.924 18.4398C136.203 17.8059 135.258 17.3022 134.09 16.9343C132.922 16.5664 131.491 16.3796 129.792 16.3796H124.22V29.652ZM156.663 0H151.348V31.9895H156.663V0ZM188.938 0V2.07717H177.503V31.9952H172.187V2.07717H160.752V0H188.938ZM214.985 2.07717V0H193.02V31.9952H214.985V29.918H198.329V15.5872H209.479V13.5101H198.329V2.07717H214.985Z"
                        fill="#B79EF4"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_943_75">
                        <rect width="250" height="32" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[684.98px] w-[743px] relative overflow-hidden py-[10.398797035217285px]"
              data-pg-collapsed
            >
              <svg
                width="744"
                height="665"
                viewBox="0 0 744 665"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[743px] h-[664.18px] relative"
                preserveAspectRatio="none"
              >
                <g clip-path="url(#clip0_943_84)">
                  <g opacity="0.4">
                    <path
                      d="M719.577 220.131C725.12 220.131 729.613 215.638 729.613 210.096C729.613 204.554 725.12 200.061 719.577 200.061C714.035 200.061 709.542 204.554 709.542 210.096C709.542 215.638 714.035 220.131 719.577 220.131Z"
                      fill="#9371DA"
                    ></path>
                    <path
                      d="M556 163.935C561.542 163.935 566.035 159.442 566.035 153.899C566.035 148.357 561.542 143.864 556 143.864C550.458 143.864 545.965 148.357 545.965 153.899C545.965 159.442 550.458 163.935 556 163.935Z"
                      fill="#9371DA"
                      fill-opacity="0.6"
                    ></path>
                    <g filter="url(#filter0_f_943_84)">
                      <path
                        d="M635.011 342.564C637.782 342.564 640.029 340.317 640.029 337.546C640.029 334.775 637.782 332.528 635.011 332.528C632.24 332.528 629.993 334.775 629.993 337.546C629.993 340.317 632.24 342.564 635.011 342.564Z"
                        fill="#9371DA"
                      ></path>
                    </g>
                    <g filter="url(#filter1_f_943_84)">
                      <path
                        d="M73.1168 271.268C75.888 271.268 78.1345 269.022 78.1345 266.251C78.1345 263.479 75.888 261.233 73.1168 261.233C70.3456 261.233 68.0991 263.479 68.0991 266.251C68.0991 269.022 70.3456 271.268 73.1168 271.268Z"
                        fill="#9371DA"
                      ></path>
                    </g>
                    <path
                      d="M590.042 491.231C592.259 491.231 594.057 489.434 594.057 487.217C594.057 485 592.259 483.203 590.042 483.203C587.825 483.203 586.028 485 586.028 487.217C586.028 489.434 587.825 491.231 590.042 491.231Z"
                      fill="#9371DA"
                      fill-opacity="0.4"
                    ></path>
                    <path
                      d="M733.625 511.159C739.167 511.159 743.66 506.666 743.66 501.123C743.66 495.581 739.167 491.088 733.625 491.088C728.083 491.088 723.59 495.581 723.59 501.123C723.59 506.666 728.083 511.159 733.625 511.159Z"
                      fill="#9371DA"
                      fill-opacity="0.4"
                    ></path>
                    <path
                      d="M353.872 664.425C364.236 664.425 372.638 655.783 372.638 645.123C372.638 634.463 364.236 625.821 353.872 625.821C343.508 625.821 335.107 634.463 335.107 645.123C335.107 655.783 343.508 664.425 353.872 664.425Z"
                      fill="#9371DA"
                    ></path>
                    <path
                      d="M433.073 480.755C438.615 480.755 443.108 476.262 443.108 470.72C443.108 465.178 438.615 460.685 433.073 460.685C427.53 460.685 423.037 465.178 423.037 470.72C423.037 476.262 427.53 480.755 433.073 480.755Z"
                      fill="#9371DA"
                    ></path>
                    <path
                      d="M536.014 398.186C541.556 398.186 546.049 393.693 546.049 388.151C546.049 382.608 541.556 378.115 536.014 378.115C530.471 378.115 525.979 382.608 525.979 388.151C525.979 393.693 530.471 398.186 536.014 398.186Z"
                      fill="#9371DA"
                    ></path>
                    <path
                      d="M457.007 316.305C459.778 316.305 462.025 314.058 462.025 311.287C462.025 308.516 459.778 306.27 457.007 306.27C454.236 306.27 451.989 308.516 451.989 311.287C451.989 314.058 454.236 316.305 457.007 316.305Z"
                      fill="#9371DA"
                    ></path>
                    <g filter="url(#filter2_f_943_84)">
                      <path
                        d="M445.94 209.458C451.482 209.458 455.975 204.965 455.975 199.423C455.975 193.881 451.482 189.388 445.94 189.388C440.398 189.388 435.905 193.881 435.905 199.423C435.905 204.965 440.398 209.458 445.94 209.458Z"
                        fill="#9371DA"
                      ></path>
                    </g>
                    <g filter="url(#filter3_f_943_84)">
                      <path
                        d="M345.143 452.874C350.685 452.874 355.178 448.381 355.178 442.839C355.178 437.296 350.685 432.803 345.143 432.803C339.6 432.803 335.107 437.296 335.107 442.839C335.107 448.381 339.6 452.874 345.143 452.874Z"
                        fill="#9371DA"
                      ></path>
                    </g>
                    <g filter="url(#filter4_f_943_84)">
                      <path
                        d="M217.535 510.779C223.078 510.779 227.571 506.286 227.571 500.744C227.571 495.201 223.078 490.708 217.535 490.708C211.993 490.708 207.5 495.201 207.5 500.744C207.5 506.286 211.993 510.779 217.535 510.779Z"
                        fill="#9371DA"
                        fill-opacity="0.5"
                      ></path>
                    </g>
                    <g filter="url(#filter5_f_943_84)">
                      <path
                        d="M546.737 281.304C552.279 281.304 556.772 276.811 556.772 271.268C556.772 265.726 552.279 261.233 546.737 261.233C541.195 261.233 536.702 265.726 536.702 271.268C536.702 276.811 541.195 281.304 546.737 281.304Z"
                        fill="#9371DA"
                        fill-opacity="0.2"
                      ></path>
                    </g>
                    <path
                      d="M178.167 224.814C182.323 224.814 185.693 221.445 185.693 217.288C185.693 213.131 182.323 209.761 178.167 209.761C174.01 209.761 170.64 213.131 170.64 217.288C170.64 221.445 174.01 224.814 178.167 224.814Z"
                      fill="#9371DA"
                    ></path>
                    <path
                      d="M327.694 168.952C331.851 168.952 335.221 165.582 335.221 161.425C335.221 157.269 331.851 153.899 327.694 153.899C323.538 153.899 320.168 157.269 320.168 161.425C320.168 165.582 323.538 168.952 327.694 168.952Z"
                      fill="#9371DA"
                      fill-opacity="0.4"
                    ></path>
                    <g filter="url(#filter6_f_943_84)">
                      <path
                        d="M290.06 77.6289C295.602 77.6289 300.095 73.1359 300.095 67.5935C300.095 62.0511 295.602 57.5581 290.06 57.5581C284.517 57.5581 280.024 62.0511 280.024 67.5935C280.024 73.1359 284.517 77.6289 290.06 77.6289Z"
                        fill="#9371DA"
                      ></path>
                    </g>
                    <g filter="url(#filter7_f_943_84)">
                      <path
                        d="M39.531 452.874C45.0734 452.874 49.5664 448.381 49.5664 442.839C49.5664 437.296 45.0734 432.803 39.531 432.803C33.9886 432.803 29.4956 437.296 29.4956 442.839C29.4956 448.381 33.9886 452.874 39.531 452.874Z"
                        fill="#9371DA"
                      ></path>
                    </g>
                    <path
                      d="M409.48 46.519C415.022 46.519 419.515 42.026 419.515 36.4836C419.515 30.9412 415.022 26.4482 409.48 26.4482C403.938 26.4482 399.445 30.9412 399.445 36.4836C399.445 42.026 403.938 46.519 409.48 46.519Z"
                      fill="#9371DA"
                    ></path>
                    <g filter="url(#filter8_f_943_84)">
                      <path
                        d="M658.26 26.0918C663.802 26.0918 668.295 21.5988 668.295 16.0564C668.295 10.514 663.802 6.021 658.26 6.021C652.718 6.021 648.225 10.514 648.225 16.0564C648.225 21.5988 652.718 26.0918 658.26 26.0918Z"
                        fill="#9371DA"
                      ></path>
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_943_84"
                    x="620.381"
                    y="322.916"
                    width="29.2592"
                    height="29.2594"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.80595"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter1_f_943_84"
                    x="58.4872"
                    y="251.621"
                    width="29.2592"
                    height="29.259"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.80595"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter2_f_943_84"
                    x="421.487"
                    y="174.97"
                    width="48.9065"
                    height="48.9065"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="7.20893"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter3_f_943_84"
                    x="331.263"
                    y="428.958"
                    width="27.7603"
                    height="27.7603"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="1.92238"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter4_f_943_84"
                    x="197.888"
                    y="481.097"
                    width="39.2946"
                    height="39.2946"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.80595"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter5_f_943_84"
                    x="527.09"
                    y="251.621"
                    width="39.2946"
                    height="39.2946"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.80595"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter6_f_943_84"
                    x="251.189"
                    y="28.7224"
                    width="77.7422"
                    height="77.7422"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="14.4179"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter7_f_943_84"
                    x="0.659901"
                    y="403.968"
                    width="77.7422"
                    height="77.7422"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="14.4179"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter8_f_943_84"
                    x="643.419"
                    y="1.21505"
                    width="29.6827"
                    height="29.6827"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="2.40298"
                      result="effect1_foregroundBlur_943_84"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="clip0_943_84">
                    <rect
                      width="743"
                      height="664.182"
                      fill="white"
                      transform="translate(0.659912 0.729004)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 rounded-[10px] bg-white/[0.01] border border-[#212529]"
          data-pg-collapsed
        >
          <div
            className="bg-[#413825]/60 flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 items-center justify-center  py-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full"
            data-pg-collapsed
          >
            <div className="flex flex-row-reverse justify-between items-center flex-grow-0 flex-shrink-0  relative">
              <div className="flex-grow-0 flex-shrink-0  h-[18px] relative flex">
                <div className="flex flex-col justify-start items-end  pr-1">
                  <p className="flex-grow-0 flex-shrink-0 text-[11.8125px] text-right text-white">
                    مطمئن شوید در دامنه رسمی نوبیتکس هستید{" "}
                  </p>
                </div>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M13.5 6.5H12.75V5C12.75 2.93 11.07 1.25 9 1.25C6.93 1.25 5.25 2.93 5.25 5V6.5H4.5C3.675 6.5 3 7.175 3 8V15.5C3 16.325 3.675 17 4.5 17H13.5C14.325 17 15 16.325 15 15.5V8C15 7.175 14.325 6.5 13.5 6.5ZM6.75 5C6.75 3.755 7.755 2.75 9 2.75C10.245 2.75 11.25 3.755 11.25 5V6.5H6.75V5ZM13.5 15.5H4.5V8H13.5V15.5ZM9 13.25C9.825 13.25 10.5 12.575 10.5 11.75C10.5 10.925 9.825 10.25 9 10.25C8.175 10.25 7.5 10.925 7.5 11.75C7.5 12.575 8.175 13.25 9 13.25Z"
                    fill="#FDA802"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow-0 flex-shrink-0 h-[18px] relative w-[89px]">
                <p className="text-[11.25px] text-left">
                  {" "}
                  <span className="text-[11.25px] text-left text-[#fb3]">
                    https://
                  </span>
                  <span className="text-[11.25px] text-left text-white">
                    nobitex.ir
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col flex-grow-0 flex-shrink-0 items-center justify-start pb-6 pr-px pt-0.5 w-full"
            data-pg-collapsed
          >
            <div
              className="flex flex-col flex-grow-0 flex-shrink-0 gap-6 justify-start p-5 w-full"
              data-pg-collapsed
            >
              <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-[33.8671875px] font-medium text-right text-white">
                  ثبت‌نام در نوبیتکس{" "}
                </p>
              </div>
              <div className="flex flex-row-reverse justify-between items-center flex-grow-0 flex-shrink-0 relative">
                <div className="flex-grow-0 flex-shrink-0 h-[18px] relative">
                  <p className="text-[11.8125px] text-center text-white">
                    قبلا ثبت نام کردید؟{" "}
                  </p>
                </div>
                <div className="flex-grow-0 flex-shrink-0 h-8 relative rounded-[3.2px]">
                  <p className="text-sm font-medium text-center text-[#9f7ef1]">
                    ورود{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0">
                <div
                  className="flex flex-col flex-grow-0 flex-shrink-0 justify-start relative w-full"
                  data-pg-collapsed
                >
                  <div
                    className="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 relative py-2"
                    data-pg-collapsed
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-sm text-right text-white">
                      شماره تلفن همراه{" "}
                    </p>
                  </div>
                  <div className="border border-[#60626b] flex-grow-0 flex-shrink-0 h-[37px] relative rounded w-full"></div>
                </div>
                <div
                  className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative"
                  data-pg-collapsed
                >
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
                    <div
                      className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative"
                      data-pg-collapsed
                    >
                      <p className="flex-grow-0 flex-shrink-0 text-[13.5625px] text-right text-white">
                        رمز عبور{" "}
                      </p>
                    </div>
                  </div>
                  <svg
                    width="362"
                    height="40"
                    viewBox="0 0 362 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 h-[37px] relative w-[360px] w-full"
                    preserveAspectRatio="none"
                  >
                    <rect
                      x="0.5"
                      y="1.3999"
                      width="361"
                      height="38"
                      rx="4.5"
                      stroke="#60626B"
                    ></rect>
                    <path
                      d="M336.429 18.2181C339.677 18.2181 342.574 19.1665 343.989 20.6669C342.574 22.1674 339.677 23.1157 336.429 23.1157C333.18 23.1157 330.283 22.1674 328.869 20.6669C330.283 19.1665 333.18 18.2181 336.429 18.2181ZM336.429 17.3276C332.143 17.3276 328.483 18.7123 327 20.6669C328.483 22.6215 332.143 24.0062 336.429 24.0062C340.714 24.0062 344.374 22.6215 345.857 20.6669C344.374 18.7123 340.714 17.3276 336.429 17.3276ZM336.429 19.5538C337.611 19.5538 338.571 20.0525 338.571 20.6669C338.571 21.2813 337.611 21.78 336.429 21.78C335.246 21.78 334.286 21.2813 334.286 20.6669C334.286 20.0525 335.246 19.5538 336.429 19.5538ZM336.429 18.6634C334.303 18.6634 332.571 19.5627 332.571 20.6669C332.571 21.7711 334.303 22.6705 336.429 22.6705C338.554 22.6705 340.286 21.7711 340.286 20.6669C340.286 19.5627 338.554 18.6634 336.429 18.6634Z"
                      fill="#646464"
                      fill-opacity="0.54"
                    ></path>
                  </svg>
                </div>
                <div
                  className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0"
                  data-pg-collapsed
                >
                  <div
                    className="flex flex-grow-0 flex-shrink-0 justify-end pb-2 relative w-full"
                    data-pg-collapsed
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-right text-[#9f7ef1]">
                      تغییر نوع کپچا{" "}
                    </p>
                  </div>
                  <div
                    className="bg-[#171730] flex flex-grow-0 flex-shrink-0 h-[110px] items-center justify-end relative self-stretch"
                    data-pg-collapsed
                  >
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pr-4 pt-2"
                      data-pg-collapsed
                    >
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#f8f8f8]">
                        من ربات نیستم{" "}
                      </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-[27px] h-[27px] rounded-md bg-[#171730] border-2 border-[#784ed1]"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-grow-0 flex-shrink-0 justify-end relative self-stretch">
                <p className="flex-grow-0 flex-shrink-0 text-[13.5625px] text-center text-white">
                  کد دعوت دارید؟ (اختیاری){" "}
                </p>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 absolute left-0 top-[-0.74px]"
                  preserveAspectRatio="none"
                  
                >
                  <path
                    d="M13.2336 8.40098L10.0002 11.6343L6.76689 8.40098C6.44189 8.07598 5.91689 8.07598 5.59189 8.40098C5.26689 8.72598 5.26689 9.25098 5.59189 9.57598L9.41689 13.401C9.74189 13.726 10.2669 13.726 10.5919 13.401L14.4169 9.57598C14.7419 9.25098 14.7419 8.72598 14.4169 8.40098C14.0919 8.08432 13.5586 8.07598 13.2336 8.40098Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 py-2">
                <div className="flex flex-row-reverse self-stretch flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#a3a5a8]">
                    ثبت‌نام در نوبیتکس به منزله تایید{" "}
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-[11.4375px] text-right text-[#9f7ef1]">
                    قوانین و مقررات{" "}
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-[11.8125px] text-right text-[#a3a5a8]">
                    نوبیتکس می‌باشد{" "}
                  </p>
                </div>
              </div>
              <div
                className="bg-[#814ceb] flex flex-col flex-grow-0 flex-shrink-0 items-center justify-center pb-4 pt-2 relative w-[360px] w-full"
                data-pg-collapsed
              >
                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">
                  ثبت نام{" "}
                </p>
              </div>
              <div
                className="flex flex-row-reverse justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2 pt-[7.5px] pb-[8.5px] rounded-md bg-[#2a2c34] border border-[#2a2c34]"
                data-pg-collapsed
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clip-path="url(#clip0_943_189)">
                    <path
                      d="M15.8348 9.07975C15.8348 8.55308 15.7882 8.05308 15.7082 7.56641H8.1748V10.5731H12.4882C12.2948 11.5597 11.7282 12.3931 10.8882 12.9597V14.9597H13.4615C14.9682 13.5664 15.8348 11.5131 15.8348 9.07975Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M8.17516 16.9001C10.3352 16.9001 12.1418 16.1801 13.4618 14.9601L10.8885 12.9601C10.1685 13.4401 9.25516 13.7334 8.17516 13.7334C6.0885 13.7334 4.32183 12.3268 3.6885 10.4268H1.03516V12.4868C2.3485 15.1001 5.0485 16.9001 8.17516 16.9001Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M3.68814 10.4268C3.52147 9.94682 3.4348 9.43348 3.4348 8.90015C3.4348 8.36682 3.52814 7.85348 3.68814 7.37348V5.31348H1.0348C0.488138 6.39348 0.174805 7.60682 0.174805 8.90015C0.174805 10.1935 0.488138 11.4068 1.0348 12.4868L3.68814 10.4268Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M8.17516 4.06657C9.35516 4.06657 10.4085 4.47324 11.2418 5.26657L13.5218 2.98657C12.1418 1.69324 10.3352 0.899902 8.17516 0.899902C5.0485 0.899902 2.3485 2.6999 1.03516 5.31324L3.6885 7.37324C4.32183 5.47324 6.0885 4.06657 8.17516 4.06657Z"
                      fill="#EA4335"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_943_189">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.00488281 0.899902)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p
                  className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white"
                  data-pg-collapsed
                >
                  ثبت‌نام سریع با گوگل{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

export const LoginLoader = (params) => {
  // makeRequest('/login','post')
};
