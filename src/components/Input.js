import React from "react";

function Input(props) {
  return (
    <div>
      {props.type === "option" ? (
        <select>
          {props.optionList.map((item) => {
            return <option value={item.value}>{item.name}</option>;
          })}
        </select>
      ) : (
        <label>
          {props.label ? props.label : "Input Label"}
          <input
            type={props.type ? props.type : "text"}
            placeholder={
              props.placeholder ? props.placeholder : "Text in input"
            }
          />
        </label>
      )}
    </div>
  );
}
export default Input;
