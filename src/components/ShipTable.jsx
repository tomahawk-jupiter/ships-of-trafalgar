import React, { useEffect, useState } from "react";
import { OverlayTrigger, Table, Popover, Button } from "react-bootstrap";
import ships from "../data/shipData";
import SelectInput from "./inputs/SelectInput";
import ShipInput from "./inputs/ShipInput";

const ShipRow = ({ index, ship }) => {
  const Fate = () => {
    if (ship["Fate on Day"] === ship["Final Fate"]) {
      return `Ship ${ship["Fate on Day"].toUpperCase()}`;
    }
    return `Ship ${ship["Fate on Day"].toUpperCase()} and later ${ship[
      "Final Fate"
    ].toUpperCase()}`;
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{ship.Ship}</Popover.Header>
      <Popover.Body>
        <div>
          {`A ${ship.Guns} gun ${ship.Type} of the ${ship.Fleet}, ${ship["Casualties Percentage"]} casualty rate. Of ${ship.Complement} souls, ${ship.Wounded} wounded and ${ship.Killed} killed.`}
        </div>
        <Fate />
      </Popover.Body>
    </Popover>
  );

  const Example = ({ name }) => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button size="sm" variant="primary">
        {name}
      </Button>
    </OverlayTrigger>
  );

  return (
    <tr>
      <td>{index}</td>
      <td>
        <Example name={ship.Ship} />
      </td>
      <td>{ship.Type}</td>
      <td>{ship.Guns}</td>
      <td>{ship.Fleet}</td>
    </tr>
  );
};

const ShipTable = () => {
  const [shipsArr, setShipsArr] = useState(ships);
  const [input, setInput] = useState("");
  const [selectInput, setSelectInput] = useState("Fleet");
  const header = Object.keys(ships[0]);

  useEffect(() => {
    /// Filter ships by name ///
    const escapeRegex = (string) => {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    };
    const cleanInput = escapeRegex(input);
    const regex = new RegExp(`^${cleanInput}`, "i");
    const filteredShips = ships.filter((ship) => {
      return regex.test(ship.Ship);
    });
    setShipsArr(filteredShips);
    console.log({ selectInput });
    if (selectInput !== "Fleet") {
      const filteredFleet = shipsArr.filter((ship) => {
        return ship.Fleet === selectInput;
      });
      setShipsArr(filteredFleet);
    }
  }, [input, selectInput]);

  // useEffect(() => {
  //   if (selectInput !== "Fleet") {
  //     const filteredFleet = shipsArr.filter((ship) => {
  //       return ship.Fleet === selectInput;
  //     });
  //     setShipsArr(filteredFleet);
  //   }
  // }, [selectInput]);

  return (
    <Table className="m-2" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>
            {/* {header[0]} */}

            <ShipInput userInput={input} setInput={setInput} />
          </th>
          <th>{header[1]}</th>
          <th>{header[2]}</th>
          <th>
            {/* {header[3]} */}
            <SelectInput
              selectInput={selectInput}
              setSelectInput={setSelectInput}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {shipsArr.map((ship, index) => {
          return <ShipRow key={index} index={index} ship={ship} />;
        })}
      </tbody>
    </Table>
  );
};

export default ShipTable;
