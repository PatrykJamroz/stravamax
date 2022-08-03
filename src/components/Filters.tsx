import React, { useContext } from "react";
import { useAppContext } from "../Context";
import styled from "styled-components";
import { Button, IconImg } from "./StyledComponents";

const ButtonFilters = styled(Button)`
  @media (min-width: 376px) {
    display: inline;
  }
`;

const ButtonFiltersMid = styled(ButtonFilters)`
  @media (min-width: 376px) {
    margin: 0 0.5em;
  }
`;

const ButtonFiltersLeft = styled(ButtonFilters)`
  @media (min-width: 376px) {
    margin: 0 0.5em 0 0;
  }
`;

function Filters() {
  const {
    filterByRide,
    filterByRun,
    clearFilters,
    sortByMaxSpeed,
    sortByMaxHr,
  } = useAppContext();

  return (
    <div>
      <div>
        <ButtonFilters onClick={clearFilters}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/pulse.png" />
          All
        </ButtonFilters>
        <ButtonFiltersMid onClick={filterByRun}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/running.png" />
          Run
        </ButtonFiltersMid>
        <ButtonFilters onClick={filterByRide}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/cycling-road--v1.png" />
          Ride
        </ButtonFilters>
      </div>
      <div>
        <ButtonFiltersLeft onClick={sortByMaxSpeed}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/speed.png" />
          Sort by Max Speed
        </ButtonFiltersLeft>
        <ButtonFilters onClick={sortByMaxHr}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/heart-with-pulse--v1.png" />
          Sort by Max HR
        </ButtonFilters>
      </div>
    </div>
  );
}

export default Filters;
