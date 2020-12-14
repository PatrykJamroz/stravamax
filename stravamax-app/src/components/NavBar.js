import React from "react";
import Logo from "../Logo";
import Filters from "./Filters";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Logo />
      <Filters />
      <Link to="/">Home</Link>
    </div>
  );
}

export default NavBar;
