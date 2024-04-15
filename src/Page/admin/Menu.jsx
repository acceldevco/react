import React, { useEffect, useRef, useState } from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
var stateChild = {
  ch1: {
    name: "ch1",
    parent: "",
  },
};
// var state = {

// };
function Menu() {
  const ref = useRef(null);
  var [menu, setMenu] = useState({});
  var [state,setstate] = useState({});
  useEffect(() => {
    
  }, []);
  // function onDragEnd({ destination, source, draggableId, type }) {
  //   console.log("parent", menu[destination.index], "child", menu[source.index]);
  //   if (destination.index !== undefined && source.index !== undefined) {
  //     [...menu[destination.index].p.split("_")].reduce((object, key, array) => {
  //       (object || {})[key].child = {
  //         ...(object || {})[key].child,
  //         [menu[source.index].n]: {
  //           ...menu[source.index],
  //           p: `${menu[destination.index].p}_${menu[source.index].p}`,
  //           i: 10,
  //         },
  //       };
  //     }, menu);
  //     console.log("-----------------", menu);
  //     delete menu[source.index];
  //     setMenu({ ...menu });
  //   }
  // }
  function Menu(e) {
    console.log(
      e.target.value,
      e,
      ([...document.querySelectorAll("[class*=Menu]")][2].value =
        e.target.value)
    );
  }
  var im = 1
  function addMenu(e) {
    e.preventDefault();

    if (!menu[e.target[0].value]) {
      if (e.target[2].value) {
        [...e.target[2].value.split("_")].reduce((o, k, a) => {
          console.log(e.target[2].value.split("_").length-1);
          // console.log((o || {})[k],o);
          if (e.target[2].value.split("_").length-1 === a) {

            console.log(e.target[2].value.split("_").length-1,a,(o || {})[k]);
            ((o || {})[k].child = {
              ...(o || {})[k].child,

              // ...menu[(o || {})[k].child],
              [e.target[0].value]: {

                ...(o || {})[k].child[e.target[0].value],
                i:im*=2,
                n: e.target[0].value,
                child: {},
                //   ...menu[e.target[0].value],
                p: `${e.target[2].value}_child_${e.target[0].value}`,
              },
            });
            return (o || {})[k]
          }
          im++
          return (o || {})[k];
        }, menu)
      }else{
        menu[e.target[0].value] = {
          ...menu[e.target[0].value],
          n: e.target[0].value,
          link: e.target[1].value,
          p: e.target[0].value,
          i: 1,
          child:{}
        }
      }
    }else{
      alert("این نام وجود دارد")
    }
    setMenu({ ...menu });
  }

  // function Menunested(props) {
  //   var im = 0;
  //   // console.log(Object.keys(props.d.child).length, props.d.child);

  //   return (
  //     <>
  //       {props.d.n === props.d.p && (
  //         <Draggable key={props.d.n} draggableId={props.d.n} index={props.d.p}>
  //           {(provided, snapshot) => (
  //             <div
  //               className={`overflow-hidden bg-[#2b2e31] w-[20%] m-[0px_${
  //                 props.d.i * 30
  //               }px_0px_0px] `}
  //               data-p={props.d.p}
  //               key={props.d.i}
  //               ref={provided.innerRef}
  //               {...provided.draggableProps}
  //               {...provided.dragHandleProps}
  //             >
  //               <p className=" font-medium text-center text-white p-2">
  //                 {props.d.n}
  //               </p>
  //             </div>
  //           )}
  //         </Draggable>
  //       )}
  //       {props.d.child != {} &&
  //         [...Object.values(props.d.child)].map((d, i) => (
  //           <>
  //             <Draggable key={d.p} draggableId={d.p} index={d.p}>
  //               {(provided, snapshot) => (
  //                 <div
  //                   className={`overflow-hidden bg-[#2b2e31] w-[20%] m-[0px_${
  //                     d.i * 30
  //                   }px_0px_0px] bg-red-500`}
  //                   data-p={d.p}
  //                   key={d.i}
  //                   ref={provided.innerRef}
  //                   {...provided.draggableProps}
  //                   {...provided.dragHandleProps}
  //                 >
  //                   <Droppable droppableId={d.p} type="task">
  //                     {(provided, snapshot) => (
  //                       <div
  //                         {...provided.droppableProps}
  //                         ref={provided.innerRef}
  //                       >
  //                         <div
  //                           ref={provided.innerRef}
  //                           {...provided.draggableProps}
  //                           {...provided.dragHandleProps}
  //                         >
  //                           <p className=" font-medium text-center text-white p-2">
  //                             {d.n}
  //                           </p>
  //                         </div>
  //                         {/* <Draggable key={d.p} draggableId={d.p} index={d.p}>
  //                           {(provided, snapshot) => (

  //                           )}
  //                         </Draggable> */}
  //                       </div>
  //                     )}
  //                   </Droppable>
  //                 </div>
  //               )}
  //             </Draggable>

  //             <Menunested key={i} d={d} i={i} />
  //           </>
  //         ))}
  //     </>
  //   );
  // }

  function ListMenu(props) {
    console.log(props);
    return [...Object.values(props)].map((d, i) => (
      <div key={i} data-p={d.p} onClick={Menu} className={`mr-${d.i} text-right`}>
        <input
          type="radio"
          id="html"
          className="peer/draft appearance-none absolute p-5"
          name="fav_language"
          value={d.p}
        />
        <label for="html" className="peer-checked/draft:bg-red-500">
          {d.n}{d.i}
        </label>

        {/* <input
          type="radio"
          name=""
          id="lessChecked"
          className=" appearance-none   h-4  peer/draft  rounded-full w-[30px] bg-white checked:bg-green-800 "
        />
        <label htmlFor="lessChecked" className=""></label> */}

        <div>{Object.keys(d.child).length != 0 ? ListMenu(d.child) : ""}</div>
      </div>
    ));
  }
  function Public(params) {
    params.preventDefault()
    state = {
      ...state,
      [document.querySelector('.Public').value]:{
        name:document.querySelector('.Public').value,
        child:{
          ...menu
        }
      }

    }
    menu = {};
    [...document.querySelectorAll('form')].map((d)=>d.reset())
    console.log(localStorage.stateMenu = JSON.stringify(state));
    setMenu({...menu})
    // console.log(state);
    setstate({...state})
  }
  return (
    <div className="flex gap-1 p-5 [&>:nth-child(1)]:w-[80%] [&>:nth-child(2)]:w-[20%] w-full pt-20">
      <div className="bg-[#212529] flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 h-full overflow-hidden rounded-[14px] p-5">
        <div className="bg-[#2b2e31] flex flex-grow-0 flex-shrink-0 gap-2.5 h-20 items-center justify-end overflow-hidden px-[17px] relative">
          <p className="flex-grow-0 flex-shrink-0 text-[34px] font-medium text-center text-white">
            menu1{" "}
          </p>
        </div>
        <div className="flex flex-col text-white items-end flex-grow-0  flex-shrink-0 gap-3 h-[100vh] relative">
          {/* <DragDropContext
            onDragStart={(d) => console.log("Start", d)}
            onDragUpdate={(d) => console.log("Update", d)}
            onBeforeCapture={(d) => console.log("Before", d)}
            onBeforeDragStart={(d) => console.log("BeforeDragStart", d)}
            onDragEnd={onDragEnd}
          >
            <Droppable droppableId="droppable" type="task">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="w-full flex flex-col justify-end items-end"
                >
                  {[...Object.values(menu)].map((d, i) => (
                    <Menunested key={i} d={d} i={i} />
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext> */}

          {[...Object.values(menu)].map((d, i) => (
            <div key={i} data-p={d.p} onClick={Menu} className=" text-right">
              <input
                type="radio"
                id="html"
                className="peer/draft appearance-none absolute p-5"
                name="fav_language"
                value={d.p}
              />
              <label for="html" className="peer-checked/draft:bg-red-500">
                {d.p}
              </label>
              {ListMenu(d.child)}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#212529] flex flex-col flex-grow-0 flex-shrink-0 gap-2  items-center justify-start overflow-hidden px-2.5 py-8 rounded-[14px]">
        <form className="flex gap-5">
        <Input class="Public" placeholder="نام منو"/>
        <Button type="submit" value="انتشار" w="20%" submit={Public}/>

        </form>

        <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[13px] items-center justify-center relative w-full">
          <form
            onSubmit={addMenu}
            className="flex flex-col gap-1 [&>*]:w-full w-full items-center justify-center"
          >
            <p className="flex-grow-0 flex-shrink-0 ] text-right text-sm text-white w-full">
             نام
            </p>
            <Input class="Menu" />
            <p className="flex-grow-0 flex-shrink-0 ] text-right text-sm text-white w-full">
              لینک
            </p>
            <Input class="Menu" />
            <p className="flex-grow-0 flex-shrink-0 ] text-right text-sm text-white w-full">
              فرزند
            </p>
            <Input class="Menu" />
            <Button value="افزودن" w="50%" type="submit" class="self-center" />
          </form>
        </div>
        <div className="bg-[#2b2e31] flex flex-col flex-grow-0 flex-shrink-0 p-2 gap-[42px] items-end justify-start overflow-hidden relative rounded-[15px] w-full">
          <p className="flex-grow-0 flex-shrink-0 h-9 text-sm text-right text-white">
            لیست منو
          </p>
          {[...Object.values(state)].map((d, i) => (
            <div
              key={i}
              className="flex justify-between items-center flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-xl bg-[#373737] p-3"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M9.4158 7.99921L15.7158 1.70921C15.9041 1.52091 16.0099 1.26551 16.0099 0.999209C16.0099 0.732907 15.9041 0.477513 15.7158 0.289209C15.5275 0.100905 15.2721 -0.00488281 15.0058 -0.00488281C14.7395 -0.00488281 14.4841 0.100905 14.2958 0.289209L8.0058 6.58921L1.7158 0.289209C1.52749 0.100905 1.2721 -0.00488258 1.0058 -0.00488257C0.739497 -0.00488257 0.484102 0.100905 0.295798 0.289209C0.107495 0.477513 0.00170684 0.732907 0.00170684 0.999209C0.00170684 1.26551 0.107495 1.52091 0.295798 1.70921L6.5958 7.99921L0.295798 14.2892C0.20207 14.3822 0.127676 14.4928 0.0769072 14.6146C0.0261385 14.7365 0 14.8672 0 14.9992C0 15.1312 0.0261385 15.2619 0.0769072 15.3838C0.127676 15.5056 0.20207 15.6162 0.295798 15.7092C0.388761 15.8029 0.499362 15.8773 0.621222 15.9281C0.743081 15.9789 0.873786 16.005 1.0058 16.005C1.13781 16.005 1.26852 15.9789 1.39038 15.9281C1.51223 15.8773 1.62284 15.8029 1.7158 15.7092L8.0058 9.40921L14.2958 15.7092C14.3888 15.8029 14.4994 15.8773 14.6212 15.9281C14.7431 15.9789 14.8738 16.005 15.0058 16.005C15.1378 16.005 15.2685 15.9789 15.3904 15.9281C15.5122 15.8773 15.6228 15.8029 15.7158 15.7092C15.8095 15.6162 15.8839 15.5056 15.9347 15.3838C15.9855 15.2619 16.0116 15.1312 16.0116 14.9992C16.0116 14.8672 15.9855 14.7365 15.9347 14.6146C15.8839 14.4928 15.8095 14.3822 15.7158 14.2892L9.4158 7.99921Z"
                  fill="#FF0000"
                ></path>
              </svg>
              <p className="flex-grow-0 flex-shrink-0  text-sm text-center text-white">
                {d.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
