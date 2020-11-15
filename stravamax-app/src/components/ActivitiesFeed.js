import React, { useContext } from "react";

import ActivityItem from "./ActivityItem";
import { Context } from "../Context";

function ActivitiesFeed() {
  const { activities } = useContext(Context);

  return (
    <div className="ActivitiesFeed">
      {activities.map((activity) => (
        <div key={activity.id}>
          <ActivityItem activityData={activity} />
        </div>
      ))}
    </div>
  );
}

export default ActivitiesFeed;
