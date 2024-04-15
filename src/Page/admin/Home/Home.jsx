import React from "react";
import UserDetail from "../Dashboard/components/UserDetail";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TabelOrder from "../Dashboard/components/TabelOrder";
import StateCom from "../../../stateDnd/State";

function Home() {
  function onDragEnd({ destination, source, draggableId, type }) {
    console.log(
      destination,
      source,
      draggableId,
      type,
      // StateCom[destination.index],

      // StateCom[source.index]
    );
  }
  return (
    <>
      <UserDetail />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-row-reverse  justify-start flex-wrap items-start self-stretch  [&>*]:w-[39vw] flex-grow-0 flex-shrink-0  gap-4 pr-[15px] pb-[18px]"
            >
              {[...Object.values(StateCom)].map((d, i) => (
                <Draggable key={d.type} draggableId={d.type} index={d.id}>
                  {(provided, snapshot) => (
                    <div
                      key={i}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex-grow"
                    >
                      {d.element()}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <TabelOrder />
    </>
  );
}

export default Home;
