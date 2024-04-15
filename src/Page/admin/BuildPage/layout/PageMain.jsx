import React, { useState } from "react";
var num = 0;
import slice from "../../../../state/slice";
import { Pageadmin } from "../../../../state/control";
import { Droppable } from "react-beautiful-dnd";
import { Editor } from "@monaco-editor/react";
function PageMain(props) {
  var { show, refh, data, setCnt, setdata, dropdown } = props;
  // var [edit, setEdit] = useState("");
  data != undefined && (window.data = data);
  refh != undefined && (window.ref = refh);
  show != undefined && (window.show = show);
  const [tr, setr] = useState(0);
  function addSlice(action) {
    var slicdata = structuredClone(slice[action.target[1].value]?.slices);
    action.target[0].dataset.dat.split("_").reduce((ob, a, k) => {
      num += 1;
      (ob || {})[a] = {
        ...(ob || {})[a],
        [`row${num}`]: {
          ...slice[action.target[1].value],
          nameRow: `row${num}`,
          num: num,
          slices: {
            ...slicdata,
          },
        },
      };
      return ob || {};
    }, window.data.home.gridDrag);
    data != undefined && setdata({ ...data });
  }

  // function setEditorData(e) {
  //   setCnt(e.target);
  //   setEdit({
  //     element: e.target.parentElement.querySelectorAll("div>*")[0].outerHTML,
  //   });
  // }
  function controlManager(e) {
    setr(tr + 1);

    [
      ...window.ref.current.querySelectorAll('input[name*="margin_"]'),
      ...window.ref.current.querySelectorAll('input[name*="padding_"]'),
      ...window.ref.current.querySelectorAll('input[name*="color_"]'),
      ...window.ref.current.querySelectorAll('input[name*="rou_"]'),
      ...window.ref.current.querySelectorAll('input[name*="max_"]'),
    ].map(
      (d) =>
        (d.value = JSON.parse(e.target?.dataset?.control)[
          d?.name?.split("_")[0]
        ][d?.name?.split("_")[1]])
    );

    // data != undefined &&
    setCnt(e.target?.dataset?.uuid);
  }
  function Control(d) {
    if (props !== undefined) {
      return "";
    } else {
      return JSON.stringify({
        max: d.max,
        padding: d.padding,
        margin: d.margin,
        color: { type: "" },
        bg: d.bg,
        rou: d.rou,
        display: d.display,
      });
    }
  }
  function handleEditorChange(va) {
    window?.temp.split("_").reduce((ob, k, a) => {
      if (window?.temp.split("_").length - 1 === a) {
        console.log(((ob || {})[k].tempHTML = va));
      }
      return (ob || {})[k];
    }, window.data.home.gridDrag.grid);
    // document.querySelector(`#${window?.temp}`)["innerHTML "] = va;
    setdata({ ...window.data });
  }
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSlice(e);
        }}
      >
        <fieldset data-dat={`grid_${dropdown}`}>
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
      <div
        className={`w-[${
          window.show ? "100%" : "80%"
        }] flex flex-col justify-between w-full p-5 bg-[#292c34]`}
        onClick={controlManager}
      >
        <div>
          {[
            ...Object.values(
              window.data.home.gridDrag.grid !== undefined &&
                window.data.home.gridDrag.grid
            ),
          ].map((d, i) => (
            <div
              data-control={Control(d)}
              data-type="slice"
              data-uuid={`${d.nameRow}`}
              key={i}
              // onClick={addData}
              className={` relative  ${
                !window.show && "border-[#784ed1] border-[2px] border-dashed"
              } m-2  flex  ${
                window.show ? "" : "bg-[#784ed128] gap-5"
              } ${Pageadmin.controllerSetting("", d)}`}
            >
              {[...Object.values(d.slices)].map((y, ind) => (
                <div
                  data-control={Control(y)}
                  data-type="sli"
                  key={ind}
                  className={`p-2 ${
                    !window.show &&
                    "border-[#784ed1] border-[2px] border-dashed"
                  } m-2 grow-[${y.flexGrow}] ${
                    !window.show && "hover:bg-[#784ed1]"
                  }  overflow-hidden`}
                >
                  {console.log("[]]", y)}
                  <Droppable
                    droppableId={`${d.nameRow}_slices_${y.type}_${d.type}`}
                    key={`${d.nameRow}_slices_${y.type}_${d.type}`}
                  >
                    {(provided, snapshot) => (
                      <div
                        data-control={Control(y)}
                        data-type="sli"
                        data-uuid={`${d.nameRow}_slices_${y.type}`}
                        className={`${
                          window.show ? "" : "p-[10px] "
                        } ${Pageadmin.controllerSetting("", y)}`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {Object.values(y["blockDrag"]).map((b, indx) => (
                          <div
                            // onClick={setEditorData}
                            data-control={Control(b)}
                            data-type="block"
                            key={`${indx}`}
                            // data-uuid={d.uuid}

                            data-uuid={`${d.nameRow}_slices_${y.type}_${b.type}_${d.type}`}
                            className={`flex justify-end  overflow-hidden   ${Pageadmin.controllerSetting(
                              "",
                              y
                            )}`}
                          >
                            <div data-uuid>{b.value({ ...b }, "ghgfh")}</div>
                          </div>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
              {window.show ? (
                ""
              ) : (
                <button
                  data-uuid={d.nameRow}
                  onClick={(e) => (
                    delete window.data.home.gridDrag.grid[
                      e.target.dataset.uuid
                    ],
                    setdata({ ...window.data })
                  )}
                  className="absolute bg-slate-700 text-white rounded-full p-[3px] -top-3 -left-3 text-[10px] w-[2%]"
                >
                  X
                </button>
              )}
            </div>
          ))}
        </div>

        <div className={props ? "hidden" : ""}>
          <div className="flex flex-col justify-start items-start relative overflow-hidden gap-3 px-[17px] py-[18px] rounded-[10px] bg-[#141619]">
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-full h-[46px] relative overflow-hidden p-[18px] rounded-[14px] bg-[#2b2e31]">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[21px] relative">
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M1 5.5L5 1.5L9 5.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>

                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M9 1.5L5 5.5L1 1.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>

              <p className="flex-grow-0 flex-shrink-0  text-sm font-medium text-center text-white">
                html
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-end">
        <Editor
          height="50px"
          theme="vs-dark"
          // defaultLanguage="javascript"
          defaultValue="// some comment"
          value={window.html}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
}

export default PageMain;
