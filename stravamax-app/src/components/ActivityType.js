import React from "react";
import { ItemParagraphs } from "./StyledComponents";

function ActivityType(props) {
  return (
    <ItemParagraphs>
      <img
        src={
          props.activityType === "Run"
            ? "https://img.icons8.com/ios-filled/24/000000/running.png"
            : props.activityType === "Ride"
            ? "https://img.icons8.com/ios-filled/24/000000/cycling-road--v1.png"
            : "https://img.icons8.com/ios-filled/24/000000/pulse.png"
        }
      />{" "}
      Activity type: {props.activityType}
    </ItemParagraphs>
  );
}

export default ActivityType;
