import React, { useState, useEffect } from "react";

import ActivityName from "./ActivityName";
import Distance from "./Distance";
import MaxSpeed from "./MaxSpeed";
import MaxHr from "./MaxHr";
import ElevationGain from "./ElevationGain";
import { crede } from "./crede";

function App() {
  const [activities, setActivities] = useState([]);

  const reAuthorize = () => {
    const auth_link = "https://www.strava.com/oauth/token";
    return fetch(auth_link, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: crede.clientId,
        client_secret: crede.clientSecret,
        refresh_token: crede.refreshToken,
        grant_type: "refresh_token",
      }),
    });
  };

  async function fetchAllActivities(token) {
    let page = 1;

    while (true) {
      const url = `https://www.strava.com/api/v3/athlete/activities?page=${page}&access_token=${token}`;
      const response = await fetch(url);
      const data = response.json();

      page += 1;
      activities.push(...data);

      if (data.length < 30) {
        return activities;
      }
    }
  }

  //Fetching activities from Strava and saving it to the state.
  const getActivities = async () => {
    const reAuthorizePromise = await reAuthorize();
    const token = await reAuthorizePromise.json();
    const allActivities = await fetchAllActivities(token.access_token);
    try {
      setActivities(allActivities);
    } catch {
      //
    }
  };

  //Fetching starts after component is mounted. Second parameter of useEffect prevents infinite loop and strava rate limit exceeding.
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div className="App">
      {activities.map((activity) => (
        <div key={activity.id}>
          <ActivityName activityName={activity.name} />
          <MaxSpeed maxSpeed={activity.max_speed} />
          <MaxHr maxHr={activity.max_heartrate} />
          <Distance distance={activity.distance} />
          <ElevationGain elevationGain={activity.total_elevation_gain} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
