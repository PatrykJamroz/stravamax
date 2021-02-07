import React from "react";
import MaxSpeed from "./MaxSpeed";
import ActivityName from "./ActivityName";
import ActivityDate from "./ActivityDate";
import ActivityType from "./ActivityType";
import MaxHr from "./MaxHr";
import Distance from "./Distance";
import ElevationGain from "./ElevationGain";
import styled from "styled-components";

const Item = styled.div`
  background-color: #fc4c02;
  color: #ffffff;
  margin: 0 auto 10px auto;
  max-width: 480px;
  border-radius: 10px;
  padding: 10px;
`;

const ActivityURL = styled.div`
  margin: 0;
  font-family: helvetica;
  font-size: 0.75rem;
  font-weight: 300;
`;

function ActivityItem(props) {
  return (
    <Item>
      <ActivityName activityName={props.activityData.name} />
      <ActivityDate activityDate={props.activityData.start_date} />
      <ActivityType activityType={props.activityData.type} />
      <MaxSpeed maxSpeed={props.activityData.max_speed} />
      <MaxHr maxHr={props.activityData.max_heartrate} />
      <Distance distance={props.activityData.distance} />
      <ElevationGain elevationGain={props.activityData.total_elevation_gain} />
      <ActivityURL>
        <a
          style={{
            color: "#FFFFFF",
            textDecoration: "underline",
          }}
          href={`https://www.strava.com/activities/${props.activityData.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Go to activity
        </a>
      </ActivityURL>
    </Item>
  );
}

export default ActivityItem;
