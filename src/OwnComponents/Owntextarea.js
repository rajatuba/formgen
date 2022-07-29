import React from "react";
import TextArea from "antd/lib/input/TextArea";

export const Owntextarea = (props) => {
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
    console.log("textarea props", props);
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
        <TextArea placeholder={props.placeholder}></TextArea>
      </label>
    );
  };
  export default Owntextarea;