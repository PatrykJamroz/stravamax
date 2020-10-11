import React from "react";

function ActivityDate(props) {
  return <p>{new Date(props.activityDate).toString()}</p>;
}

export default ActivityDate;
