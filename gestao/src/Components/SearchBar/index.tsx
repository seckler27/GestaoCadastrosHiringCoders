import React, { useState } from "react";
import Input from "../input";
import Button from "../Button";
import { StyledDivFlex } from "../ProductForm/styles";
import { getFromStorage } from "../../Utils/functions";
import { LocalStorageKeys } from "../../Utils/storageKeys";
import { Product } from "../ProductForm";
import { StyledBlockDiv,  StyledTable, TableHeader, TR, TD } from "./styles";



export function SearchBar() {
    const [searchString, setSearchString] = useState('');
    const [showComponent, setShowComponent] = useState(false);
    const [innerText, setInnerText] = useState(<div></div>);
    const [showErrorMessage, setErrorMessage] = useState(false);
    function handleSearch(event: React.FormEvent<HTMLInputElement>): void {
        const value = event.currentTarget.value;
        setSearchString(value);
    }
    function resetState() {
        const initialState = false;
        setShowComponent(initialState);
        setErrorMessage(initialState);
    }

    function handleClick() {
        resetState();
        const resultArray = getFromStorage(searchString, LocalStorageKeys.products);
        if (resultArray.length <= 0) {
            setInnerText(<div>Nenhum resultado para esta busca</div>)
            setErrorMessage(true);
        } else {
            setInnerText(resultArray.map((result: Product) => (
                <tbody>
                    <TR>
                        <TD>{result.name}</TD>
                        <TD>{result.price}</TD>
                        <TD>{result.description}</TD>
                        <TD>{result.quantity}</TD>
                    </TR>
                </tbody>)));
            setShowComponent(true);
        }

    }

    return (
        <StyledBlockDiv>
                    <StyledDivFlex>
                        <Input name="SearchBar" placeholder="Digite sua pesquisa" handleChange={handleSearch} value={searchString} />
                    </StyledDivFlex>
                    <StyledDivFlex>
                        <Button innerText="Pesquisar" onClick={handleClick} />
                    </StyledDivFlex>
                    {
                        showComponent ?
                            <StyledTable>
                                <thead>
                                    <TR>
                                        <TableHeader>Nome</TableHeader><TableHeader>Preço</TableHeader><TableHeader>Descrição</TableHeader><TableHeader>Quantidade</TableHeader>
                                    </TR>
                                </thead>

                                {innerText}
                            </StyledTable>
                            : null
                    }
                    {showErrorMessage ? innerText : null}
        </StyledBlockDiv>

    )

}

function result(result: any, arg1: (Object: any) => JSX.Element): React.SetStateAction<JSX.Element> {
    throw new Error("Function not implemented.");
}
