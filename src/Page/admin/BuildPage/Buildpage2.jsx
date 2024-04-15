import { v4 as uuidv4 } from "uuid";
import React, {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import pages from "../../state/pages";
import slice from "../../state/slice";
import block from "../../state/block";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { HexAlphaColorPicker } from "react-colorful";
import ReactDOM2 from "react-dom/server";
import jmespath from "jmespath";
import Cart from "../../components/Cart";
import Control from "./layout/Control";
import { Pageadmin } from "../../state/control";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";




i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });








var num = 0;
function Buildpage2() {
  React.useLayoutEffect = React.useEffect;
  const { t } = useTranslation();
  const [preview, setPreview] = useState("");
  const [data, setdata] = useState(pages);
  const [cnt, setCnt] = useState("");
  const [setting, setSetting] = useState();
  const [drop, setdrop] = useState("");
  const ref = useRef("");

  const onDragEnd = ({ destination, source, draggableId, type }) => {
    // setdrop()
    var uuid = uuidv4();
    [
      destination.droppableId.split("_")[0],
      destination.droppableId.split("_")[1],
      destination.droppableId.split("_")[2],
      "blockDrag",
    ].reduce((object, key, array) => {
      if (array === 3) {
        (object || {})[key] = {
          ...(object || {})[key],
          [`${draggableId}-${uuid}`]: {
            ...block[draggableId],
            uuid: `${destination.droppableId.split("_")[0]}_slices_${
              destination.droppableId.split("_")[2]
            }_blockDrag_${draggableId}-${uuid}`,
            margin: {
              ...block[draggableId].margin,
            },
          },
        };
      }
      return (object || {})[key]
    }, data.home.gridDrag.grid);
    console.log(data);
  };
  useEffect(() => {
    console.log("[[[[[[[ppppppppppppppppppp", data);
  }, [data]);
  function addSlice(action) {
    var slicdata = structuredClone(slice[action]?.slices);
    // ['gridDrag','grid'].reduce((object, key, array)=>{
    //   console.log((object || {})[key],array);
    //   if (array === 1) {
    //     (object || {})[key] ={
    //       ...(object || {})[key],
    //       [`row${num}`]: {
    //         ...slice[action],
    //         slices:{
    //           ...slicdata,
    //         }
    //       }
    //     }
    //   }
  

    //   return (object || {})[key]
    // },data.home)
    
    data.home = {
      ...data.home,
      gridDrag: {
        ...data.home.gridDrag,
        grid: {
          ...data.home.gridDrag.grid,
          [`row${num}`]: {
            ...slice[action],
            slices: {
              ...slicdata,
            },
          },
        },
      },
    };
    num += 1;
    setdata({ ...data });
  }

  var testcnt = {};
  function cntManager(e) {
    var da = {};
    cnt.split("_").reduce((object, key, array) => {
      console.log(array, key, cnt.split("_").length - 1);
      if (cnt.split("_").length - 1 === array) {
        da = structuredClone({
          [e.target.name.split("_")[0]]: {
            ...(object || {})[key][e.target.name.split("_")[0]],
            [e.target.name.split("_")[1]]: e.target.value,
          },
        });
        (object || {})[key] = { ...(object || {})[key], ...da };
      }
      return (object || {})[key];
    }, data.home.gridDrag.grid);
    setdata({ ...data });
  }
  function PageMain(props) {
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
    return (
      <div
        className={`w-[${props ? "100%" : "80%"}]`}
        onClick={(e) => {
          console.log(e.target.dataset);
          [
            ...ref.current.querySelectorAll('input[name*="margin_"]'),
            ...ref.current.querySelectorAll('input[name*="padding_"]'),
            ...ref.current.querySelectorAll('input[name*="color_"]'),
            ...ref.current.querySelectorAll('input[name*="rou_"]'),
            ...ref.current.querySelectorAll('input[name*="max_"]'),
          ].map((d) =>
            
              (d.value = JSON.parse(e.target.dataset.control)[
                d?.name?.split("_")[0]
              ][d?.name?.split("_")[1]])
            
          );
          setCnt(e.target.dataset.uuid);
          console.log(e.target.dataset.uuid.split('_')[5]);
          setSetting(
            ReactDOM2.renderToString(
              block?.[e.target.dataset.uuid.split('_')[5]]?.Setting(e.target.dataset.uuid)
            )
          );
          console.log(block?.[e.target.dataset.uuid.split('_')[5]]?.Setting(e.target.dataset.uuid),drop);
        }}
      >
        {[
          ...Object.values(
            data.home.gridDrag.grid !== undefined && data.home.gridDrag.grid
          ),
        ].map((d, i) => (
          <div
            data-control={Control(d)}
            data-type="slice"
            data-uuid={`row${i}`}
            key={i}
            // onClick={addData}
            className={` relative flex  ${
              props ? "" : "hover:bg-yellow-300 gap-5"
            } ${Pageadmin.controllerSetting("", d)}`}
          >
            {[...Object.values(d.slices)].map((y, ind) => (
              <div
                data-control={Control(y)}
                data-type="sli"
                key={ind}
                className={`p-2 grow-[${y.flexGrow}] ${
                  props ? "" : "hover:bg-yellow-600"
                }  overflow-hidden`}
              >
                <Droppable
                  droppableId={`row${i}_slices_${y.type}_${d.type}`}
                  key={`row${i}_slices_${y.type}_${d.type}`}
                >
                  {(provided, snapshot) => (
                    <div
                      data-control={Control(y)}
                      data-type="sli"
                      data-uuid={`row${i}_slices_${y.type}`}
                      className={`${
                        props ? "" : "p-[10px]"
                      } ${Pageadmin.controllerSetting("", y)}`}
                      // style={{
                      //   backgroundColor: snapshot.isDraggingOver
                      //     ? "blue"
                      //     : "grey",
                      // }}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {Object.values(y["blockDrag"]).map((b, indx) => (
                        <div
                          onClick={e=>console.log(e,b)}
                          data-control={Control(b)}
                          data-type="block"
                          key={`${indx}`}
                          // data-uuid={d.uuid}
                          data-uuid={`row${i}_slices_${y.type}_${b.type}_${d.type}`}
                          className={`flex justify-end overflow-hidden  ${Pageadmin.controllerSetting(
                            "",
                            y
                          )}`}
                        >
                          {/* {console.log("rtfffff", b)} */}
                          {b.value(
                            {
                              dataMa: `row${i}_slices_${y.type}_${b.type}`,
                              type: "block",
                              uuid: `${b.uuid}`,
                            },
                            { ...b }
                          )}
                        </div>
                      ))}
                      {props ? "" : y.type}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
            {props ? (
              ""
            ) : (
              <button className="absolute bg-slate-700 text-white">X</button>
            )}
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
    <h2 onClick={e=>console.log(t)}>{t('Welcome to React')}</h2>
      <div dangerouslySetInnerHTML={{ __html: preview }}></div>
      <div className="flex justify-center p-2  relative gap-[21px]">
        <div className="flex gap-3">
          <svg
            width={33}
            height={28}
            viewBox="0 0 33 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
            preserveAspectRatio="none"
          >
            <path
              d="M30.6209 0H2.62088C2.09045 0 1.58174 0.210714 1.20667 0.585786C0.831594 0.960859 0.62088 1.46957 0.62088 2L0.62088 20C0.62088 20.5304 0.831594 21.0391 1.20667 21.4142C1.58174 21.7893 2.09045 22 2.62088 22H12.6189C12.6149 23.446 12.5569 25.324 12.0089 26H11.6049C11.4746 26.001 11.3458 26.0277 11.2259 26.0786C11.1059 26.1294 10.9971 26.2033 10.9058 26.2962C10.8144 26.3891 10.7422 26.499 10.6933 26.6198C10.6444 26.7405 10.6198 26.8697 10.6209 27C10.6209 27.552 11.0609 28 11.6049 28H21.6349C21.7653 27.9992 21.8943 27.9727 22.0145 27.922C22.1347 27.8713 22.2437 27.7974 22.3353 27.7045C22.4269 27.6116 22.4992 27.5016 22.5482 27.3807C22.5973 27.2598 22.6219 27.1304 22.6209 27C22.6209 26.448 22.1809 26 21.6369 26H21.2329C20.6829 25.324 20.6269 23.446 20.6229 22H30.6209C31.1513 22 31.66 21.7893 32.0351 21.4142C32.4102 21.0391 32.6209 20.5304 32.6209 20V2C32.6209 1.46957 32.4102 0.960859 32.0351 0.585786C31.66 0.210714 31.1513 0 30.6209 0ZM18.6229 22.004L18.6209 22H18.6229V22.004ZM30.6209 18H2.62088V2H30.6209V18Z"
              fill="black"
            />
          </svg>
          <svg
            width={19}
            height={29}
            viewBox="0 0 19 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M14.7637 0H4.47802C2.35017 0 0.62088 1.72929 0.62088 3.85714V24.4286C0.62088 26.5564 2.35017 28.2857 4.47802 28.2857H14.7637C16.8916 28.2857 18.6209 26.5564 18.6209 24.4286V3.85714C18.6209 1.72929 16.8916 0 14.7637 0ZM12.1923 25.7143H7.04945V24.4286H12.1923V25.7143ZM16.3709 21.8571H2.87088V3.85714H16.3709V21.8571Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSlice(e.target[1].value);
        }}
      >
        <fieldset>
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
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-1 [&>*]:bg-gray-100 [&>*]:rounded-xl">
          {PageMain()}

          <div
            className="w-[20%] bg-black flex flex-col gap-[30px] p-[20px]"
            ref={ref}
          >
            <div className="flex flex-col items-center justify-end md:px-5  md:w-full">
              <div className="flex gap-[20px] items-center justify-end w-full">
                <button
                  className="bg-green-500 text-white p-2 self-end rounded-xl"
                  onClick={(e) => {
                    setPreview(
                      ReactDOM2.renderToString(
                        <DragDropContext onDragEnd={onDragEnd}>
                          <PageMain cnt={true} />
                        </DragDropContext>
                      )
                    );
                  }}
                >
                  منتشر کردن
                </button>
                <button className=" relative overflow-hidden rounded-xl bg-green-500 p-2 self-end">
                  <div className="flex justify-start items-center  gap-6">
                    <svg
                      width={20}
                      height={10}
                      viewBox="0 0 50 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M25 0.714294C15.8594 0.714294 8.73884 6.16072 0 15C7.52232 22.5558 13.8393 29.2857 25 29.2857C36.1496 29.2857 44.3527 20.7589 50 15.1563C44.2187 8.59376 36.0268 0.714294 25 0.714294ZM25 25.1897C19.4866 25.1897 15 20.6138 15 15C15 9.37501 19.4866 4.81028 25 4.81028C30.5134 4.81028 35 9.38617 35 15C35 20.625 30.5134 25.1897 25 25.1897Z"
                        fill="white"
                      />
                      <path
                        d="M25.0001 11.4286C25.0001 10.5469 25.3238 9.74331 25.8484 9.11831C25.5693 9.07367 25.2903 9.05135 25.0001 9.05135C21.7859 9.05135 19.1631 11.7188 19.1631 15C19.1631 18.2813 21.7859 20.9487 25.0001 20.9487C28.2144 20.9487 30.8372 18.2813 30.8372 15C30.8372 14.7433 30.8149 14.4866 30.7926 14.2299C30.1787 14.7098 29.4198 15 28.5827 15C26.5961 15 25.0001 13.404 25.0001 11.4286Z"
                        fill="white"
                      />
                    </svg>
                    <p className=" text-[15px] text-center text-white">نمایش</p>
                  </div>
                </button>
                {/* <div className="bg-black h-px w-full" /> */}
              </div>
            </div>
            <Control cntManager={cntManager} setting={setting} />

            <div className="flex flex-col gap-[47px] items-center justify-center md:px-5 w-[612px] md:w-full">
              <div className="bg-black h-px w-[92%]" />
              <p
                className="sm:text-3xl md:text-[32px] text-[34px] text-center text-red-500 w-[98px]"
                size="txtInterRegular34"
              >
                بلاک ها
              </p>
              <Droppable droppableId="all-columndfg" key="5hgfh">
                {(provided, snapshot) => {
                  return (
                    <div
                      key={"test"}
                      className={`p-5 flex gap-2 flex-wrap`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {[...Object.values(block)].map((d, i) => {
                        return (
                          <>
                            <Draggable
                              draggableId={d.name}
                              index={i}
                              key={d.name}
                            >
                              {(provided) => (
                                <div
                                  className={`${d.class} `}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {d.name}
                                </div>
                              )}
                            </Draggable>
                          </>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
              <div className="flex">
                <button className="bg-green-500 text-white p-2 rounded-xl">
                  export<i className="fa-solid fa-inbox"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </DragDropContext>
    </>
  );
}

export default Buildpage2;
