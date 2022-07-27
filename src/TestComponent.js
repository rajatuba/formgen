import React from "react";

function TestComponent(props) {
  console.log("new elem", props);
  return (
    <div
      className="testItem"
      style={{
        position: "absolute",
        top: `${props.top}`,
        left: `${props.left}`,
      }}
    >
      Testing
    </div>
  );
}
export default TestComponent;
