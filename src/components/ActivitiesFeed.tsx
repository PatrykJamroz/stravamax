import React from "react";

import { Activity, useAppContext } from "../Context";
import { NavBar } from "./NavBar";
import { ActivityURL, ButtonTop, Item } from "./StyledComponents";
import { ActivityName } from "./ActivityName";
import { ActivityDate } from "./ActivityDate";
import { ActivityType } from "./ActivityType";
import { MaxSpeed } from "./MaxSpeed";
import { MaxHr } from "./MaxHr";
import ElevationGain from "./ElevationGain";
import { Distance } from "./Distance";

export function ActivitiesFeed() {
  const { activities, isFetching, fetchFailed, scrollOnTop } = useAppContext();

  return (
    <div className="ActivitiesFeed">
      <NavBar />
      {!!isFetching && (
        <p
          style={{
            textAlign: "center",
          }}
        >
          Keep calm, data is fetching...
        </p>
      )}
      {!!fetchFailed && (
        <p
          style={{
            textAlign: "center",
          }}
        >
          Fetch failed. Wait 15mins or check credentials.
        </p>
      )}
      {!fetchFailed &&
        activities.map((activity) => (
          <div key={activity.id}>
            <ActivityItem activityData={activity} />
          </div>
        ))}
      <ButtonTop onClick={scrollOnTop}>TOP</ButtonTop>
    </div>
  );
}

function ActivityItem(props: { activityData: Activity }) {
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
          Go to activity
        </a>
      </ActivityURL>
    </Item>
  );
}
