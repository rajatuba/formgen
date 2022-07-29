import React from "react";
//import { Owninput, Owntextarea, Owncheckbox, Ownradio } from "./OwnComponents";
import { OPTIONLIST } from "./TestComponent/OptionElementList";

function ItemOption(props) {
  return (
    <div className="itemOption">
      {OPTIONLIST.map((item, index) => {
        console.log("item", item);

        return React.createElement(item.component, {
          ...item,
          ...props,
          index,
        });
      })}
    </div>
  );
}
export default ItemOption;
