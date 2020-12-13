import React from "react";
import Logo from "../Logo";
import Filters from "./Filters";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <Logo />
      <Filters />
    </div>
  );
}

export default NavBar;
