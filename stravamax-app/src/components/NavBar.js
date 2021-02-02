import React from "react";
import Logo from "../Logo";
import Filters from "./Filters";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "./StyledComponents";

function NavBar() {
  return (
    <div className="NavBar">
      <Logo />
      <Filters />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

export default NavBar;
