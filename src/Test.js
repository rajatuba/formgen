import React, { useState } from "react";
import "./Test.css";
import TestComponent from "./TestComponent";
function Test() {
  const [initialX, setInitalX] = useState(0);
  const [initialY, setInitalY] = useState(0);
  const itemRef = React.useRef();
  const dropRef = React.useRef();
  const handleDragStart = (e) => {
    console.log("drag start", e);
    console.log("rect", e.target.getBoundingClientRect());
    const rect = e.target.getBoundingClientRect();
    setInitalX(rect.x);
    setInitalY(rect.y);
  };
  const handleDrop = (e) => {
    console.log("drop", e);
    //e.preventDefault();
    console.log("item ref", itemRef);
    //itemRef.current.style.position = "absolute";
    let left = e.pageX + "px";
    let top = e.pageY + "px";
    console.log("left", left);
    console.log("top", top);
    React.createElement(TestComponent, [left, top]);
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
      ></div>
      <div
        className="testItem"
        draggable
        onDragStart={handleDragStart}
        ref={itemRef}
      >
        Test
      </div>
    </div>
  );
}
export default Test;
