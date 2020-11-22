import React, { useState, useEffect } from "react";
import { crede } from "./crede.js";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [activities, setActivities] = useState([]);
  const [onlyRides, setOnlyRides] = useState([]);
  const [onlyRuns, setOnlyRuns] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);

  function scrollOnTop() {
    document.documentElement.scrollTop = 0;
  }
  //old ones
  /*function filterRides() {
    const onlyRides = [...activities].filter(
      (activity) => activity.type === "Ride"
    );
    setActivities(onlyRides);
  }

  function filterRuns() {
    const onlyRuns = [...activities].filter(
      (activity) => activity.type === "Run"
    );
    setActivities(onlyRuns);
  }*/

  function filterRides() {
    setOnlyRides(activities.filter((activity) => activity.type === "Ride"));
  }

  function filterRuns() {
    setOnlyRuns(activities.filter((activity) => activity.type === "Run"));
  }

  function clearFilters() {}

  function sortByMaxSpeed() {
    const byMaxSpeed = [...activities].sort(
      (a, b) => b.max_speed - a.max_speed
    );
    setActivities(byMaxSpeed);
  }

  function sortByMaxHr() {
    const byMaxHr = [...activities].sort(
      (a, b) => b.max_heartrate - a.max_heartrate
    );
    setActivities(byMaxHr);
  }

  //Fetching activities from Strava and saving it to the state.
  const getActivities = async () => {
    const reAuthorizePromise = await reAuthorize();
    const token = await reAuthorizePromise.json();
    const allActivities = await fetchAllActivities(token.access_token);
    try {
      setIsFetching(false);
      setActivities(allActivities);
    } catch {
      setFetchFailed(true);
    }
  };

  //Strava access reauthorization w/ refresh token.
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
      activities.push(...data);

      if (data.length < 30) {
        return activities;
      }
    }
  }

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Context.Provider
      value={{
        activities,
        isFetching,
        fetchFailed,
        scrollOnTop,
        filterRides,
        filterRuns,
        clearFilters,
        sortByMaxSpeed,
        sortByMaxHr,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
