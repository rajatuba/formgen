import React from "react";
import TextArea from "antd/lib/input/TextArea";
import { MinusCircleOutlined } from "@ant-design/icons";

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
  const handleDelete = () => {
    console.log("delete", props.index);
    //props.setListIndex(props.index);
    props.handleDelete(props.index);
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
      {props.move ? (
        <button onClick={handleDelete}>
          <MinusCircleOutlined />
        </button>
      ) : null}
    </label>
  );
};
export default Owntextarea;
