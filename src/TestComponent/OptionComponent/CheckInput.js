import React from "react";
import { useForm } from "react-hook-form";

function CheckInput() {
  const { formRef } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("check form", e);
  };
  const handleChange = (e) => {
    console.log("change", e.target.value);
    console.log("name", e.target.name);
    // console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange} ref={formRef}>
        <label>
          PLease select option :
          <div className="checkOptions">
            <label>
              A
              <input name="A-name" type="checkbox" value="A" />
            </label>
            <label>
              B
              <input type="checkbox" value="B" />
            </label>
            <label>
              C
              <input type="checkbox" value="C" />
            </label>
            <label>
              D
              <input type="checkbox" value="D" />
            </label>
          </div>
        </label>
        <button type="submit">Button</button>
      </form>
    </div>
  );
}
export default CheckInput;
