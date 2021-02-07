import styled from "styled-components";

export const Button = styled.button`
  padding: 0 0.75em 0 0.75em;
  background-color: #fc4c02;
  font-weight: 700;
  font-family: helvetica;
  font-size: 1.25rem;
  color: #ffffff;
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
  background-color: #fc4c02;
  font-weight: 700;
  color: #ffffff;
  border-radius: 1rem;
  text-decoration: none;
  outline: none;
  margin: 0;
  display: table-cell;
  vertical-align: middle;
  @media (max-width: 670px) {
    background-color: #ffffff;
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
  background-color: #ffffff;
  color: #fc4c02;
  margin: 0 0 0 2em;
  width: 120px;
  font-size: 0.75rem;
  vertical-align: middle;
`;

export const ItemParagraphs = styled.p`
  margin: 0 0 1em 0;
  font-family: helvetica;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const IconImg = styled.img`
  vertical-align: middle;
  margin: 0 0.5em 3px 0;
`;
