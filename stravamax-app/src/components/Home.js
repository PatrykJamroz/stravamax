import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoTitle, Button } from "./StyledComponents";

export default function Home() {
  const Container = styled.div`
    background-color: whitesmoke;
    max-width: 496px;
    margin: 0 auto 10px auto;
    border-radius: 10px;
    border: 2px solid #fc4c02;
  `;

  const Title = styled.h1`
    text-align: center;
    font-size: 1.25rem;
    font-family: helvetica;
  `;

  const Text = styled.p`
    margin: 0 1rem 0 1rem;
    text-align: justify;
    text-indent: 1rem;
    font-family: helvetica;
  `;

  return (
    <Container>
      <LogoTitle>StravaMax</LogoTitle>
      <Title>Welcome to my app!</Title>
      <Text>
        The main purpose of the app was to learn React. Another one was to check
        my cycling max speed which is not possible on Strava. There are 2
        versions of the app:
        <ul style={{ textIndent: 1 }}>
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
