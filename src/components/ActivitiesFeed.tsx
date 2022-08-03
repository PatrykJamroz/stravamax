import React from "react";

import ActivityItem from "./ActivityItem";
import { useAppContext } from "../Context";

function ActivitiesFeed() {
  const { activities, isFetching, fetchFailed } = useAppContext();

  return (
    <div className="ActivitiesFeed">
      <p
        style={{
          display: isFetching ? "block" : "none",
          textAlign: "center",
        }}
      >
        Keep calm, data is fetching...
      </p>
      <p
        style={{
          display: fetchFailed ? "block" : "none",
          textAlign: "center",
        }}
      >
        Fetch failed. Wait 15mins or check credentials.
      </p>
      {activities.map((activity) => (
        <div key={activity.id}>
          <ActivityItem activityData={activity} />
        </div>
      ))}
    </div>
  );
}

export default ActivitiesFeed;
