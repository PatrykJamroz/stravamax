import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { LogoTitle } from "./StyledComponents";

export default function Home() {
  const Container = styled.div`
    background-color: whitesmoke;
    max-width: 500px;
    margin: 0 auto 10px auto;
    border-radius: 10px;
    border: 2px solid #fc4c02;
  `;

  const Button = styled.button`
    padding: 1em;
    background-color: #fc4c02;
    font-weight: 700;
    color: whitesmoke;
    border: none;
    border-radius: 1.5em;
    height: 3em;
    text-decoration: none;
    margin: 1em auto 1em auto;
    display: block;
    outline: none;
  `;

  const Title = styled.h1`
    text-align: center;
    font-size: 1.5rem;
  `;

  const Text = styled.p`
    margin: 0 1rem 0 1rem;
  `;

  return (
    <Container>
      <LogoTitle>StravaMax</LogoTitle>
      <Title>Welcome to my app!</Title>
      <Text>
        The main purpose of the app was to learn React. Another one was to check
        my cycling max speed which is not possible on Strava. There are 2
        versions of the app:
        <ul>
          <li>
            Public - working version deployed to github pages. In this version
            data is fetched from a local file - not from Strava API. It's due to
            private access token which is required to authorize and it's not
            pushed into remote repo.
          </li>
          <li>
            Master - in this version data is fetched from Strava. This version
            doesn't work without file containing access token required to
            authorize.
          </li>
        </ul>
      </Text>
      <Link to="/activities" style={{ textDecoration: "none" }}>
        <Button>Click here to check activities</Button>
      </Link>
    </Container>
  );
}
