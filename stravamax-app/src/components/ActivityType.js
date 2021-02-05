import React from "react";
import { ItemParagraphs } from "./StyledComponents";

function ActivityType(props) {
  return (
    <ItemParagraphs>
      <img
        style={{ verticalAlign: "middle" }}
        src={
          props.activityType === "Run"
            ? "https://img.icons8.com/ios-filled/24/ffffff/running.png"
            : props.activityType === "Ride"
            ? "https://img.icons8.com/ios-filled/24/ffffff/cycling-road--v1.png"
            : "https://img.icons8.com/ios-filled/24/ffffff/pulse.png"
        }
      />{" "}
      Activity type: {props.activityType}
    </ItemParagraphs>
  );
}

export default ActivityType;
