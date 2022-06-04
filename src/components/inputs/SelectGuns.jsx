import React from "react";
import { Form } from "react-bootstrap";

const SelectGuns = ({ setSelectGuns }) => {
  return (
    <Form.Select
      onChange={(e) => setSelectGuns(e.target.value)}
      aria-label="Select ship type"
    >
      <option>Guns</option>
      <option value="1-40">1-40</option>
      <option value="41-80">41-80</option>
      <option value="81-140">81-140</option>
    </Form.Select>
  );
};

export default SelectGuns;
