import React from "react";

function MaxSpeed(props) {
  return <h3>Max speed: {(props.maxSpeed * 3.599).toFixed(1)} km/h</h3>;
}

export default MaxSpeed;
