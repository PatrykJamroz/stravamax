import React from "react";
import { ItemParagraphs } from "./StyledComponents";
import styled from "styled-components";

const ItemParagraphsDate = styled(ItemParagraphs)`
  font-size: 0.75rem;
  margin-bottom: 2em;
  font-weight: 300;
`;

function ActivityDate(props) {
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return (
    <ItemParagraphsDate>
      {new Date(props.activityDate).toLocaleString([], options)}
    </ItemParagraphsDate>
  );
}

export default ActivityDate;
