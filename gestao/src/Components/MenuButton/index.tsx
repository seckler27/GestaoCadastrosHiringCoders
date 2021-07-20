import React from "react";
import {StyledButton} from "../Button/styles"

interface IProps {
   
    onClick:()=>void;
    children: string;

}
const MenuButton = function(props:IProps){
    return(
        <StyledButton type="button"   onClick={props.onClick}>Menu</StyledButton>
    )
}

export default MenuButton