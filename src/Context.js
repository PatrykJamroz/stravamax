import React, { useState, useEffect, useMemo } from "react";
import { crede } from "./crede.js";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [activities, setActivities] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);

  function scrollOnTop() {
    document.documentElement.scrollTop = 0;
  }

  function filterByRide() {
    setFilterType("Ride");
  }

  function filterByRun() {
    setFilterType("Run");
  }

  function clearFilters() {
    setFilterType("");
  }

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
    const allActivities = await fetchAllActivities(token.access_token); // fetchAllActivities / fetchFewActivities
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

  //FETCH ONLY FEW ACTIVITIES - FOR DEVELOPMENT - TO NOT EXCEED STRAVA LIMITS//

  async function fetchFewActivities(token) {
    const url = `https://www.strava.com/api/v3/athlete/activities?page=1&per_page=30&access_token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  //////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getActivities();
  }, []);

  const filteredActivities = useMemo(() => {
    return filterType
      ? activities.filter((activity) => activity.type === filterType)
      : activities;
  }, [activities, filterType]);

  return (
    <Context.Provider
      value={{
        activities: filteredActivities,
        isFetching,
        fetchFailed,
        scrollOnTop,
        filterByRide,
        filterByRun,
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
