import React, { useState } from "react";
import { StyledHeader } from "./styles";
import { StyledButton } from "../Button/styles";
import MenuButton from "../MenuButton";


const Header = function () {
    const [showComponent, setShowComponent] = useState(false);
    const handleClick = function () {
      showComponent? setShowComponent(false):setShowComponent(true)
       
    }


    return (
        <StyledHeader> <p>Cadastro e Consulta de produtos/clientes</p>
            <MenuButton onClick={handleClick}>Menu</MenuButton>
            {showComponent ?
                <menu>
                    <li>
                        Clientes
                    </li>
                    <li>
                        Produtos
                    </li>
                </menu> : null}
        </StyledHeader>
    )
}
export default Header;