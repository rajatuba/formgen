import React from "react";
import PropTypes from "prop-types";
import PropsChild2 from "./PropsChild2";

const PropsChild = ({
  total,
  stringPass = "hi",
  arr = ["1"],
  obj,
  print = () => {},
}) => {
  console.log("func", print);
  return (
    <div>
      <div>Total : {total}</div>
      <div>String : {stringPass}</div>
      {arr.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

PropsChild.propTypes = {
  total: PropTypes.number,
};
PropsChild.defaultProps = {
  total: 10,
};
export default PropsChild;
