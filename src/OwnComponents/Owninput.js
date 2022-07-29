import React from "react";
import { Input, Modal } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
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

  const handleDelete = () => {
    console.log("delete", props.index);
    //props.setListIndex(props.index);
    props.handleDelete(props.index);
  };
  console.log("input props", props);
  return (
    <>
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
        {props.move ? (
          <button onClick={handleDelete}>
            <MinusCircleOutlined />
          </button>
        ) : null}
      </label>
    </>
  );
};
export default Owninput;
