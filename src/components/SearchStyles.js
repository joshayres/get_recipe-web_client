import styled from "styled-components";

export const SearchWrap = styled.div`
  padding: 20px;
  grid-area: box1;
  justify-self: center;

  input {
    border: none;
    width: 75%;
    @media(min-width: 1000px) {
      width: 900px; 
    }
    height: 30px;
    background: #ffffff;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    background: #82b1ff;
    width: 50px;
    height: 32px;
    border: none;
    cursor: pointer;
    color: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
