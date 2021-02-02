import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonRed } from "./Button";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Link to="/activities">
        <ButtonRed>Click here to check activities</ButtonRed>
      </Link>
    </div>
  );
}
