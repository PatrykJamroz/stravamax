import React, { useState, useEffect } from "react";

import ActivityName from "./ActivityName";
import Distance from "./Distance";
import MaxSpeed from "./MaxSpeed";
import MaxHr from "./MaxHr";
import ElevationGain from "./ElevationGain";
import { crede } from "./crede";
import ActivityDate from "./ActivityDate";

function App() {
  const [activities, setActivities] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

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
    const activities = [];

    while (true) {
      const url = `https://www.strava.com/api/v3/athlete/activities?per_page=30&page=${page}&access_token=${token}`;
      const response = await fetch(url);
      const data = await response.json();

      page += 1;
      //setActivities((oldData) => [...oldData, data]);
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
      setIsFetching(false);
    } catch {
      //
    }
  };

  function sortByMaxHr() {
    const maxHr = [...activities].sort(
      (a, b) => b.max_heartrate - a.max_heartrate
    );
    setActivities(maxHr);
  }

  function sortByMaxSpeed() {
    const maxSpeed = [...activities].sort((a, b) => b.max_speed - a.max_speed);
    setActivities(maxSpeed);
  }

  function sortByDistance() {
    const sortDistance = [...activities].sort(
      (a, b) => b.distance - a.distance
    );
    setActivities(sortDistance);
  }

  //Fetching starts after component is mounted. Second parameter of useEffect prevents infinite loop and strava rate limit exceeding.
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div className="App">
      <button onClick={sortByMaxHr}>Sort by Max HR</button>
      <button onClick={sortByMaxSpeed}>Sort by Max Speed</button>
      <button onClick={sortByDistance}>Sort by Distance</button>
      <h3 style={{ display: isFetching ? "block" : "none" }}>
        Fetching all activities, please wait...
      </h3>
      {activities.map((activity) => (
        <div key={activity.id}>
          <ActivityName activityName={activity.name} />
          <ActivityDate activityDate={activity.start_date} />
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
