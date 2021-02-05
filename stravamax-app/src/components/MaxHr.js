import React from "react";
import { ItemParagraphs } from "./StyledComponents";

function MaxHr(props) {
  return <ItemParagraphs>Max heartrate: {props.maxHr} bpm</ItemParagraphs>;
}

export default MaxHr;
