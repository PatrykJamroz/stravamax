import React from "react";

function Distance(props) {
  return <h3>Distance: {(props.distance / 1000).toFixed(1)} km</h3>;
}

export default Distance;
