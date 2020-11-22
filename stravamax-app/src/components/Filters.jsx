import React, { useContext } from "react";
import { Context } from "../Context";

export function Filters() {
  const {
    filterByRuns,
    filterByRides,
    clearFilters,
    sortByMaxSpeed,
    sortByMaxHr,
  } = useContext(Context);
  return (
    <div>
      <label>
        <button onClick={clearFilters}>All</button>
        <button onClick={filterByRuns}>Run</button>
        <button onClick={filterByRides}>Ride</button>
      </label>
      <br />
      <label>
        <button onClick={sortByMaxSpeed}>Sort by Max Speed</button>
        <button onClick={sortByMaxHr}>Sort by Max HR</button>
      </label>
    </div>
  );
}

// export default Filters;
