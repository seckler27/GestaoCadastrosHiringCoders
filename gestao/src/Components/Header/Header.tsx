import { useState } from "react";
import { StyledHeader } from "./styles";
import MenuButton from "../MenuButton";
import { Link } from "react-router-dom";



const Header = function () {
    
    const [showComponent, setShowComponent] = useState(false);
    const handleClick = function () {
        showComponent ? setShowComponent(false) : setShowComponent(true)

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
                        
                            <Link  to="/products" >
                                Produtos
                            </Link>
                        
                    </li>
                    <li>
                        
                            <Link  to="/search" >
                                Pesquisar
                            </Link>
                        
                    </li>
                </menu> : null}
        </StyledHeader>
    )
}
export default Header;