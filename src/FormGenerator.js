import React from "react";
import { useForm } from "react-hook-form";

const LIST = [
  {
    type: "text",
    component: input,
    label: "Input username",
    name: "username",
    placeholder: "Enter username",
  },
];
function FormGenerator() {
  return <div>Form Generator</div>;
}

export default FormGenerator;
