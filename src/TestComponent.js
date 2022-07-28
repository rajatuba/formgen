import React from "react";

function TestComponent(props) {
  console.log("new elem", props);
  const elemRef = React.useRef();
  const handleDragStart = () => {
    props.setElemMove(elemRef);
    console.log("elemRef:", elemRef);
  };
  return (
    <input
      type="text"
      placeholder="Enter text"
      draggable
      ref={elemRef}
      onDragStart={handleDragStart}
      style={{
        position: "absolute",
        top: `${props.top}`,
        left: `${props.left}`,
      }}
    />
  );
}
export default TestComponent;
