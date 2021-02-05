import React, { useState } from "react";
import { ConvertButton } from "./StyledComponents";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function MaxSpeed(props) {
  const [unit, setUnit] = useState("metric");

  function changeUnit() {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  }

  //The maximum speed is in meters per second

  return (
    <Container>
      <h3>
        Max speed:{" "}
        {unit === "imperial"
          ? `${(props.maxSpeed * 2.24).toFixed(1)} mph`
          : `${(props.maxSpeed * 3.599).toFixed(1)} kmh`}
      </h3>
      <ConvertButton onClick={changeUnit}>
        Change to {unit === "metric" ? "mph" : "kmh"}
      </ConvertButton>
    </Container>
  );
}

export default MaxSpeed;
