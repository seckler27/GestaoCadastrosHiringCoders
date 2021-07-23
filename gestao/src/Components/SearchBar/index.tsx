import React, { useState } from "react";
import Input from "../input";
import Button from "../Button";
import { StyledDivFlex } from "../ProductForm/styles";
import { getFromStorage, getPropNames } from "../../Utils/functions";
import { LocalStorageKeys } from "../../Utils/storageKeys";
import { Product } from "../ProductForm";
import { StyledBlockDiv, StyledTable, TableHeader, TR, TD } from "./styles";
import { EnumType } from "typescript";

export function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [innerText, setInnerText] = useState(<div></div>);
  const [showErrorMessage, setErrorMessage] = useState(false);
  const [TableHead, setTableHead] = useState(<thead></thead>);

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
      setInnerText(<div>Nenhum resultado para esta busca</div>);
      setErrorMessage(true);
    } else {
      const objProps = getPropNames(resultArray);
      setTableHead(
        <TR>
          {objProps.map((prop) => (
            <TableHeader>{prop.toLocaleUpperCase()}</TableHeader>
          ))}
        </TR>
      );

      setInnerText(
        resultArray.map((result: Product) => (
          <tbody>
            <TR>
              <TD>{result.name}</TD> 
              <TD>{result.price}</TD>
              <TD>{result.description}</TD>
              <TD>{result.quantity}</TD>
            </TR>
          </tbody>
        ))
      );
      alert("tchau");
      setShowComponent(true);
    }
  }

  return (
    <StyledBlockDiv>
      <StyledDivFlex>
        <Input
          type="search"
          name="SearchBar"
          placeholder="Digite sua pesquisa"
          handleChange={handleSearch}
          value={searchString}
        />
      </StyledDivFlex>
      <StyledDivFlex>
        <Button innerText="Pesquisar" onClick={handleClick} />
      </StyledDivFlex>
      {showComponent ? (
        <StyledTable>
          {TableHead}

          {innerText}
        </StyledTable>
      ) : null}
      {showErrorMessage ? innerText : null}
    </StyledBlockDiv>
  );
}
