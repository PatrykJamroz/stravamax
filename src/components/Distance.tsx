import React, { useState } from "react";
import { Unit } from "./MaxSpeed";
import {
  ConvertButton,
  ItemParagraphs,
  Container,
  IconImg,
} from "./StyledComponents";

export function Distance(props: { distance: number }) {
  const [unit, setUnit] = useState<Unit>("metric");

  function changeUnit() {
    setUnit(unit === "metric" ? "imperial" : "metric");
  }

  return (
    <Container>
      <ItemParagraphs style={{ marginBottom: 0 }}>
        <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/ruler.png" />
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
