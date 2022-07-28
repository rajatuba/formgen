import React from "react";

function TextareaInput(props) {
  const ref = React.useRef();
  const handleDragStart = (e) => {
    console.log("input", e);
    props.setElemMove(ref);
    props.setCreatingNew(true);
  };
  return (
    <textarea
      value="textarea"
      ref={ref}
      placeholder="Long inputs"
      rows={5}
      cols={30}
      draggable
      onDragStart={handleDragStart}
    />
  );
}
export default TextareaInput;
