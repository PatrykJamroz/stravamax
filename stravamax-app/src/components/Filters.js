import React, { useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";

const Button = styled.button`
  padding: 1em;
  margin-right: 2em;
  background-color: #fc4c02;
  font-weight: 700;
  color: whitesmoke;
  border: none;
  border-radius: 1.5em;
  height: 3em;
  text-decoration: none;
  margin-bottom: 1em;
  outline: none;
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
