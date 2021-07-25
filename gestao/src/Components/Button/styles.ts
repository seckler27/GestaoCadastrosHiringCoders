import styled from "styled-components";

export const StyledButton = styled.button`
 margin-bottom:10px;
  width: 50%;
  height: 40px;
  align-self: center;
  border-radius: 15px;
   background-color: gray;
  transition: box-shadow.3s;
  &:hover {
    box-shadow: inset 0 0 1em black;
  }
`;
