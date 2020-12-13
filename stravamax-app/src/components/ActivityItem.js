import React, { useState, useContext } from "react";
import MaxSpeed from "./MaxSpeed";
import ActivityName from "./ActivityName";
import ActivityDate from "./ActivityDate";
import ActivityType from "./ActivityType";
import MaxHr from "./MaxHr";
import Distance from "./Distance";
import ElevationGain from "./ElevationGain";
import "../styles/ActivityItem.css";
import { Context } from "../Context";

function ActivityItem(props) {
  return (
    <div className="ActivityItem">
      <ActivityName activityName={props.activityData.name} />
      <ActivityDate activityDate={props.activityData.start_date} />
      <ActivityType activityType={props.activityData.type} />
      <MaxSpeed maxSpeed={props.activityData.max_speed} />
      <MaxHr maxHr={props.activityData.max_heartrate} />
      <Distance distance={props.activityData.distance} />
      <ElevationGain elevationGain={props.activityData.total_elevation_gain} />
      <a
        style={{ color: "whitesmoke", textDecoration: "none" }}
        href={`https://www.strava.com/activities/${props.activityData.id}`}
      >
        Go to activity
      </a>
    </div>
  );
}

export default ActivityItem;
