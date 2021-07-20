import React from "react";
import {StyledButton} from "./styles"

interface IProps {
   
    onClick:()=>void

}
const Button = function(props:IProps){
    return(
        <StyledButton type="button"   onClick={props.onClick}>Cadastrar</StyledButton>
    )
}

export default Button