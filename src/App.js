import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import { Modal } from "antd";
import "antd/dist/antd.min.css";
import Input from "./components/Input";
import "./App.css";
function App() {
  const [innerHtml, setInnerHtml] = useState("");
  const [visible, setVisible] = useState(false);
  const [inputType, setInputType] = useState("text");
  const [placeholder, setPlaceHolder] = useState("Text in Input");
  const [label, setLabel] = useState("Enter Label");

  //Modal function
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleSubmit = (e) => {
    setVisible(false);
    console.log("e", e);
    let elem = renderToString(
      <Input type={inputType} label={label} placeholder={placeholder} />
    );
    console.log("elem", elem);
    const result = innerHtml + elem;
    setInnerHtml(result);
  };

  //Modal form function
  const handleInputType = (e) => {
    console.log("input type", e.target.value);
    setInputType(e.target.value);
  };
  const handleLabel = (e) => {
    setLabel(e.target.value);
  };
  const handlePlaceholder = (e) => {
    setPlaceHolder(e.target.value);
  };
  function createMarkup() {
    return { __html: innerHtml };
  }

  return (
    <>
      <button onClick={showModal}>Add</button>
      <div className="container" dangerouslySetInnerHTML={createMarkup()}></div>

      <Modal
        title="Input Styling Form"
        visible={visible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <label>
          Please select Input type :
          <select onChange={handleInputType} defaultValue="text">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="file">File</option>
            <option value="option">Option</option>
          </select>
        </label>
        <div>
          <label>
            Enter Label of Input Field : &ensp;
            <input
              type="text"
              placeholder="Enter Label"
              onChange={handleLabel}
            />
          </label>
        </div>
        {inputType !== "option" ? (
          <>
            <div>
              <label>
                Enter Placeholder of Input Field : &ensp;
                <input
                  type="text"
                  placeholder="Enter Label"
                  onChange={handlePlaceholder}
                />
              </label>
            </div>
          </>
        ) : null}
      </Modal>
    </>
  );
}
export default App;
