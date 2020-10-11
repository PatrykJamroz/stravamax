import React, { useState, useEffect } from "react";

function ActivityItem(props) {
  return (
    <div>
      <h1>{props.activityData.name}</h1>
      <p>{new Date(props.activityData.start_date).toString()}</p>
      <h3>Type: {props.activityData.type}</h3>
      <h3>
        Max speed: {(props.activityData.max_speed * 3.599).toFixed(1)} km/h
      </h3>
      <h3>Max heartrate: {props.activityData.max_heartrate} bpm</h3>
      <h3>Distance: {(props.activityData.distance / 1000).toFixed(1)} km</h3>
      <h3>Elevation gain: {props.activityData.total_elevation_gain} m</h3>
    </div>
  );
}

export default ActivityItem;
