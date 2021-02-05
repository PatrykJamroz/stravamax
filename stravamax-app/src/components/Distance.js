import React, { useState } from "react";
import styled from "styled-components";
import { ConvertButton } from "./StyledComponents";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function Distance(props) {
  const [unit, setUnit] = useState("metric");

  function changeUnit() {
    setUnit(unit === "metric" ? "imperial" : "metric");
  }

  return (
    <Container>
      <h3>
        Distance:{" "}
        {unit === "metric"
          ? `${(props.distance / 1000).toFixed(1)} km`
          : `${(props.distance / 1609.344).toFixed(1)} mi`}
      </h3>
      <ConvertButton onClick={changeUnit}>
        Change to {unit === "metric" ? "mi" : "km"}
      </ConvertButton>
    </Container>
  );
}

export default Distance;
