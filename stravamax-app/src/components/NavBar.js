import React from "react";
import Logo from "../Logo";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import { Button } from "./StyledComponents";
import styled from "styled-components";

const Nav = styled.div`
  margin: 0 auto 10px auto;
  text-align: center;
  max-width: 500px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #fc4c02;
  color: #fc4c02;
  font-weight: 700;
`;

function NavBar() {
  return (
    <Nav>
      <Logo />
      <Filters />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Nav>
  );
}

export default NavBar;
