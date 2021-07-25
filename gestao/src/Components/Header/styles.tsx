import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;

`;
export const StyledMenu = styled.div`
margin-top:10px;
text-align:center;
display:flex;
justify-content:space-between;
align-items:center;
height 50px
`;
export const ButtonContainer = styled.div`
  text-align: center;
  padding: 10px;
  background-color:gray;
  border-radius: 25px;
  cursor: pointer;
  transition: box-shadow.3s;
  &:hover {
    box-shadow: inset 0 0 1em black;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:visited{
    color:inherit;
  }
`;

export const StyledP = styled.p`
  font-size: 20px;
  margin: auto;
  align-self: center;
`;
export const StyledHeaderP = styled.p`
  font-size: 50px;
  margin-bottom: 10px;
  align-self: center;
`;
