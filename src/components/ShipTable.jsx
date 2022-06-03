import React, { useEffect, useState } from "react";
import { OverlayTrigger, Table, Popover, Button } from "react-bootstrap";
import ships from "../data/shipData";
import SelectFleet from "./inputs/SelectFleet";
import SelectType from "./inputs/SelectType";
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
  const [selectFleet, setSelectFleet] = useState("Select Fleet");
  const [selectType, setSelectType] = useState("Select Type");
  const header = Object.keys(ships[0]);

  useEffect(() => {
    const filterByName = () => {
      const escapeRegex = (string) => {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      };
      const cleanInput = escapeRegex(input);
      const regex = new RegExp(`^${cleanInput}`, "i");
      const filteredShips = ships.filter((ship) => {
        return regex.test(ship.Ship);
      });
      return filteredShips;
    };

    const filterByFleet = () => {
      /// Filter ships by fleet using select input ///
      if (selectFleet !== "Select Fleet") {
        const namedFiltered = filterByName();
        const filteredFleet = namedFiltered.filter((ship) => {
          return ship.Fleet === selectFleet;
        });
        // setShipsArr(filteredFleet);
        return filteredFleet;
      }

      if (selectFleet === "Select Fleet") {
        const namedFiltered = filterByName();
        // setShipsArr(namedFiltered);
        return namedFiltered;
      }
    };

    /// Select ship type ///
    if (selectType !== "Select Type") {
      // const namedFiltered = filterByName();
      const filteredSoFar = filterByFleet();
      const filteredFleet = filteredSoFar.filter((ship) => {
        return ship.Type === selectType;
      });
      setShipsArr(filteredFleet);
      // return;
    }

    if (selectType === "Select Type") {
      const filteredSoFar = filterByFleet();
      setShipsArr(filteredSoFar);
      // return;
    }
  }, [input, selectFleet, selectType, ships]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <ShipInput userInput={input} setInput={setInput} />
          </th>
          <th>
            <SelectType setSelectType={setSelectType} />
          </th>
          <th>{header[2]}</th>
          <th>
            <SelectFleet setSelectFleet={setSelectFleet} />
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
