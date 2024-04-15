import block from "./block";
import pages from "./pages";
import slice from "./slice";

var data = { ...pages };

var num = 1;
var va = va++
export const BuildpageController = {
    controller(e){
        console.log(e);
    },
    addSlice(action){
        console.log(action);
        emit(action)
        //   console.log(data);
        // Data={ ...Data, [`row${va}`]: slice[action] } && va
        
    },
    showdata() {
        return data
      }
    // onDragEnd({ destination, source, draggableId, type }){
    //     var test = structuredClone(slice);
    //     test[destination.droppableId.split("_")[2]].slices = {
    //       ...datas.home.gridDrag.grid.set(row)[
    //         destination.droppableId.split("_")[0]
    //       ].slices,
    //       [destination.droppableId.split("_")[1]]: {
    //         ...datas.home.gridDrag.grid.set(row)[
    //           destination.droppableId.split("_")[0]
    //         ].slices[destination.droppableId.split("_")[1]],
    //         blockDrag: {
    //           ...datas.home.gridDrag.grid.set(row)[
    //             destination.droppableId.split("_")[0]
    //           ].slices[destination.droppableId.split("_")[1]].blockDrag,
    //           [`${destination.droppableId.split("_")[0]}_${
    //             destination.droppableId.split("_")[1]
    //           }_${draggableId}_${uuidv4()}`]: {
    //             uuid: `${destination.droppableId.split("_")[0]}_${
    //               destination.droppableId.split("_")[1]
    //             }_${draggableId}_${uuidv4()}`,
    //             ...datas.home.gridDrag.grid.set(row)[
    //               destination.droppableId.split("_")[0]
    //             ].slices[destination.droppableId.split("_")[1]].blockDrag[
    //               draggableId
    //             ],
    //             ...block[draggableId],
    //           },
    //         },
    //       },
    //     };
    //     datas.home.gridDrag.grid.set(row)[destination.droppableId.split("_")[0]] = {
    //       ...test[destination.droppableId.split("_")[2]],
    //     };
    //     setdata({ ...datas });
    // }
}

function emit(action){
    console.log(action);
    data.home = {
        ...data.home,
        gridDrag: {
          ...data.home.gridDrag,
          grid: {
            ...data.home.gridDrag["grid"],
            [num]:action&& { ...slice[action]?.slices},
          },
        },
      };
      num+=1
}