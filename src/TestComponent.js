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
      Test Copy
    </div>
  );
}
export default TestComponent;
