import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { crede } from "./crede.js";

const AppContext = React.createContext<ContextProps>(undefined);

interface Activity {
  id: string;
  name: string;
  distance: number;
  max_speed: number;
  max_heartrate: number;
  type: FilterType;
}

type FilterType = "Ride" | "Run" | "";

interface ContextProps {
  activities: Activity[];
  isFetching: boolean;
  fetchFailed: boolean;
  scrollOnTop(): void;
  filterByRide(): void;
  filterByRun(): void;
  clearFilters(): void;
  sortByMaxSpeed(): void;
  sortByMaxHr(): void;
}

function AppContextProvider({ children }) {
  const [activities, setActivities] = useState<Array<Activity>>([]);
  const [filterType, setFilterType] = useState<FilterType>("");
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [fetchFailed, setFetchFailed] = useState<boolean>(false);

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
    interface TokenI {
      access_token: string;
    }
    const reAuthorizePromise = await reAuthorize();
    const token: TokenI = await reAuthorizePromise.json();
    const allActivities: Array<Activity> = await fetchFewActivities(
      token.access_token
    ); // fetchAllActivities / fetchFewActivities
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

  async function fetchAllActivities(token: String) {
    let page: number = 1;
    const activities: Array<Activity> = [];

    while (true) {
      const url = `https://www.strava.com/api/v3/athlete/activities?per_page=30&page=${page}&access_token=${token}`;
      const response = await fetch(url);
      const data: Array<Activity> = await response.json();

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
    const data: Array<Activity> = await response.json();
    return data;
  }

  //////////////////////////////////////////////////////////////////////////////

  const loc = useLocation();

  console.log(loc);

  useEffect(() => {
    if (loc.pathname === "/activities") {
      getActivities();
    }
  }, [loc]);

  const filteredActivities = useMemo(() => {
    return filterType
      ? activities.filter((activity) => activity.type === filterType)
      : activities;
  }, [activities, filterType]);

  return (
    <AppContext.Provider
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
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}

export { AppContextProvider, useAppContext };
