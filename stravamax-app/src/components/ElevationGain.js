import React from "react";
import { ItemParagraphs } from "./StyledComponents";

function ElevationGain(props) {
  return (
    <ItemParagraphs>Elevation gain: {props.elevationGain} m</ItemParagraphs>
  );
}

export default ElevationGain;
