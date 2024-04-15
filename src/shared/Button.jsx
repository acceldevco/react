import React from "react";
import ReactDOM2 from "react-dom/server";
function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.submit}
      className={`${props.class} rounded-[${props.rout}] flex w-[${props.w}] flex-col justify-center self-stretch h-[${props.h}] p-[${props.p}] items-center flex-grow-0 flex-shrink-0  relative rounded bg-[${props.bg}] border border-[${props.colorBorder}]`}
    >
      <p
        className={`flex-grow-0 flex-shrink-0 text-[${props.sztext}] text-center text-[${props.colorText}]`}
      >
        {(props.value)}
      </p>
    </button>
  );
}
Button.defaultProps = {
  type:"",
  rout: "",
  w: "",
  sztext: "15px",
  h: "40px",
  colorBorder: "#784ed1",
  bg: "#784ed1",
  value: "button",
  colorText: "#ffff",
  p: "5px",
  class:"",
  submit:()=>{
    // console.log('dasd');
  },
  
};
export default Button;
