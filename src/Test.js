import React from "react";
import { Owninput } from "./OwnComponents";

function Test() {
  let temp = {
    component: Owninput,
    label: "test",
    placeholder: "place",
  };
  return React.createElement(temp.component, temp);
}
export default Test;
