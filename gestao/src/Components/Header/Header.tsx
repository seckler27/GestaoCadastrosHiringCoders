import { useState } from "react";
import { StyledHeader } from "./styles";
import MenuButton from "../MenuButton";
import { Link } from "react-router-dom";
import { StyledMenu } from "./styles";
import { ButtonContainer, StyledLink } from "./styles";


const Header = function () {

    const [showComponent, setShowComponent] = useState(false);
    const handleClick = function () {
        showComponent ? setShowComponent(false) : setShowComponent(true)

    }


    return (
        <StyledHeader> 
            <p>Cadastro e Consulta de produtos/clientes</p>
            
            <MenuButton onClick={handleClick}>Menu</MenuButton>
            {showComponent ?
                <StyledMenu>
                    <ButtonContainer>
                        Clientes
                    </ButtonContainer>
                    <StyledLink to="/products" >
                        <ButtonContainer>
                            Produtos
                        </ButtonContainer>
                    </StyledLink>
                    <StyledLink to="/search" >
                        <ButtonContainer>
                            Pesquisar

                        </ButtonContainer>
                    </StyledLink>

                </StyledMenu> : null}
        </StyledHeader>
    )
}
export default Header;