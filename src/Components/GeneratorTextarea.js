import React from "react";
import { Col } from "antd";
function GeneratorTextarea(props) {
  const { register, item } = props;
  return (
    <Col span={12}>
      <label>
        {item.label}
        <textarea
          placeholder={item.placeholder || "Enter details"}
          rows={item.rows || 2}
          cols={item.cols || 10}
          {...register(item.name)}
        ></textarea>
      </label>
    </Col>
  );
}

export default GeneratorTextarea;
