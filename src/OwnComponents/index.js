import React from "react";
import { Input, Checkbox, Radio } from "antd";
const { TextArea } = Input;

export const Owninput = (props) => {
  console.log("input props", props);
  return (
    <label>
      {props.label}
      <Input placeholder={props.placeholder} />
    </label>
  );
};

export const Owntextarea = (props) => {
  return (
    <label>
      {props.label}
      <TextArea placeholder={props.placeholder}></TextArea>
    </label>
  );
};

export const Owncheckbox = (props) => {
  return <Checkbox value={props.value}>{props.name}</Checkbox>;
};
export const Ownradio = (props) => {
  return <Radio value={props.value}>{props.name}</Radio>;
};
