import React, { useState } from "react";
import ItemOption from "./ItemOption";
import { OPTIONLIST } from "./TestComponent/OptionElementList";
import "antd/dist/antd.min.css";
import "./App.css";
function App() {
  //useState
  const [creatingNew, setCreatingNew] = useState(false);
  const [elemMove, setElemMove] = useState();
  const [optionIndex, setOptionIndex] = useState(0);
  const [list, setList] = useState([]);

  //drop box ref
  const dropRef = React.useRef();

  //final result
  const handleResult = () => {
    console.log("list", list);
  };

  //updating elements data
  const handleUpdate = (data, index) => {
    let updateList = [...list];
    updateList[index] = data;
    setList(updateList);
  };

  //drop control
  const handleDrop = (e) => {
    e.preventDefault();
    let leftX = e.pageX + "px";
    let topY = e.pageY + "px";
    if (creatingNew) {
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

  //deleting element
  const handleDelete = (e) => {
    let temp = [...list];
    temp.splice(e, 1);
    setList(temp);
  };

  return (
    <div className="testContainer">
      {/*Drop Box*/}
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
            item: item,
            setElemMove,
            index: key,
            handleDelete,
            key: key,
            handleUpdate,
          });
        })}
      </div>
      {/*Option Box */}
      <div>
        <ItemOption
          setElemMove={setElemMove}
          setCreatingNew={setCreatingNew}
          setOptionIndex={setOptionIndex}
        />
      </div>
      {/* Final Result */}
      <button className="resultButton" onClick={handleResult}>
        Final Result
      </button>
    </div>
  );
}
export default App;
