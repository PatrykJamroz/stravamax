import React, { useState } from "react";

function MaxSpeed(props) {
  const [unit, setUnit] = useState("metric");

  function changeUnit() {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  }

  //The maximum speed of this lat, in meters per second

  return (
    <div>
      <h3>
        Max speed:{" "}
        {unit === "imperial"
          ? `${(props.maxSpeed * 2.24).toFixed(1)} mph`
          : `${(props.maxSpeed * 3.599).toFixed(1)} kmh`}
      </h3>
      <button onClick={changeUnit}>
        Change to {unit === "metric" ? "mph" : "kmh"}
      </button>
    </div>
  );
}

export default MaxSpeed;
