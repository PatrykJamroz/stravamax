import React, { useState, useEffect } from "react";
import MaxSpeed from "./MaxSpeed";
import ActivityName from "./ActivityName";
import ActivityDate from "./ActivityDate";
import ActivityType from "./ActivityType";
import MaxHr from "./MaxHr";
import Distance from "./Distance";
import ElevationGain from "./ElevationGain";
import "./ActivityItem.css";

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
    </div>
  );
}

export default ActivityItem;
