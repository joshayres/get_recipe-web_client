import styled from "styled-components";

export const AppWrap = styled.div`
  min-height: 100vh;
  background: #fbbb9f;

  font-family: "Montserrat";
  color: #000000;

  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-template-rows: 1fr 10fr;
  grid-template-areas:
  "box1 box1"
  "box2 box3";
`;
