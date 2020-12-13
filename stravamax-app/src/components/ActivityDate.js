import React from "react";

function ActivityDate(props) {
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return <p>{new Date(props.activityDate).toLocaleString([], options)}</p>;
}

export default ActivityDate;
