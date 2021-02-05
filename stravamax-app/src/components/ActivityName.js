import React from "react";
import styled from "styled-components";
import { ItemParagraphs } from "./StyledComponents";

const ItemParagraphsTitle = styled(ItemParagraphs)`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25em;
`;

function ActivityName(props) {
  return (
    <ItemParagraphsTitle>
      <img
        style={{ verticalAlign: "middle" }}
        alt="svgImg"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAzMiAzMiIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDE0LjE3OTY4OCAyIEwgNS45MDAzOTA2IDE4IEwgMTAuNzc5Mjk3IDE4IEwgMTQuMTc5Njg4IDExLjYxOTE0MSBMIDE3LjU2MDU0NyAxOCBMIDIyLjQwMDM5MSAxOCBMIDE0LjE3OTY4OCAyIHogTSAyMi40MDAzOTEgMTggTCAyMCAyMi43ODkwNjIgTCAxNy41NjA1NDcgMTggTCAxMy44NTkzNzUgMTggTCAyMCAzMCBMIDI2LjA5OTYwOSAxOCBMIDIyLjQwMDM5MSAxOCB6Ij48L3BhdGg+PC9zdmc+"
      />{" "}
      {props.activityName}
    </ItemParagraphsTitle>
  );
}

export default ActivityName;
