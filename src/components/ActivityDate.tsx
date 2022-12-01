import React from "react";
import { IconImg, ItemParagraphsDate } from "./StyledComponents";

export function ActivityDate(props: { activityDate: string }) {
  const options: Intl.DateTimeFormatOptions = {
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
