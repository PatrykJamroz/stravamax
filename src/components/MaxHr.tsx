import React from "react";
import { ItemParagraphs, IconImg } from "./StyledComponents";

function MaxHr(props: { maxHr: string }) {
  return (
    <ItemParagraphs>
      <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/heart-with-pulse--v1.png" />
      Max heartrate: {props.maxHr} bpm
    </ItemParagraphs>
  );
}

export default MaxHr;
