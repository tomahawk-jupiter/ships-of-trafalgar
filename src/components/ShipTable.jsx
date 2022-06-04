import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ships from "../data/shipData";
import SelectFleet from "./inputs/SelectFleet";
import SelectType from "./inputs/SelectType";
import SelectGuns from "./inputs/SelectGuns";
import ShipInput from "./inputs/ShipInput";
import ShipRow from "./ShipRow";

const ShipTable = () => {
  const [shipsArr, setShipsArr] = useState(ships);
  const [input, setInput] = useState("");
  const [selectFleet, setSelectFleet] = useState("Fleet");
  const [selectType, setSelectType] = useState("Type");
  const [selectGuns, setSelectGuns] = useState("Guns");

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
      if (selectFleet !== "Fleet") {
        const namedFiltered = filterByName();
        const filteredFleet = namedFiltered.filter((ship) => {
          return ship.Fleet === selectFleet;
        });
        return filteredFleet;
      }

      if (selectFleet === "Fleet") {
        const namedFiltered = filterByName();
        return namedFiltered;
      }
    };

    const filterByType = () => {
      if (selectType !== "Type") {
        const filteredSoFar = filterByFleet();
        const filteredFleet = filteredSoFar.filter((ship) => {
          return ship.Type === selectType;
        });
        return filteredFleet;
      }

      if (selectType === "Type") {
        const filteredSoFar = filterByFleet();
        return filteredSoFar;
      }
    };

    if (selectGuns !== "Guns") {
      const filteredSoFar = filterByType();
      const gunsMinMax = selectGuns.split("-");
      const minGun = Number(gunsMinMax[0]);
      const maxGun = Number(gunsMinMax[1]);
      const filteredByGuns = filteredSoFar.filter((ship) => {
        return ship.Guns >= minGun && ship.Guns <= maxGun;
      });
      setShipsArr(filteredByGuns);
    }

    if (selectGuns === "Guns") {
      const filteredSoFar = filterByType();
      setShipsArr(filteredSoFar);
    }
  }, [input, selectFleet, selectType, selectGuns, ships]);

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
          <th>
            <SelectGuns setSelectGuns={setSelectGuns} />
          </th>
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
