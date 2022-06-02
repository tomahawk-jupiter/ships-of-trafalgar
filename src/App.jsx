import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShipTable from "./components/ShipTable";

const App = () => {
  // const [input, setInput] = useState("");

  return (
    <>
      <h1 className="m-2">Ships of Trafalgar</h1>
      {/* <ShipTable userInput={input} setInput={setInput} /> */}
      <ShipTable />
    </>
  );
};

export default App;
