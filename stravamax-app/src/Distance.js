import React, { useState } from "react";

function Distance(props) {
  const [unit, setUnit] = useState("metric");

  function changeUnit() {
    setUnit(unit === "metric" ? "imperial" : "metric");
  }

  return (
    <div>
      <h3>
        Distance:{" "}
        {unit === "metric"
          ? `${(props.distance / 1000).toFixed(1)} km`
          : `${(props.distance / 1609.344).toFixed(1)} mi`}
      </h3>
      <button onClick={changeUnit}>
        Change to {unit === "metric" ? "mi" : "km"}
      </button>
    </div>
  );
}

export default Distance;
