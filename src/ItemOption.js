import React from "react";
import { OwnInput, OwnTextArea, OwnCheckBox, OwnRadio } from "./OwnComponents";
import { OPTIONLIST } from "./TestComponent/OptionElementList";

function ItemOption(props) {
  return (
    <div className="itemOption">
      {OPTIONLIST.map((item) => {
        console.log("option item", item);

        switch (item.type) {
          case "textarea":
            return React.createElement(OwnTextArea, {
              label: item.label,
              placeholder: item.placeholder,
            });
          default:
            return React.createElement(OwnInput, {
              label: item.label,
              placeholder: item.placeholder,
            });
        }
      })}
    </div>
  );
}
export default ItemOption;
