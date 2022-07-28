import React from "react";
import TextInput from "./TestComponent/OptionComponent/TextInput";
import TextareaInput from "./TestComponent/OptionComponent/TextareaInput";

function ItemOption(props) {
  return (
    <div className="itemOption">
      <TextInput {...props} />
      <TextareaInput {...props} />
    </div>
  );
}
export default ItemOption;
