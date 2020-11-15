import React, { useContext } from "react";

import ActivityItem from "./ActivityItem";
import { Context } from "../Context";

function ActivitiesFeed() {
  const { activities, isFetching } = useContext(Context);

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
      {activities.map((activity) => (
        <div key={activity.id}>
          <ActivityItem activityData={activity} />
        </div>
      ))}
    </div>
  );
}

export default ActivitiesFeed;
