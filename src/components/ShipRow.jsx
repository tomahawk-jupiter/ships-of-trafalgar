import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

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

  const Overlay = ({ name }) => (
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
        <Overlay name={ship.Ship} />
      </td>
      <td>{ship.Type}</td>
      <td>{ship.Guns}</td>
      <td>{ship.Fleet}</td>
    </tr>
  );
};

export default ShipRow;
