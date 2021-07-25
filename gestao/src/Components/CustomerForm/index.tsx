import { type } from "os";
import React, { useState } from "react";
import Input from "../input";
import { addToStorage } from "../../Utils/functions";
import { LocalStorageKeys } from "../../Utils/storageKeys";
import Button from "../Button";
import { StyledDiv } from "./styles";
import { StyledDivFlex } from "./styles";
import AddressForm from "../AddressForm"
import { IsAddressSaved,getAddress } from "../../Utils/functions";

class Address {
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  zipCode: string;
  constructor(
    street: string,
    number: string,
    neighborhood: string,
    state: string,
    zipCode: string
  ) {
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.state = state;
    this.zipCode = zipCode;
  }
}

export class Customer {
  name: string;
  surname: string;
  idNumber: string;
  phoneNumber: string;
  address: Address;
  constructor(
    name: string,
    surname: string,
    idNumber: string,
    phoneNumber: string,
    address:Address
  ) {
    this.name = name;
    this.surname = surname;
    this.idNumber = idNumber;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
export let isFilled = false;
function CustomerForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [initialState, setInitialState] = useState("");

  // const[address,setAdress]=useState( new Address());

  const handleNameChange = function (event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setName(value);
  };
  const handleSurnameChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setSurname(value);
  };
  const handleIdChange = function (event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setIdNumber(value);
  };
  const handlePhoneChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setPhoneNumber(value);
  };

  const resetState = function () {
    setName(initialState);
    setSurname(initialState);
    setIdNumber(initialState);
    setPhoneNumber(initialState);
  };

  const handleClick = function () {
    const isSaved = IsAddressSaved();
    if (
     ( ((name !==initialState) ||
        (surname !==initialState) ||
        (idNumber !==initialState) ||
        (phoneNumber !==initialState)) &&
        (isSaved))
    ) {
      const address = getAddress();
      const customer = new Customer(name.trim(), surname, idNumber, phoneNumber,address[0]);
      addToStorage(customer, LocalStorageKeys.customers);
      resetState();
      localStorage.removeItem(LocalStorageKeys.address)
      alert('ok');
      
    } else {
      alert("Preencha todos os campos por favor.");
    }
  };

  return (
    <StyledDiv id="CustomerForm">
      <StyledDivFlex>
        <Input
          type="text"
          name="Nome"
          placeholder="Nome"
          handleChange={handleNameChange}
          value={name}
        />
      </StyledDivFlex>
      <StyledDivFlex>
        <Input
          type="text"
          name="Sobrenome"
          placeholder="Sobrenome"
          handleChange={handleSurnameChange}
          value={surname}
        />
      </StyledDivFlex>
      <StyledDivFlex>
        <Input
          type="number"
          name="CPF"
          placeholder="Digite seu CPF"
          handleChange={handleIdChange}
          value={idNumber}
        />
      </StyledDivFlex>
      <StyledDivFlex>
        <Input
          type="number"
          name="Telefone"
          placeholder="Digite seu Telefone"
          handleChange={handlePhoneChange}
          value={phoneNumber}
        />
      </StyledDivFlex>
      <AddressForm></AddressForm>
      <StyledDivFlex>
        <Button innerText="Cadastrar" onClick={handleClick} />
      </StyledDivFlex>
    </StyledDiv>
  );
}

export default CustomerForm;
