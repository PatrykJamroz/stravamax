import styled from "styled-components";
import Logo from "../Logo";

export const Button = styled.button`
  padding: 0 1em 0 1em;
  background-color: #fc4c02;
  font-weight: 700;
  font-family: helvetica;
  font-size: 1rem;
  color: whitesmoke;
  border: none;
  border-radius: 1.5em;
  height: 2rem;
  text-decoration: none;
  margin: 0 auto 0.5em auto;
  display: block;
  outline: none;
  &:hover {
    cursor: pointer;

    text-decoration: underline;
  }
`;

export const ButtonTop = styled(Button)`
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

export const ConvertButton = styled(Button)`
  background-color: whitesmoke;
  color: #fc4c02;
  margin: 0 0 0 2em;
  width: 150px;
  font-size: 0.75rem;
  vertical-align: middle;
`;

export const ItemParagraphs = styled.p`
  margin: 0 0 1em 0;
  font-family: helvetica;
  font-size: 1rem;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;
