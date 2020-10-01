import React, { useState, useEffect } from 'react';
import ActivityName from './ActivityName'
import Distance from './Distance'
import MaxSpeed from './MaxSpeed'
import MaxHr from './MaxHr'
import ElevationGain from './ElevationGain';
import {crede} from "./crede.js"

function App() {

  //state definitiono using hooks.
  const [activities, setActivities] = useState([])
  
  //Strava access reauthorization w/ refresh token.
  const reAuthorize = () => {

    const auth_link = "https://www.strava.com/oauth/token"
        
    return fetch(auth_link,{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        client_id: crede.clientId,
        client_secret: crede.clientSecret,
        refresh_token: crede.refreshToken,
        grant_type: 'refresh_token'
        })
    })
  }

  //Fetching activities from Strava and saving it to the state.
  const getActivities = async () => {
    const reAuthorizePromise = await reAuthorize()
    const token = await reAuthorizePromise.json()
    //page - page number (default 1), per_page - number of items per page (default 30).
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?page=1&per_page=20&access_token=${token.access_token}`
    const activitiesPromise = await fetch(activities_link)
    const activitiesData = await activitiesPromise.json()
    setActivities(activitiesData)
  }

  //Fetching starts after component is mounted. Second parameter of useEffect prevents infinite loop and strava rate limit exceeding. 
  useEffect(() => {
    getActivities()
  },[]
  )
  
  return (
    <div className="App">             
      {activities.map(activity => <div key={activity.id}> 
        <ActivityName activityName={activity.name}/>
        <MaxSpeed maxSpeed = {activity.max_speed}/>
        <MaxHr maxHr = {activity.max_heartrate}/>
        <Distance distance = {activity.distance}/>
        <ElevationGain elevationGain = {activity.total_elevation_gain}/>
        <hr />
      </div>)}       
    </div>
  )
  
}

export default App;
