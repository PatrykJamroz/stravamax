import React from "react";
import { ItemParagraphs } from "./StyledComponents";

function ElevationGain(props) {
  return (
    <ItemParagraphs>
      <img src="https://img.icons8.com/ios-filled/24/000000/mountain.png" />{" "}
      Elevation gain: {props.elevationGain} m
    </ItemParagraphs>
  );
}

export default ElevationGain;
