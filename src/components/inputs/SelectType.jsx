import React from "react";
import { Form } from "react-bootstrap";

const SelectType = ({ setSelectType }) => {
  return (
    <Form.Select
      onChange={(e) => setSelectType(e.target.value)}
      aria-label="Select ship type"
    >
      <option>Select Type</option>
      <option value="4-decker">4-decker</option>
      <option value="3-decker">3-decker</option>
      <option value="2-decker">2-decker</option>
      <option value="Frigate">Frigate</option>
      <option value="Brig">Brig</option>
      <option value="Cutter">Cutter</option>
      <option value="Schooner">Schooner</option>
    </Form.Select>
  );
};

export default SelectType;
