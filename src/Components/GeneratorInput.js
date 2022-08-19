import { Col } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

const GeneratorInput = (props) => {
  const { register, item } = props;
  return (
    <Col span={12}>
      <label>
        {item.label}
        <input
          type="text"
          placeholder={item.placeholder}
          {...register(item.name, { required: true })}
        />
      </label>
    </Col>
  );
};
export default GeneratorInput;
