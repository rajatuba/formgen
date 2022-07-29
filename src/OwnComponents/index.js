import React from "react";
import { Input, Checkbox, Radio } from "antd";
const { TextArea } = Input;

export const OwnInput = (props) => {
  console.log("input props", props);
  return (
    <label>
      {props.label}
      <Input placeholder={props.placeholder} />
    </label>
  );
};

export const OwnTextArea = (props) => {
  return (
    <label>
      {props.label}
      <TextArea placeholder={props.placeholder}></TextArea>
    </label>
  );
};

export const OwnCheckBox = (props) => {
  return <Checkbox value={props.value}>{props.name}</Checkbox>;
};
export const OwnRadio = (props) => {
  return <Radio value={props.value}>{props.name}</Radio>;
};
