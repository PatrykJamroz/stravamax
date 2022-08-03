import React from "react";
import { ItemParagraphs, IconImg } from "./StyledComponents";

function ElevationGain(props: { elevationGain: number }) {
  return (
    <ItemParagraphs>
      <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/mountain.png" />
      Elevation gain: {props.elevationGain} m
    </ItemParagraphs>
  );
}

export default ElevationGain;
