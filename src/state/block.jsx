// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Interweave } from "interweave";
import Button from "../shared/Button";
import ReactDOM2 from "react-dom/server";
import PageMain from "../Page/admin/BuildPage/layout/PageMain";
import pages from "./pages";
import slice from "./slice";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import Quill from "quill";
import useForceUpdate from "use-force-update";
// import store, { settingMenusession } from "./ReduxState";
// import Comforresize from "../Page/buildPage/Comforresize";
// import Cart from "../components/Cart.jsx";

var controller = {
  max: {
    w: "",
    h: "",
  },
  padding: {
    t: 0,
    d: 0,
    l: 0,
    r: 0,
  },
  margin: {
    t: 0,
    d: 0,
    l: 0,
    r: 0,
  },
  color: { type: "" },
  bg: { type: "" },
  rou: {
    size: "",
  },
  display: {
    flex: false,
    dir: "",
    jus: "",
    ite: "",
    gap: "",
  },
};

var Pageadmin = {
  controllerSetting: (te, props) => {
    console.log(te, props);
    return te != ""
      ? `${
          //block
          props?.[te]?.display.flex
            ? `flex justify-${props?.[te]?.display.jus} gap-[${props?.[te]?.display.gap}px] flex-${props?.[te]?.display.dir} items-${props?.[te]?.display.ite}`
            : ""
        } p-[${props?.[te]?.padding.t}px_${props?.[te]?.padding.r}px_${
          props?.[te]?.padding.d
        }px_${props?.[te]?.padding.l}px] m-[${props?.[te]?.margin.t}px_${
          props?.[te]?.margin.r
        }px_${props?.[te]?.margin.d}px_${props?.[te]?.margin.l}px] bg-[${
          props?.[te]?.bg.type
        }] text-[${props?.[te]?.color.type}] rounded-[${
          props?.[te]?.color.type
        }px] max-w-[${props?.[te].max?.w}px] max-h-[${
          props?.[te].max?.h
        }px] bg-[${props?.[te].bg?.type}] rounded-[${props?.[te].rou.size}px]`
      : `${
          //slid
          props?.display.flex
            ? `flex justify-${props?.display.jus} gap-[${props?.display.gap}px] flex-${props?.display.dir} items-${props?.display.ite}`
            : ""
        } p-[${props?.padding.t}px_${props?.padding.r}px_${
          props?.padding.d
        }px_${props?.padding.l}px] m-[${props?.margin.t}px_${
          props?.margin.r
        }px_${props?.margin.d}px_${props?.margin.l}px] bg-[${
          props?.bg.type
        }] text-[${props?.color.type}] rounded-[${props?.color.type}px] bg-[${
          props?.bg?.type
        }] max-w-[${props?.max?.w}px] max-h-[${props?.max?.h}px] rounded-[${
          props?.rou.size
        }px]`;
  },
};
var block = {
  button: {
    type: "button",
    name: "button",
    icon: "",
    edit: "",
    ...controller,
    href: {
      link: "",
    },
    Setting: (props) => {
      // console.log(props);
      return (
        <>
          <input
            name="href_link"
            data-uuid={`${props}_href`}
            type="text"
            className="test"
            placeholder="href"
          />
        </>
      );
    },
    button: {
      ...controller,
    },
    dropdown: { ...controller, slice: {} },
    value: (props) => {
      var cnt = (p) => {
        return {
          "data-uuid": `${props?.uuid}_${p}`,
          "data-control": JSON.stringify(props.button),
          className: `${Pageadmin.controllerSetting("button", props)} ${
            props?.uuid
          }`,
        };
      };
      function Dropdown(params) {
        var [data, setdata] = useState(pages);
        var num = 1;
        useEffect(() => {
          console.log(data);
        }, [data]);
        function addslice(action) {
          action.preventDefault();
          console.log(
            action.target[0].dataset.dat.split("_").reduce((ob, a, k) => {
              return (ob || {})[a];
            }, data.home.gridDrag.grid)
          );
          // console.log(action.target[0].dataset.dat.split('_'),data.home.gridDrag.grid);
          // var slicdata = structuredClone(slice[action.target[1].value]?.slices);
          var slicdata1 = structuredClone(
            slice[action.target[1].value]?.slices
          );
          action.target[0].dataset.dat.split("_").reduce((ob, a, k) => {
            if (action.target[0].dataset.dat.split("_").length - 1 === k) {
              num += 1;
              // console.log((ob || {})[a]);
              (ob || {})[a] = {
                ...(ob || {})[a],
                [`row${num}`]: {
                  // ...(ob || {})[a][`row${num}}`],
                  nameRow: `row${num}`,
                  num: num,
                  slices: {
                    ...slicdata1,
                  },
                },
              };
            }
            return (ob || {})[a];
          }, data.home.gridDrag.grid);
          setdata({ ...data });
        }
        return (
          <>
            <form onSubmit={addslice}>
              <fieldset data-dat={`${props.uuid}_dropdown_slice`}>
                <select name="" id="sli">
                  {[...Object.values(slice)].map((da, i) => (
                    <option value={da.type} key={i}>
                      {da.type}
                    </option>
                  ))}
                </select>
              </fieldset>
              <button type="submit">add</button>
            </form>
            {[
              ...Object.values(
                data.home.gridDrag.grid[props.uuid.split("_")[0]][
                  props.uuid.split("_")[1]
                ][props.uuid.split("_")[2]][props.uuid.split("_")[3]][
                  props.uuid.split("_")[4]
                ].dropdown.slice
              ),
            ].map((d, i) => (
              <>{d.nameRow}</>
            ))}
          </>
        );
      }
      return (
        <div className="">
          <button {...cnt("button")}>Button</button>
          <div {...cnt("dropdown")}>{/* <Dropdown /> */}</div>
        </div>
      );
    },
  },
  div: {
    name: "Code...",
    type: "div",
    edit: "",
    div: {
      ...controller,
    },
    value: (props, edit) => {
      console.log(props);
      // var edits = structuredClone(window?.div !=undefined&& window?.div[props.uuid.split('_')[4]])
      // console.log("window",props.uuid,edits.edit);

      // console.log('dsddsaaaaaa',this.name);
      var cnt = {
        "data-uuid": `${props?.uuid}_div`,
        "data-control": JSON.stringify(props.div),
        className: `${Pageadmin.controllerSetting("div", props)} ${
          props?.uuid
        }`,
      };
      return (
        <div {...cnt}>
          {edit ? (
            <div className="p-5" dangerouslySetInnerHTML={{ __html: edit }} />
          ) : (
            <div>{"</>"}</div>
          )}
        </div>
      );
    },
  },
  megamenu: {
    ...controller,
    type: "megamenu",
    name: "menu",
    icon: "",
    edit: "",
    value: (props, edit) => {
      var cnt = {
        "data-uuid": `${props?.uuid}_div`,
        "data-control": JSON.stringify(props.div),
        className: `${Pageadmin.controllerSetting("", props)} ${props?.uuid}`,
      };

      var io = 0;
      // console.log(data, pad, mar);

      function Mega2(ii) {
        console.log([...Object.values(JSON.parse(localStorage.stateMenu))]);
        console.log(ii);
        return (
          <ul className={`"w-full m-[0px_${(io += 5)}px_0px_0px]`}>
            {[...Object.values(ii.child.child)].map((d, i) => {
              return (
                <div className="w-full" key={i}>
                  <li>
                    <a href={d.link}>{d.n}</a>
                  </li>

                  <Mega2 key={i} child={d}></Mega2>
                </div>
              );
            })}
          </ul>
        );
      }
      return (
        <div
          data-dataMa={`${props?.uuid}`}
          {...cnt}
          // className={` text-[${color}] bg-[${bg}] m-[${mar.t}px_${mar.r}px_${mar.d}px_${mar.l}px] p-[${pad.t}px_${pad.r}px_${pad.d}px_${pad.l}px]`}
        >
          {[...Object.values(JSON.parse(localStorage.stateMenu))].map(
            (d, i) => (
              <ul className="rtl" style={{ direction: "rtl" }} key={i}>
                <li>
                  <a href={d.link}>{d.n}</a>
                </li>

                <Mega2 child={d} key={i} />
              </ul>
            )
          )}
        </div>
      );
    },
    ...controller,
  },
  Temp: {
    type: "Temp",
    name: "</>",
    tempHTML:'some comment',
    value(props) {
      
      function Template(params) {
        return (
          <>
            <div
              id={props.uuid}
              className=""
              onClick={(e) =>
                // console.log((e.currentTarget.innerHTML = props.tempHTML))
                (window.temp = props.uuid,window.html = props.tempHTML)
              }
            >
              <Interweave content={props.tempHTML}/>
             
            </div>
          </>
        );
      }

      return (
        <>
          <Template />
        </>
      );
    },
  },
};
export default block;
