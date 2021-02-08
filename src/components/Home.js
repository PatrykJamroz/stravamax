import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoTitle, Button, IconImg } from "./StyledComponents";

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

export default function Home() {
  return (
    <Container>
      <LogoTitle>
        <IconImg
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6I2ZmZmZmZjsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSIjZjVmNWY1Ij48L3BhdGg+PGcgZmlsbD0iI2ZjNGMwMiI+PHBhdGggZD0iTTc2LjIxNTgyLDEwLjc1bC00NC41MDEyMiw4NmgyNi4yMjQxMmwxOC4yNzcxLC0zNC4yOTcxMmwxOC4xNzIxMiwzNC4yOTcxMmgyNi4wMTQxNnpNMTIwLjQwMjEsOTYuNzVsLTEyLjkwMjEsMjUuNzQxMjFsLTEzLjExMjA2LC0yNS43NDEyMWgtMTkuODkzOGwzMy4wMDU4Niw2NC41bDMyLjc4NTQsLTY0LjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
        />
        StravaMax
      </LogoTitle>
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
