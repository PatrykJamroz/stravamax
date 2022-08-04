import React from "react";
import { ItemParagraphs, IconImg } from "./StyledComponents";

export function ActivityType(props: { activityType: string }) {
  return (
    <ItemParagraphs>
      <IconImg
        src={
          props.activityType === "Run"
            ? "https://img.icons8.com/ios-filled/16/ffffff/running.png"
            : props.activityType === "Ride"
            ? "https://img.icons8.com/ios-filled/16/ffffff/cycling-road--v1.png"
            : "https://img.icons8.com/ios-filled/20/ffffff/pulse.png"
        }
      />
      Activity type: {props.activityType}
    </ItemParagraphs>
  );
}
