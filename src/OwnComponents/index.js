import React from "react";
import { Input, Checkbox, Radio } from "antd";
const { TextArea } = Input;



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
