import React from "react";
import PropsChild from "./PropsChild";

const PropsParent = () => {
  const stringPas = "helllo";
  const arr = [1, 2, 3, 4];
  const obj = {
    name: "test",
    age: 22,
    city: "mumbai",
  };

  return (
    <div>
      Parent element
      <PropsChild stringPass={stringPas} arr={arr} obj={obj} />
    </div>
  );
};
export default PropsParent;
