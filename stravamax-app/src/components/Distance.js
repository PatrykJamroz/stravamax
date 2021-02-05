import React, { useState } from "react";
import { ConvertButton, ItemParagraphs, Container } from "./StyledComponents";

function Distance(props) {
  const [unit, setUnit] = useState("metric");

  function changeUnit() {
    setUnit(unit === "metric" ? "imperial" : "metric");
  }

  return (
    <Container>
      <ItemParagraphs style={{ marginBottom: 0 }}>
        <img
          style={{ verticalAlign: "middle" }}
          src="https://img.icons8.com/ios-filled/24/ffffff/ruler.png"
        />{" "}
        Distance:{" "}
        {unit === "metric"
          ? `${(props.distance / 1000).toFixed(1)} km`
          : `${(props.distance / 1609.344).toFixed(1)} mi`}
      </ItemParagraphs>
      <ConvertButton onClick={changeUnit}>
        Change to {unit === "metric" ? "mi" : "km"}
      </ConvertButton>
    </Container>
  );
}

export default Distance;
