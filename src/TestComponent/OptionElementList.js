// import {  Ownradio } from "../OwnComponents";
import Owninput from "../OwnComponents/Owninput";
import Owntextarea from "../OwnComponents/Owntextarea";
import Owncheckbox from "../OwnComponents/Owncheckbox";
import Ownradio from "../OwnComponents/Ownradiobox";
export const OPTIONLIST = [
  {
    type: "text",
    placeholder: "Single Line Text Input",
    label: "Input label",
    component: Owninput,
  },
  {
    type: "textarea",
    placeholder: "Multiple Line Text Input",
    label: "Input Label",
    component: Owntextarea,
  },
  {
    type: "radio",
    component: Ownradio,
    name: "radio",
    value: "radio",
  },
  {
    type: "checkbox",
    component: Owncheckbox,
    name: "checkbox",
    value: "checkbox",
  },
];
