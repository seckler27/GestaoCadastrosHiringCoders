import { type } from "os";
import React, { useState } from "react";
import Input from "../input";
import { StyledDiv } from "./styles";
import { StyledDivFlex } from "./styles";
import Button from "../Button";
import { StyledBlockDiv } from "../SearchBar/styles";
import { LocalStorageKeys } from "../../Utils/storageKeys";
import { addToStorage } from "../../Utils/functions";

class Address {
  zipCode: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  constructor(
    street: string,
    number: string,
    neighborhood: string,
    state: string,
    zipCode: string
  ) {
    this.zipCode = zipCode;
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.state = state;
  }
}

export function AddressForm() {
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");
  const [initialState, setInitialState] = useState("");
  

  const handleZipCodeChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setZipCode(value);
  };
  const handleStreetChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setStreet(value);
  };
  const handleNumberChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setNumber(value);
  };

  const handleNeighborhoodChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setNeighborhood(value);
  };

  const handleStateChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setState(value);
  };

  const resetState = function () {
    setZipCode(initialState);
    setStreet(initialState);
    setNumber(initialState);
    setNeighborhood(initialState);
    setState(initialState);
  };

  const handleClick = function () {
    if (
      zipCode === initialState ||
      street === initialState ||
      number === initialState ||
      neighborhood === initialState ||
      state === initialState
    ) {
      alert("Preencha todos os campos por favor.");
    } else {
      const address = new Address(zipCode, street, number, neighborhood, state);
      addToStorage(address, LocalStorageKeys.address);
      resetState();
        }
  };

  return (
    <div>
      <StyledDiv id="AddressForm">
        <Button innerText="Salvar endere??o" onClick={handleClick} />
        <StyledDivFlex>
          <Input
            type="text"
            name="CEP"
            placeholder="Digite seu CEP"
            handleChange={handleZipCodeChange}
            value={zipCode}
          />
        </StyledDivFlex>
        <StyledDivFlex>
          <Input
            type="text"
            name="Rua"
            placeholder="Digite sua rua"
            handleChange={handleStreetChange}
            value={street}
          />
        </StyledDivFlex>
        <StyledDivFlex>
          <Input
            type="text"
            name="N??mero"
            placeholder="Digite o n??mero e complemento"
            handleChange={handleNumberChange}
            value={number}
          />
        </StyledDivFlex>
        <StyledDivFlex>
          <Input
            type="text"
            name="Bairro"
            placeholder="Digite seu bairro"
            handleChange={handleNeighborhoodChange}
            value={neighborhood}
          />
        </StyledDivFlex>
        <StyledDivFlex>
          <Input
            type="text"
            name="Estado"
            placeholder="Digite seu estado"
            handleChange={handleStateChange}
            value={state}
          />
        </StyledDivFlex>
      </StyledDiv>
    </div>
  );
}

export default AddressForm;
