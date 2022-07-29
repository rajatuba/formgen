import React from "react";
import { Input } from "antd";
const Owninput = (props) => {
  const ref = React.useRef();
  const handleDragStart = (e) => {
    console.log("input drag", e);
    props.setElemMove(ref);
    props.setCreatingNew(true);
    props.setOptionIndex(props.index);
  };
  const handleMoveStart = (e) => {
    props.setElemMove(ref);
  };
  console.log("input props", props);
  return (
    <label
      draggable
      onDragStart={props.move ? handleMoveStart : handleDragStart}
      ref={ref}
      style={
        props.move
          ? {
              position: "absolute",
              top: `${props.top}`,
              left: `${props.left}`,
            }
          : null
      }
    >
      {props.label}
      <Input placeholder={props.placeholder} />
    </label>
  );
};
export default Owninput;
