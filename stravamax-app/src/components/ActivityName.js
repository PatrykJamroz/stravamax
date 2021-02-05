import React from "react";
import styled from "styled-components";
import { ItemParagraphs } from "./StyledComponents";

const ItemParagraphsTitle = styled(ItemParagraphs)`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25em;
`;

function ActivityName(props) {
  return <ItemParagraphsTitle>{props.activityName}</ItemParagraphsTitle>;
}

export default ActivityName;
