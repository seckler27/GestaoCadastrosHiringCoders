import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  
  innerText: string;
  onClick: () => void;
}
const Button = function (props: IProps) {
  return (
    <StyledButton type="button"  onClick={props.onClick}>
      {props.innerText}
    </StyledButton>
  );
};

export default Button;
