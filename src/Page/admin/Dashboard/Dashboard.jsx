import React, { useEffect, useState } from "react";
import "../../../style/style.css";
import Header from "./Layout/Header";
import Menu from "./Layout/Menu/Menu";
import UserDetail from "./components/UserDetail";
import Footer from "./Layout/Footer";
import TabelOrder from "./components/TabelOrder";
import BagMe from "./components/BagMe";
import TransactionFees from "./components/TransactionFees";
import Notice from "./components/Notice";
import Welcome from "./components/Welcome";
import Reminder from "./components/Reminder";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import StateCom from "../../../stateDnd/State";
import { Outlet } from "react-router-dom";

// import { connectToDevTools } from 'react-devtools-core';
// // console.log(startServer)
// console.log(connectToDevTools({
//   host: 'localhost',
//   port: 1234,
//   resolveRNStyle: null,
//   isAppActive: () => true,
// }))

// overrideHookState(Dashboard(), 'useState', (args) => {
//   console.log(args)
//   return [10, () => {}]; // Override hook state to return initial value of 10
// });
//
// overrideProps(Dashboard, (props) => {
//   return { ...props, color: 'red' }; // Override props to add a new prop 'color' with value 'red'
// });
var Data = {
  hidsho: true,
};
function Storage(params) {}
Dashboard.defaultProps = {
  Data: {
    hidsho: true,
  },
  Media: `flex flex-row-reverse 
  [&>div:nth-child(1)>div:nth-child(1)>div>div:nth-child(1)]:${
    Data.hidsho ? "hidden" : "show"
  }
   [&>div:nth-child(2)]:w-[${Data.hidsho ? "97%" : "85%"}] 
   [&>div:nth-child(1)]:w-[${Data.hidsho ? "3%" : "15%"}] 
   [&>div:nth-child(1)>div>div>div:nth-child(2)]:w-[${
     Data.hidsho ? "100%" : "13%"
   }] 
  `,
};
function Dashboard(props) {
  var [Data, setData] = useState(true);
  const [d, setd] = useState();
  function onDragEnd({ destination, source, draggableId, type }) {
    console.log(
      destination,
      source,
      draggableId,
      type,
      StateCom[destination.index],

      StateCom[source.index]
    );
  }
  function nav(params) {
    console.log(params);
    // localStorage.test = JSON.stringify({});
    // setd(1);
    setData((Data = !Data));
    return Data
  }
  return (
    <div >
      <div
        id="Dashboard"
        className={`test flex flex-row-reverse 
        [&>div:nth-child(2)]:w-[100%] 

        [&>div:nth-child(1)]:w-[${Data ? "3%" : "15%"}] 
        [&>div:nth-child(1)>div>div>div:nth-child(2)]:w-[${
          Data ? "100%" : "13%"
        }] 
        
        [&>div:nth-child(1)>div:nth-child(1)>div>div:nth-child(1)]:${
          Data ? "hidden" : "show"
        }
       `}
      >
        <Menu class="fixed z-10 h-[100vh]"  nav={nav}/>
        <div className="relative bg-black">
          <div className="bg-black">
            <div className="flex flex-col bg-black justify-start items-start   w-full">
              <Header />
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  pl-[17px] pr-8 py-4 w-full">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-full p-5">
                  <Outlet />
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row-reverse justify-center items-center w-[180.63px] h-10 fixed top-[85%] z-50 overflow-hidden px-4 rounded-[53px] bg-[#784ed1]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
          <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-white">
            پشتیبانی نوبیتکس
          </p>
        </div>
        <svg
          width={41}
          height={40}
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
          preserveAspectRatio="none"
        >
          <rect x="0.814941" width={40} height={40} rx={20} fill="#784ED1" />
          <g clip-path="url(#clip0_523_741)">
            <path
              d="M31.6149 19.064C31.6149 12.476 26.5029 8 20.8149 8C15.1869 8 10.0149 12.38 10.0149 19.136C9.29494 19.544 8.81494 20.312 8.81494 21.2V23.6C8.81494 24.92 9.89494 26 11.2149 26H12.4149V18.68C12.4149 14.036 16.1709 10.28 20.8149 10.28C25.4589 10.28 29.2149 14.036 29.2149 18.68V27.2H19.6149V29.6H29.2149C30.5349 29.6 31.6149 28.52 31.6149 27.2V25.736C32.3229 25.364 32.8149 24.632 32.8149 23.768V21.008C32.8149 20.168 32.3229 19.436 31.6149 19.064Z"
              fill="white"
            />
            <path
              d="M17.2151 21.2C17.8779 21.2 18.4151 20.6627 18.4151 20C18.4151 19.3373 17.8779 18.8 17.2151 18.8C16.5524 18.8 16.0151 19.3373 16.0151 20C16.0151 20.6627 16.5524 21.2 17.2151 21.2Z"
              fill="white"
            />
            <path
              d="M24.4148 21.2C25.0776 21.2 25.6148 20.6627 25.6148 20C25.6148 19.3373 25.0776 18.8 24.4148 18.8C23.7521 18.8 23.2148 19.3373 23.2148 20C23.2148 20.6627 23.7521 21.2 24.4148 21.2Z"
              fill="white"
            />
            <path
              d="M28.0156 17.636C27.4396 14.216 24.4636 11.6 20.8756 11.6C17.2396 11.6 13.3276 14.612 13.6396 19.34C16.6036 18.128 18.8356 15.488 19.4716 12.272C21.0436 15.428 24.2716 17.6 28.0156 17.636Z"
              fill="white"
            />
          </g>
          <defs>
            <clippath id="clip0_523_741">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(8.81494 8)"
              />
            </clippath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Dashboard;
