import React, { useContext } from "react";
import { Context } from "../Context";

function Filters() {
  const {
    filterRides,
    filterRuns,
    clearFilters,
    sortByMaxSpeed,
    sortByMaxHr,
  } = useContext(Context);
  return (
    <div>
      <label>
        <button onClick={clearFilters}>All</button>
        <button onClick={filterRuns}>Run</button>
        <button onClick={filterRides}>Ride</button>
      </label>
      <br />
      <label>
        <button onClick={sortByMaxSpeed}>Sort by Max Speed</button>
        <button onClick={sortByMaxHr}>Sort by Max HR</button>
      </label>
    </div>
  );
}

export default Filters;
