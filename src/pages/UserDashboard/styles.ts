import styled from "styled-components";

export const StyledDashBoard = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .list__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--blue1);
    align-items: center;
    justify-content: space-around;
    .user_container {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5em;
      section {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
    h2 {
      font-family: Arial, Helvetica, sans-serif, "Roboto";
      color: var(--blue4);
      font-size: 1.5em;
    }
    ul {
      height: 60%;
      background-color: var(--gray1);
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
    li {
      background-color: var(--white);
      padding: 5%;
      width: 75%;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5em;
      justify-content: space-between;
      :first-child {
        margin-top: 30%;
      }
      input {
        font-family: Arial, Helvetica, sans-serif, "Roboto";
        color: var(--blue1);
        display: flex;
        justify-content: end;
        max-width: 40%;
        width: fit-content;
        background-color: var(--white);
        border: none;
        font-size: 0.7em;
      }
      button {
        background-color: var(--white);
        border: none;
        color: var(--blue1);
        :hover {
          cursor: pointer;
        }
      }
    
    }
  }
`;
