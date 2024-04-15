import React from "react";
import stateIconMenu from "./Icons";
var sta = "";
function Menu(props) {
  return (
    <>
      <div
        className={`${props.class} flex flex-col justify-center items-center  transition-all delay-150 duration-300 w-14 h-full pt-[68px] pb-[280.5px] bg-[#1e2026] `}
      >
        <div className="flex flex-col relative  self-stretch flex-grow-0 w-full flex-shrink-0 h-full ">
          {[...Object.values(stateIconMenu)].map((d, i) => (
            <div
              key={i}
              className="flex  text-right  gap-3 self-stretch flex-grow-0 flex-shrink-0 p-1 justify-between hover:bg-[#784ed1] cursor-point"
            >
              <div className="flex flex-col w-[70%] justify-center items-center flex-grow-0 flex-shrink-0 pt-[7.25px] pb-2">
                <p className="flex-grow-0 flex-shrink-0   text-[15px] text-right text-white">
                  {d.type}
                </p>
              </div>
              <a
                href={d.route}
                className="flex justify-start  items-start  flex-grow-0 flex-shrink-0 relative overflow-hidden p-1 rounded "
              >
                {d.element}
              </a>
            </div>
          ))}
          <div
            onClick={() => (sta = props.nav())}
            className="bg-[#1e2026] -z-50 p-2 absolute text-white rounded-l-[100px] -left-[1.5vw]"
          >
            <svg
              width="8"
              height="10"
              className={`${sta ? "" : "hidden"}`}
              viewBox="0 0 8 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.0125 5.00002L5.09094 1.11877C5.21344 1.00252 5.20906 0.817835 5.08187 0.706272C4.95406 0.59471 4.75219 0.59846 4.63 0.71471L0.339062 4.79815C0.220313 4.91096 0.220313 5.08908 0.339062 5.2019L4.62969 9.28533C4.69219 9.34502 4.77656 9.37502 4.86031 9.37502C4.93969 9.37502 5.01938 9.34815 5.08156 9.29377C5.20875 9.18221 5.21312 8.99752 5.09062 8.88127L1.0125 5.00002Z"
                fill="white"
              />
              <path
                d="M3.5825 5.00002L7.66094 1.11877C7.78344 1.00252 7.77906 0.817835 7.65188 0.706272C7.52406 0.59471 7.32219 0.59846 7.2 0.71471L2.90937 4.79815C2.79063 4.91096 2.79063 5.08908 2.90937 5.2019L7.2 9.28533C7.2625 9.34502 7.34688 9.37502 7.43063 9.37502C7.51 9.37502 7.58969 9.34815 7.65188 9.29377C7.77906 9.18221 7.78344 8.99752 7.66094 8.88127L3.5825 5.00002Z"
                fill="white"
              />
            </svg>

            <svg
              width="8"
              height="10"
              className={`${sta ? "hidden" : ""}`}
              viewBox="0 0 8 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.41768 4.99998L0.339239 8.88123C0.216739 8.99748 0.221113 9.18217 0.348301 9.29373C0.476113 9.40529 0.677988 9.40154 0.800176 9.28529L5.09111 5.20185C5.20986 5.08904 5.20986 4.91092 5.09111 4.7981L0.800488 0.714666C0.737988 0.654978 0.653613 0.624978 0.569863 0.624978C0.490488 0.624978 0.410801 0.651853 0.348613 0.706228C0.221426 0.817791 0.217051 1.00248 0.339551 1.11873L4.41768 4.99998Z"
                fill="white"
              />
              <path
                d="M6.98781 4.99998L2.90938 8.88123C2.78688 8.99748 2.79125 9.18217 2.91844 9.29373C3.04625 9.40529 3.24813 9.40154 3.37031 9.28529L7.66094 5.20185C7.77969 5.08904 7.77969 4.91092 7.66094 4.7981L3.37031 0.714666C3.30781 0.654978 3.22344 0.624978 3.13969 0.624978C3.06031 0.624978 2.98062 0.651853 2.91844 0.706228C2.79125 0.817791 2.78688 1.00248 2.90938 1.11873L6.98781 4.99998Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
