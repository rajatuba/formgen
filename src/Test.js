import React, { useState } from "react";
import "./Test.css";
import TestComponent from "./TestComponent";
function Test() {
  const [initialX, setInitalX] = useState(0);
  const [initialY, setInitalY] = useState(0);
  const [list, setList] = useState([]);
  const itemRef = React.useRef();
  const dropRef = React.useRef();
  const handleResult = (e) => {
    console.log("result=>", dropRef.current.innerHTML);
  };
  const handleDragStart = (e) => {
    console.log("drag start", e);
    console.log("rect", e.target.getBoundingClientRect());
    const rect = e.target.getBoundingClientRect();
    setInitalX(rect.x);
    setInitalY(rect.y);
  };
  const handleDrop = (e) => {
    console.log("drop", e);
    e.preventDefault();
    console.log("item ref", itemRef);
    //itemRef.current.style.position = "absolute";
    let leftX = e.pageX + "px";
    let topY = e.pageY + "px";
    //console.log("left", left);
    //console.log("top", top);
    setList((prev) => {
      return [...prev, { left: leftX, top: topY }];
    });
    //console.log("elem", elem);

    //React.
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "all";
  };
  return (
    <div>
      <div
        className="dropContainer"
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {list.map((item) => {
          return React.createElement(TestComponent, {
            left: item.left,
            top: item.top,
          });
        })}
      </div>
      <div
        className="testItem"
        draggable
        onDragStart={handleDragStart}
        ref={itemRef}
      >
        Test
      </div>
      <button onClick={handleResult}>Final Result</button>
    </div>
  );
}
export default Test;
