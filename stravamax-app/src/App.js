import React from 'react';
import ActivityName from './ActivityName'
import Distance from './Distance'
import MaxSpeed from './MaxSpeed'
import MaxHr from './MaxHr'
import ElevationGain from './ElevationGain';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {crede} from "./crede.js"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      activities: []
    }
    
  }

  reAuthorize(){

    let clientId 
    let clientSecret 
    let refreshToken 

    /*fetch('credentials.json')
    .then(response => response.json() )
    .then(data =>{
        clientId = data.clientId
        clientSecret = data.clientSecret
        refreshToken = data.refreshToken
    })*/

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

  /*


                client_id: clientId,
                client_secret: clientSecret,
                refresh_token: refreshToken,
                grant_type: 'refresh_token'
*/

  async componentDidMount() {
    const response = await this.reAuthorize()
    const data = await response.json()
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?page=1&per_page=50&access_token=${data.access_token}`
    
    
    fetch(activities_link)
      .then(response => response.json())
      .then(data => this.sortMaxSpeed(data))
      .then(data => {
        this.setState({
          loading: false,
          activities: data
        })
      })
  }

  sortMaxSpeed(activities) {
    return activities.sort((a,b) => b.max_speed - a.max_speed).slice(0,5)
  }

  
  render(){
    
    
    return (
      <div className="App">
        
        
        {this.state.activities.map(activity => <div key={activity.id}> 
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
}

export default App;
