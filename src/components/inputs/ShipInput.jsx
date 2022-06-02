import React from "react";
import { FormControl } from "react-bootstrap";

const ShipInput = ({ userInput, setInput }) => {
  return (
    <FormControl
      type="text"
      value={userInput}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Filter Ship Name"
    />
  );
};

export default ShipInput;
