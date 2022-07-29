import React from "react";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { MinusCircleOutlined } from "@ant-design/icons";

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
  const handleDelete = () => {
    console.log("delete", props.index);
    //props.setListIndex(props.index);
    props.handleDelete(props.index);
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
      {props.move ? (
        <button onClick={handleDelete}>
          <MinusCircleOutlined />
        </button>
      ) : null}
    </div>
  );
};
export default Owncheckbox;
