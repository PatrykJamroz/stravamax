import React from "react";
import { ItemParagraphs, IconImg } from "./StyledComponents";
import styled from "styled-components";

const ItemParagraphsDate = styled(ItemParagraphs)`
  font-size: 0.75rem;
  margin: 0 0 2em 0.3em;
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
      <IconImg src="https://img.icons8.com/ios/12/ffffff/calendar--v1.png" />
      {new Date(props.activityDate).toLocaleString("en-GB", options)}
    </ItemParagraphsDate>
  );
}

export default ActivityDate;
