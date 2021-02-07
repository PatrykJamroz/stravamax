import React, { useState, useEffect, useMemo } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [activities, setActivities] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [isFetching, setIsFetching] = useState(true);

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

  const getActivitiesFake = async () => {
    const response = await fetch("fakeresponse.json");
    const allActivities = await response.json();
    setTimeout(function () {
      setIsFetching(false);
      setActivities(allActivities);
    }, 2000);
  };

  useEffect(() => {
    getActivitiesFake();
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
