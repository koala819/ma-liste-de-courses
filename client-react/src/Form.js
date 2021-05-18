import React from "react";
import AddInput from "./AddInput";
import AddButton from "./AddButton";

function Form() {
  return (
      <form className="flex-form">
          <AddInput />
          <AddButton />
      </form>
  );
}

export default Form;
