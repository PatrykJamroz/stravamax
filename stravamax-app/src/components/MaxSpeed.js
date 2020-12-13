import React, { useState } from "react";
import "../styles/MaxSpeed.css";
import "../styles/Button.css";

function MaxSpeed(props) {
  const [unit, setUnit] = useState("metric");

  function changeUnit() {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  }

  //The maximum speed is in meters per second

  return (
    <div className="MaxSpeed">
      <h3>
        Max speed:{" "}
        {unit === "imperial"
          ? `${(props.maxSpeed * 2.24).toFixed(1)} mph`
          : `${(props.maxSpeed * 3.599).toFixed(1)} kmh`}
      </h3>
      <button className="Button" onClick={changeUnit}>
        Change to {unit === "metric" ? "mph" : "kmh"}
      </button>
    </div>
  );
}

export default MaxSpeed;
