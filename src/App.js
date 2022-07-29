import React, { useState } from "react";
import ItemOption from "./ItemOption";
import { OPTIONLIST } from "./TestComponent/OptionElementList";

import "./Test.css";
import TestComponent from "./TestComponent";
function App() {
  const [creatingNew, setCreatingNew] = useState(false);
  const [elemMove, setElemMove] = useState();
  const [optionIndex, setOptionIndex] = useState(0);
  //const [initialX, setInitalX] = useState(0);
  //const [initialY, setInitalY] = useState(0);
  const [list, setList] = useState([]);
  //const itemRef = React.useRef();
  const dropRef = React.useRef();
  const handleResult = (e) => {
    console.log("result=>", dropRef.current.innerHTML);
    console.log("list", list);
  };
  /*const handleDragStart = (e) => {
    console.log("drag start", e);
    console.log("rect", e.target.getBoundingClientRect());
    const rect = e.target.getBoundingClientRect();
    setInitalX(rect.x);
    setInitalY(rect.y);
    setCreatingNew(true);
  };*/
  const handleDrop = (e) => {
    //console.log("elemMove", elemMove);
    // /console.log("key", elemMove.current.key());
    //console.log("drop", e);
    e.preventDefault();
    let leftX = e.pageX + "px";
    let topY = e.pageY + "px";
    if (creatingNew) {
      console.log("creating new");
      setList((prev) => {
        return [
          ...prev,
          { left: leftX, top: topY, ...OPTIONLIST[optionIndex], move: true },
        ];
      });
      setCreatingNew(false);
    } else {
      elemMove.current.style.left = e.pageX + "px";
      elemMove.current.style.top = e.pageY + "px";
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "all";
  };
  const handleDelete = (e) => {
    let temp = [...list];
    temp.splice(e, 1);
    setList(temp);
  };
  return (
    <div className="testContainer">
      <div
        className="dropContainer"
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {list.map((item, key) => {
          console.log("item map", item);
          return React.createElement(item.component, {
            ...item,
            setElemMove,
            index: key,
            handleDelete,
          });
        })}
      </div>
      <div>
        <ItemOption
          setElemMove={setElemMove}
          setCreatingNew={setCreatingNew}
          setOptionIndex={setOptionIndex}
        />
      </div>
      <button className="resultButton" onClick={handleResult}>
        Final Result
      </button>
    </div>
  );
}
export default App;
