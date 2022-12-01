import React from "react";
import { useAppContext } from "../Context";

import { Link } from "react-router-dom";
import {
  ButtonHome,
  ButtonFilters,
  ButtonFiltersMid,
  ButtonFiltersLeft,
  IconImg,
  LogoTitle,
  Nav,
} from "./StyledComponents";

export function NavBar() {
  return (
    <Nav>
      <Logo />
      <Filters />
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonHome>
          <IconImg src="https://img.icons8.com/material-rounded/20/ffffff/home.png" />
          Home
        </ButtonHome>
      </Link>
    </Nav>
  );
}

function Logo() {
  return (
    <LogoTitle>
      <IconImg
        alt="svgImg"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6I2ZmZmZmZjsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSIjZjVmNWY1Ij48L3BhdGg+PGcgZmlsbD0iI2ZjNGMwMiI+PHBhdGggZD0iTTc2LjIxNTgyLDEwLjc1bC00NC41MDEyMiw4NmgyNi4yMjQxMmwxOC4yNzcxLC0zNC4yOTcxMmwxOC4xNzIxMiwzNC4yOTcxMmgyNi4wMTQxNnpNMTIwLjQwMjEsOTYuNzVsLTEyLjkwMjEsMjUuNzQxMjFsLTEzLjExMjA2LC0yNS43NDEyMWgtMTkuODkzOGwzMy4wMDU4Niw2NC41bDMyLjc4NTQsLTY0LjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
      />
      StravaMax
    </LogoTitle>
  );
}

function Filters() {
  const {
    filterByRide,
    filterByRun,
    clearFilters,
    sortByMaxSpeed,
    sortByMaxHr,
  } = useAppContext();

  return (
    <div>
      <div>
        <ButtonFilters onClick={clearFilters}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/pulse.png" />
          All
        </ButtonFilters>
        <ButtonFiltersMid onClick={filterByRun}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/running.png" />
          Run
        </ButtonFiltersMid>
        <ButtonFilters onClick={filterByRide}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/cycling-road--v1.png" />
          Ride
        </ButtonFilters>
      </div>
      <div>
        <ButtonFiltersLeft onClick={sortByMaxSpeed}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/speed.png" />
          Sort by Max Speed
        </ButtonFiltersLeft>
        <ButtonFilters onClick={sortByMaxHr}>
          <IconImg src="https://img.icons8.com/ios-filled/20/ffffff/heart-with-pulse--v1.png" />
          Sort by Max HR
        </ButtonFilters>
      </div>
    </div>
  );
}
