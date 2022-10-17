import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--blue4);
  padding: 0.5rem;
  border: none;
  border-radius: 10px;

  background-color: var(--black1);
  :hover {
    cursor: pointer;
  }

  @media (min-width: 500px) {
    font-size: 1.5em;
  }

  @media (min-width: 800px) {
    font-size: 2em;
  }
`;
