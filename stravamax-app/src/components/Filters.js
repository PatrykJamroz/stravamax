import React, { useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";
import { Button } from "./StyledComponents";

const ButtonFilters = styled(Button)`
  @media (min-width: 376px) {
    margin-right: 1em;
    display: inline;
  }
`;

function Filters() {
  const {
    filterByRide,
    filterByRun,
    clearFilters,
    sortByMaxSpeed,
    sortByMaxHr,
  } = useContext(Context);

  return (
    <div>
      <div>
        <ButtonFilters onClick={clearFilters}>
          <img
            style={{ verticalAlign: "middle" }}
            src="https://img.icons8.com/ios-filled/24/ffffff/pulse.png"
          />{" "}
          All
        </ButtonFilters>
        <ButtonFilters onClick={filterByRun}>
          <img
            style={{ verticalAlign: "middle" }}
            src="https://img.icons8.com/ios-filled/24/ffffff/running.png"
          />{" "}
          Run
        </ButtonFilters>
        <ButtonFilters onClick={filterByRide}>
          <img
            style={{ verticalAlign: "middle" }}
            src="https://img.icons8.com/ios-filled/24/ffffff/cycling-road--v1.png"
          />{" "}
          Ride
        </ButtonFilters>
      </div>
      <div>
        <ButtonFilters onClick={sortByMaxSpeed}>
          <img
            style={{ verticalAlign: "middle" }}
            src="https://img.icons8.com/ios-filled/24/ffffff/speed.png"
          />{" "}
          Sort by Max Speed
        </ButtonFilters>
        <ButtonFilters onClick={sortByMaxHr}>
          <img
            style={{ verticalAlign: "middle" }}
            src="https://img.icons8.com/ios-filled/24/ffffff/heart-with-pulse--v1.png"
          />{" "}
          Sort by Max HR
        </ButtonFilters>
      </div>
    </div>
  );
}

export default Filters;
