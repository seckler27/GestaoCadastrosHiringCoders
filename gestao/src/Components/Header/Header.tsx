import { useState } from "react";
import { StyledHeader, StyledHeaderP } from "./styles";
import MenuButton from "../MenuButton";
import { NavLink } from "react-router-dom";
import { StyledMenu } from "./styles";
import { ButtonContainer, StyledLink } from "./styles";
import { StyledP } from "./styles";

const Header = function () {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = function () {
    showComponent ? setShowComponent(false) : setShowComponent(true);
  };

  return (
    <StyledHeader>
      <StyledHeaderP>Cadastro e Consulta de produtos/clientes</StyledHeaderP>

      <MenuButton onClick={handleClick}>Menu</MenuButton>
      {showComponent ? (
        <StyledMenu>
          <ButtonContainer>
            <StyledP>
              <StyledLink to="/customers">Clientes</StyledLink>
            </StyledP>
          </ButtonContainer>
          <ButtonContainer>
            <StyledP>
              <StyledLink to="/products">Produtos</StyledLink>
            </StyledP>
          </ButtonContainer>
          <ButtonContainer>
            <StyledP>
              <StyledLink to="/search">Pesquisar</StyledLink>
            </StyledP>
          </ButtonContainer>
        </StyledMenu>
      ) : null}
    </StyledHeader>
  );
};
export default Header;
