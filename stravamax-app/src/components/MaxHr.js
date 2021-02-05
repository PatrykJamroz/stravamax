import React from "react";
import { ItemParagraphs } from "./StyledComponents";

function MaxHr(props) {
  return (
    <ItemParagraphs>
      <img
        style={{ verticalAlign: "middle" }}
        src="https://img.icons8.com/ios-filled/24/ffffff/heart-with-pulse--v1.png"
      />{" "}
      Max heartrate: {props.maxHr} bpm
    </ItemParagraphs>
  );
}

export default MaxHr;
