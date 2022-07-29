import React, { useState } from "react";
import { Radio, Modal, Form } from "antd";
import { MinusCircleOutlined, EditOutlined } from "@ant-design/icons";
import { CheckItem, InputItem } from "./commonComp";

const Ownradio = (props) => {
  //useState
  const [showModal, setShowModal] = useState(false);
  const [changes, setChanges] = useState(props.item);

  //modal and form controls
  const handleshowModal = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleChange = (changedField) => {
    let change = changes;
    change[changedField[0].name[0]] = changedField[0].value;
    setChanges(change);
  };
  const handleSubmit = () => {
    props.handleUpdate(changes, props.index);
    setShowModal(false);
  };

  //element reference
  const ref = React.useRef();

  //drag controls
  const handleDragStart = (e) => {
    props.setElemMove(ref);
    props.setCreatingNew(true);
    props.setOptionIndex(props.index);
  };
  const handleMoveStart = (e) => {
    props.setElemMove(ref);
  };

  //delete control
  const handleDelete = () => {
    props.handleDelete(props.index);
  };

  return (
    <div
      draggable
      onDragStart={props.move ? handleMoveStart : handleDragStart}
      ref={ref}
      style={
        props.move
          ? {
              position: "absolute",
              top: `${props.top}`,
              left: `${props.left}`,
            }
          : null
      }
    >
      <Radio value={props.value} checked={props.defaultChecked}>
        {props.name}
      </Radio>
      {props.move ? (
        <>
          <button onClick={handleDelete}>
            <MinusCircleOutlined />
          </button>
          <button onClick={handleshowModal}>
            <EditOutlined />
          </button>
        </>
      ) : null}

      {/* Modal and form for updating */}
      <Modal visible={showModal} onCancel={handleCancel} onOk={handleSubmit}>
        <Form
          initialValues={{
            value: props.value,
            name: props.name,
            defaultChecked: props.defaultChecked,
          }}
          onFieldsChange={handleChange}
        >
          <InputItem name="name" label="Name" />
          <InputItem name="value" label="Value" />
          <CheckItem name="defaultChecked" />
        </Form>
      </Modal>
    </div>
  );
};
export default Ownradio;
