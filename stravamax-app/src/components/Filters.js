import React, { useContext } from "react";
import { Context } from "../Context";

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
        <button onClick={clearFilters}>All</button>
        <button onClick={filterByRun}>Run</button>
        <button onClick={filterByRide}>Ride</button>
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
