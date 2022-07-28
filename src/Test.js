import React, { useState } from "react";
import ItemOption from "./ItemOption";
import "./Test.css";
import TestComponent from "./TestComponent";
function Test() {
  const [creatingNew, setCreatingNew] = useState(false);
  const [elemMove, setElemMove] = useState();
  const [initialX, setInitalX] = useState(0);
  const [initialY, setInitalY] = useState(0);
  const [list, setList] = useState([]);
  const itemRef = React.useRef();
  const dropRef = React.useRef();
  const handleResult = (e) => {
    console.log("result=>", dropRef.current.innerHTML);
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
    console.log("elemMove", elemMove);
    console.log("drop", e);
    e.preventDefault();
    let leftX = e.pageX + "px";
    let topY = e.pageY + "px";
    if (creatingNew) {
      setList((prev) => {
        return [...prev, { left: leftX, top: topY }];
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
  return (
    <div className="testContainer">
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
            setElemMove,
          });
        })}
      </div>
      <div>
        <ItemOption setElemMove={setElemMove} setCreatingNew={setCreatingNew} />
      </div>
      <button className="resultButton" onClick={handleResult}>
        Final Result
      </button>
    </div>
  );
}
export default Test;
