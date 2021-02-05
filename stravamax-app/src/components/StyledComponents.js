import styled from "styled-components";
import Logo from "../Logo";

export const Button = styled.button`
  padding: 1em;
  margin-right: 2em;
  background-color: #fc4c02;
  font-weight: 700;
  color: whitesmoke;
  border: none;
  border-radius: 1.5em;
  height: 3em;
  text-decoration: none;
  margin-bottom: 1em;
  outline: none;
`;

export const ButtonTop = styled.button`
  padding: 1em;
  background-color: #fc4c02;
  font-weight: 700;
  color: whitesmoke;
  border-radius: 1.5em;
  height: 4em;
  text-decoration: none;
  margin-bottom: 1em;
  outline: none;
  @media (max-width: 670px) {
    background-color: whitesmoke;
    color: #fc4c02;
    border: 0.5px solid black;
  }
`;

export const LogoTitle = styled.h1`
  font-family: "Michroma", sans-serif;
  color: #fc4c02;
  margin: 0 auto 10px auto;
  text-align: center;
`;

export const ConvertButton = styled.button`
  padding: 1em;
  margin-left: 2em;
  background-color: whitesmoke;
  font-weight: 700;
  color: #fc4c02;
  border: none;
  border-radius: 1.5em;
  height: 3em;
`;
