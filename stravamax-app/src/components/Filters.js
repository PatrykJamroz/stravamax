import React, { useContext } from "react";
import { Context } from "../Context";
import { Button } from "./StyledComponents";

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
      <label>
        <Button onClick={clearFilters}>All</Button>
        <Button onClick={filterByRun}>Run</Button>
        <Button onClick={filterByRide}>Ride</Button>
      </label>
      <br />
      <label>
        <Button onClick={sortByMaxSpeed}>Sort by Max Speed</Button>
        <Button onClick={sortByMaxHr}>Sort by Max HR</Button>
      </label>
    </div>
  );
}

export default Filters;
