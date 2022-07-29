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
    name: "text",
  },
  {
    type: "textarea",
    placeholder: "Multiple Line Text Input",
    label: "TextArea Label",
    component: Owntextarea,
    name: "textarea",
  },
  {
    type: "radio",
    component: Ownradio,
    name: "radio",
    value: "radio",
    defaultChecked: false,
  },
  {
    type: "checkbox",
    component: Owncheckbox,
    name: "checkbox",
    value: "checkbox",
    defaultChecked: false,
  },
];
