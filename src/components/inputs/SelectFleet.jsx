import React from "react";
import { Form } from "react-bootstrap";

const SelectFleet = ({ setSelectFleet }) => {
  return (
    <Form.Select
      onChange={(e) => setSelectFleet(e.target.value)}
      aria-label="Select which countries fleet"
    >
      <option>Fleet</option>
      <option value="Royal Navy">Royal Navy</option>
      <option value="French Navy">French Navy</option>
      <option value="Spanish Navy">Spanish Navy</option>
    </Form.Select>
  );
};

export default SelectFleet;
