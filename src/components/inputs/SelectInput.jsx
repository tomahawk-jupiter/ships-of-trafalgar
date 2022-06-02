import React from "react";
import { Form } from "react-bootstrap";

const SelectInput = ({ selectInput, setSelectInput }) => {
  return (
    <Form.Select
      onChange={(e) => setSelectInput(e.target.value)}
      aria-label="Default select example"
    >
      <option>Fleet</option>
      <option value="Royal Navy">Royal Navy</option>
      <option value="French Navy">French Navy</option>
      <option value="Spanish Navy">Spanish Navy</option>
    </Form.Select>
  );
};

export default SelectInput;
