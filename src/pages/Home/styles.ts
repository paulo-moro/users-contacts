import styled from "styled-components";

export const StyledHomePage = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--blue1);
  }
  .first_section {
    height: 25%;
    background-color: var(--blue1);
    color: var(--blue4);
    font-family: Arial, Helvetica, sans-serif, "Roboto";
    font-size: 2rem;
  }

  .second_section form {
    padding: 0.5em;
    height: 75%;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif, "Roboto";
    align-items: center;
    justify-content: space-around;
    h2 {
      color: var(--blue4);
      font-size: 1.5rem;
      font-weight: bold;
    }
    span {
      color: var(--blue4);
    }
    p {
      font-size: 0.7rem;
    }
    span:hover {
      cursor: pointer;
    }
  }
`;
