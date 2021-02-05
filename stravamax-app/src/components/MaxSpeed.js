import React, { useState } from "react";
import { ConvertButton, ItemParagraphs, Container } from "./StyledComponents";

function MaxSpeed(props) {
  const [unit, setUnit] = useState("metric");

  function changeUnit() {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  }

  //The maximum speed is in meters per second

  return (
    <Container>
      <ItemParagraphs style={{ marginBottom: 0 }}>
        <img
          style={{ verticalAlign: "middle" }}
          src="https://img.icons8.com/ios-filled/24/ffffff/speed.png"
        />{" "}
        Max speed:{" "}
        {unit === "imperial"
          ? `${(props.maxSpeed * 2.24).toFixed(1)} mph`
          : `${(props.maxSpeed * 3.599).toFixed(1)} kmh`}
      </ItemParagraphs>
      <ConvertButton onClick={changeUnit}>
        Change to {unit === "metric" ? "mph" : "kmh"}
      </ConvertButton>
    </Container>
  );
}

export default MaxSpeed;
