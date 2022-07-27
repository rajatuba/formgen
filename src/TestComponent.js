import React from "react";

function TestComponent(props) {
  console.log("new elem", props);
  return (
    <div
      className="testItem"
      style={{
        position: "absolute",
        top: `${props[0]}`,
        left: `${props[1]}`,
      }}
    >
      Test Copy
    </div>
  );
}
export default TestComponent;
