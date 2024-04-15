import React, { useEffect, useRef, useState } from "react";

function Input(props) {
  var [show, setshow] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    show ? (ref.current.type = "text") : (ref.current.type = props.type);
  }, [show]);
  function Valid(e) {
    setshow((show = !show));
  }
  function inp(e) {
    // console.log(e);
  }
  return (
    <>
      <input
        max={props.max}
        min={props.min}
        ref={ref}
        type={props.type}
        onInput={inp}
        className={`${props.class} text-enter border-outset outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none self-stretch flex-grow w-[${props.w}]  h-[${props.h}] relative rounded border border-[${props.colorBorder}] bg-[${props.bg}] text-[${props.colorText}]`}
      />

      <svg
        width={19}
        height={13}
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        onClick={Valid}
        className={`pass absolute top-10 right-1 ${
          props.type != "password" && "hidden"
        }`}
      >
        <path
          // onClick={Valid}
          className="pass"
          d="M9.42857 1.71429C12.6771 1.71429 15.5743 3.54 16.9886 6.42857C15.5743 9.31714 12.6771 11.1429 9.42857 11.1429C6.18 11.1429 3.28286 9.31714 1.86857 6.42857C3.28286 3.54 6.18 1.71429 9.42857 1.71429ZM9.42857 0C5.14286 0 1.48286 2.66571 0 6.42857C1.48286 10.1914 5.14286 12.8571 9.42857 12.8571C13.7143 12.8571 17.3743 10.1914 18.8571 6.42857C17.3743 2.66571 13.7143 0 9.42857 0ZM9.42857 4.28571C10.6114 4.28571 11.5714 5.24571 11.5714 6.42857C11.5714 7.61143 10.6114 8.57143 9.42857 8.57143C8.24571 8.57143 7.28571 7.61143 7.28571 6.42857C7.28571 5.24571 8.24571 4.28571 9.42857 4.28571ZM9.42857 2.57143C7.30286 2.57143 5.57143 4.30286 5.57143 6.42857C5.57143 8.55429 7.30286 10.2857 9.42857 10.2857C11.5543 10.2857 13.2857 8.55429 13.2857 6.42857C13.2857 4.30286 11.5543 2.57143 9.42857 2.57143Z"
          fill="#646464"
          fill-opacity="0.54"
        />
      </svg>

      <svg
        width={17}
        height={17}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

        preserveAspectRatio="none"
        onClick={Valid}
        className={`replay absolute top-3 right-1 ${
          props.type != "cap" && "hidden"
        }`}
      >
        <path
          d="M12.6912 4.65472C11.6684 3.63197 10.219 3.04216 8.62529 3.20531C6.32255 3.43746 4.42764 5.30727 4.17039 7.61001C3.82529 10.6531 6.17823 13.2195 9.14608 13.2195C11.1477 13.2195 12.8669 12.0461 13.67 10.3583C13.8708 9.93785 13.5696 9.45472 13.1053 9.45472C12.8731 9.45472 12.6535 9.58021 12.5531 9.78727C11.8441 11.312 10.1437 12.2783 8.28647 11.8642C6.89352 11.5567 5.77039 10.421 5.47549 9.02805C4.94843 6.59354 6.79941 4.43511 9.14608 4.43511C10.1876 4.43511 11.1163 4.86805 11.794 5.55197L10.8465 6.49943C10.4512 6.89472 10.7272 7.57237 11.2857 7.57237H13.5382C13.8834 7.57237 14.1657 7.29001 14.1657 6.94491V4.69237C14.1657 4.13393 13.4881 3.85158 13.0928 4.24687L12.6912 4.65472Z"
          fill="#646464"
        />
      </svg>
    </>
  );
}
Input.defaultProps = {
  class: "",
  min: "",
  max: "",
  type: "text",
  rout: "",
  sztext: "15px",
  h: "38px",
  colorBorder: "#60626b",
  bg: "#17191c",
  placeholder: "button",
  colorText: "#ffff",
  p: "5px",
  w: "",
};
export default Input;
