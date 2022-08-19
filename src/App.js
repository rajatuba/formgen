import React, { useEffect, useState } from "react";
import { Checkbox, Modal } from "antd";
import { useForm } from "react-hook-form";
const DATA = [
  { value: "first", label: "First" },
  { value: "second", label: "Second" },
  { value: "third", label: "Third" },
];
function App() {
  const [children, setChildren] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalList, setModalList] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("data", data);
  useEffect(() => {
    setChildren(DATA);
  }, []);

  useEffect(() => {
    setModalList(children);
  }, [children]);

  const handleModalShow = () => {
    setModalVisible(true);
    setModalList(children);
  };
  const handleModalUpdate = () => {
    console.log("modalList", modalList);
    setChildren(modalList);
    setModalVisible(false);
  };
  const handleAddCheckbox = () => {
    let temp = [...modalList];
    temp.push({ value: "new", label: "new" });
    setModalList(temp);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleLabelChange = (index, label) => {
    console.log("index", index, "\n label", label);
    let temp = [...modalList];
    temp[index].label = label;
    setModalList(temp);
  };
  const handleValueChange = (index, value) => {
    if (value.length === 0) {
      return alert("value can't be null");
    }
    let temp = [...modalList];
    temp[index].value = value;
    setModalList(temp);
  };
  const handleDelete = (index) => {
    let temp = [...modalList];
    temp.splice(index, 1);
    console.log("temp delete", temp);
    setChildren(temp);
  };
  console.log("children", children);
  return (
    <>
      {children?.map((item, i) => {
        console.log("child item", item);
        return (
          <>
            <label key={i}>
              {item.label}
              <input type="checkbox" value={item.value} />
            </label>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </>
        );
      })}
      <button type="submit">Submit</button>
      <button onClick={handleModalShow}>Edit</button>
      <Modal
        visible={modalVisible}
        onOk={handleModalUpdate}
        onCancel={handleModalClose}
        destroyOnClose
        okText="Update"
      >
        {modalList?.map((item, i) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {i + 1}
              <label>
                Label :
                <input
                  type="text"
                  onChange={(e) => handleLabelChange(i, e.target.value)}
                  defaultValue={item.label}
                />
              </label>
              <label>
                Value:
                <input
                  type="text"
                  onChange={(e) => handleValueChange(i, e.target.value)}
                  defaultValue={item.value}
                />
              </label>
            </div>
          );
        })}
        <button onClick={handleAddCheckbox}>Add New</button>
      </Modal>
    </>
  );
}
export default App;
