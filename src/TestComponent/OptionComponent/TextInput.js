import React from "react";

function TextInput(props) {
  const ref = React.useRef();
  const handleDragStart = (e) => {
    console.log("input", e);
    props.setElemMove(ref);
    props.setCreatingNew(true);
  };
  return (
    <input
      key="tewst1"
      ref={ref}
      type="text"
      placeholder="Placeholder Text"
      draggable
      onDragStart={handleDragStart}
    />
  );
}
export default TextInput;
