import React from "react";
import { Radio } from "antd";

export const Ownradio = (props) => {
    const ref = React.useRef();
    const handleDragStart = (e) => {
      console.log("input", e);
      props.setElemMove(ref);
      props.setCreatingNew(true);
      props.setOptionIndex(props.index);
    };
    const handleMoveStart = (e) => {
      props.setElemMove(ref);
    };
    return (
      <div
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
        <Radio value={props.value}>{props.name}</Radio>
      </div>
    );
  };
  export default Ownradio;
  