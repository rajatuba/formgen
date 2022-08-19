import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ReactForm() {
  const { register, handleSubmit, unregister } = useForm();

  React.useEffect(() => {
    register("lastName");
  }, [register]);

  return (
    <form>
      <button type="button" onClick={() => unregister("lastName")}>
        unregister
      </button>
      <input type="submit" />
    </form>
  );
}
