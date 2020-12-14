import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Link to="/activities">Click here to check activities</Link>
    </div>
  );
}
