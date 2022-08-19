import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Button, Col } from "antd";
import GeneratorInput from "./Components/GeneratorInput";
import GeneratorTextarea from "./Components/GeneratorTextarea";
import "antd/dist/antd.min.css";
import "./Test.css";
const DATA = [
  {
    type: "text",
    placeholder: "Testing placeholder",
    label: "testing label",
    name: "testing key",
    required: true,
    defaultValue: "default value",
  },
  {
    type: "textarea",
    placeholder: "Textarea placeholder",
    label: "Textarea label",
    name: "Textarea key",
    required: true,
    defaultValue: "default value",
    rows: 6,
  },
];

export default function Test() {
  const { register, handleSubmit } = useForm();
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(false);

  const handleData = () => {
    let temp = JSON.parse(localStorage.getItem("formBuilder"));
    setList(temp);
  };
  const handleClick = () => {
    handleSubmit();
    setCurrent(current + 1);
  };
  const onSubmit = (data, e) => {
    if (next) {
      setCurrent(current + 1);
      setNext(false);
    }
    console.log(data, e);
  };
  const onError = (errors, e) => {
    setNext(false);
    console.log("errors:", errors, e);
  };
  console.log("list", list);
  return (
    <>
      <button onClick={handleData}>Data</button>
      <div className="testContainer">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Row>
            {list[current]?.map((item, index) => {
              /*<label key={index}>
            {item.label}
            <input {...register(item.name, { required: item.required })} />
        </label>*/

              switch (item.type) {
                case "text":
                  return (
                    <GeneratorInput
                      item={item}
                      register={register}
                      key={index}
                    />
                  );
                case "textarea":
                  return (
                    <GeneratorTextarea
                      item={item}
                      register={register}
                      key={index}
                    />
                  );
                default:
                  return <div>Coming soon</div>;
              }
            })}
          </Row>
          <Row justify="end">
            {current === list.length - 1 ? (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => setNext(true)}
              >
                Next
              </Button>
            )}
          </Row>
        </form>
      </div>
    </>
  );
}
