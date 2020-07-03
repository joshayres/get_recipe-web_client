import styled from "styled-components";

export const RecipeWrap = styled.div`
  display: flex;

  grid-area: box2;
  width: 100%;
  max-height: 85%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;

  @media screen and (min-width: 800px) {
    flex-wrap: nowrap;
  }

  .title {
    align-self: flex-center;
  }

  .image {
    padding: 20px;
    @media screen and (min-width: 800px) {
      max-height: 600px;
      max-width: 800px;
    }
    max-height: 300px;
    max-width: 300px;
    justify-self: center;
    align-self: center;
  }

  .ingredients {
    align-self: flex-center;
    max-width: 80%;
    padding-left: 10px;
  }

  .steps {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }

  .instructions {
    align-self: flex-center;
    max-width: 80%;
    padding-left: 10px;
  }

  a {
    font-size: x-small;
    align-self: flex-end;
  }
`;
