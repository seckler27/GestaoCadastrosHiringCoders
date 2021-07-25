import React, { useState } from "react";
import Input from "../input";
import Button from "../Button";
import { StyledDivFlex } from "../ProductForm/styles";
import { getFromStorage, getPropNames } from "../../Utils/functions";
import { LocalStorageKeys } from "../../Utils/storageKeys";
import { Product } from "../ProductForm";
import { StyledBlockDiv, StyledTable, TableHeader, TR, TD } from "./styles";
import { EnumType } from "typescript";
import { Customer } from "../CustomerForm";
import { productProps,customerProps } from "../../Utils/storageKeys";

export function SearchBar() {
  const [showComponent, setShowComponent] = useState(false);
  const [innerText, setInnerText] = useState(<div></div>);
  const [showErrorMessage, setErrorMessage] = useState(false);
  const [TableHead, setTableHead] = useState(<thead></thead>);

  function handleCustomerButton() {
    resetState();
    const key = LocalStorageKeys.customers;
    const resultArray = getFromStorage(key);
    if (resultArray <= 0) {
      setInnerText(<div>Nenhum resultado para esta busca</div>);
      setErrorMessage(true);
    } else {
      const objProps = customerProps;
      setTableHead(
       <TR>
          {objProps.map((prop) => (
            <TableHeader>{prop.toLocaleUpperCase()}</TableHeader>
          ))}
        </TR>
      );
      setInnerText(
        resultArray.map((result: Customer) => (
          <tbody>
            <TR>
              <TD>{result.name}</TD>
              <TD>{result.surname}</TD>
              <TD>{result.idNumber}</TD>
              <TD>{result.phoneNumber}</TD>
            </TR>
          
          </tbody>
        ))
      );

          setShowComponent(true);
    }
  }

  

  function resetState() {
    const boolInitialState = false;

    setShowComponent(boolInitialState);
    setErrorMessage(boolInitialState);
  }

  function handleProductButton() {
    resetState();
    const key = LocalStorageKeys.products;
    const resultArray = getFromStorage(key);
    if (resultArray <= 0) {
      setInnerText(<div>Nenhum resultado para esta busca</div>);
      setErrorMessage(true);
    } else {
      const objProps = productProps;
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

      setShowComponent(true);
    }
  }
  return (
    <StyledBlockDiv>
      <StyledDivFlex>
        <Button innerText="Clientes" onClick={handleCustomerButton}></Button>
        <Button innerText="Produtos" onClick={handleProductButton}></Button>
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
