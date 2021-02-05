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
        <ButtonFilters onClick={clearFilters}>All</ButtonFilters>
        <ButtonFilters onClick={filterByRun}>Run</ButtonFilters>
        <ButtonFilters onClick={filterByRide}>Ride</ButtonFilters>
      </div>
      <div>
        <ButtonFilters onClick={sortByMaxSpeed}>
          Sort by Max Speed
        </ButtonFilters>
        <ButtonFilters onClick={sortByMaxHr}>Sort by Max HR</ButtonFilters>
      </div>
    </div>
  );
}

export default Filters;
