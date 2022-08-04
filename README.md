# StravaMax

Simple app created to check some of my metrics on Strava.

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Sources](#sources)
- [Setup](#setup)

## Introduction

The main motivation to create this app was to learn React. Another one was to find out my max speed on a roadbike. <br />
It was a great project to "play" with the data, Fetch API, react hooks, Context and other technologies I listed below.

### There are 2 versions of the app:

- Public - working version deployed to github pages. In this version data is fetched from a local file (only 30 activities) - not from Strava API. It's due to private access token which is required to authorize and it's not pushed into remote repo.
- Master - in this version data is fetched from Strava. This version doesn't work without file containing access token required to authorize.

Feel free to visit: [Public version](https://patrykjamroz.github.io/stravamax/)

## Technologies

Project is created with:

- ReactJS 16
- Router Router 5
- Styled Components 5

## Sources

- [Strava API](https://developers.strava.com/docs/reference/)
- [Strava API for Beginners](https://youtu.be/sgscChKfGyg)
- [My Strava profile](https://www.strava.com/athletes/30743339)

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
