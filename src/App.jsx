import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShipTable from "./components/ShipTable";
import trafalgarImage from "./images/trafalgar.jpg";

const App = () => {
  return (
    <>
      <img className="bg-image" src={trafalgarImage} alt="" />
      <div className="container-xxl">
        <h1 className="pt-4">Ships of Trafalgar</h1>
        <p className="fw-light mb-4">
          The Battle of Trafalgar, 21 October 1805, was a naval engagement
          between the British Royal Navy and the combined fleets of the French
          and Spanish Navies. Click on each ship for for info.
        </p>
        {/* <ShipTable userInput={input} setInput={setInput} /> */}
        <div className="container-fluid p-0">
          <ShipTable />
        </div>
      </div>
    </>
  );
};

export default App;
