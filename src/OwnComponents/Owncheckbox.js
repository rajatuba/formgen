 import React from "react";
 import Checkbox from "antd/lib/checkbox/Checkbox";
export const Owncheckbox = (props) => {
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
        <Checkbox value={props.value}>{props.name}</Checkbox>
      </div>
    );
  };
  export default Owncheckbox;