import { Owncheckbox, Owntextarea, Ownradio } from "../OwnComponents";
import Owninput from "../OwnComponents/Owninput";
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
