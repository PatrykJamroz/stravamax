import React from "react";
import { ItemParagraphs } from "./StyledComponents";

function MaxHr(props) {
  return (
    <ItemParagraphs>
      <img src="https://img.icons8.com/ios-filled/24/000000/heart-with-pulse--v1.png" />{" "}
      Max heartrate: {props.maxHr} bpm
    </ItemParagraphs>
  );
}

export default MaxHr;
