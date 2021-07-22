import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.h1`

text-align:center;

`
export const StyledMenu = styled.menu`
display:flex;
flex-wrap:nowrap;
justify-content:space-evenly;
`
export const ButtonContainer = styled.div`
padding:15px;
border: 2px solid black;
border-radius:15px;
background-color: gray;
cursor:pointer;
transition: box-shadow.3s;
&:hover{
box-shadow: inset 0 0 1em black;
}
`
export const StyledLink = styled(Link)`
text-decoration:none;

`