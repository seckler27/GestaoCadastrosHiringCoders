import { type } from "os";
import React, { useState } from "react";
import Input from "../input";
import { addToStorage } from "../../Utils/functions";
import { LocalStorageKeys } from "../../Utils/storageKeys";
import Button from "../Button";
import { StyledDiv } from "./styles";
import { StyledDivFlex } from "./styles";

export class Product {
  name: string;
  price: string;
  description: string;
  quantity: string;
  constructor(
    name: string,
    price: string,
    description: string,
    quantity: string
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }
}

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [initialState, setInitialState] = useState("");
  const handleNameChange = function (event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setName(value.trim());
  };
  const handlePriceChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setPrice(value);
  };
  const handleDescriptionChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setDescription(value);
  };
  const handleQuantityChange = function (
    event: React.FormEvent<HTMLInputElement>
  ) {
    const value = event.currentTarget.value;
    setQuantity(value);
  };
  const resetState = function () {
    setName(initialState);
    setPrice(initialState);
    setDescription(initialState);
    setQuantity(initialState);
  };
  const handleClick = function () {
    if (
      name === initialState ||
      price === initialState ||
      description === initialState ||
      quantity === initialState
    ) {
      alert("Preencha todos os campos por favor.");
    } else {
      const product = new Product(name.trim(), price, description, quantity);
      addToStorage(product, LocalStorageKeys.products);
      resetState();
    }
  };

  return (
    <StyledDiv id="ProductForm">
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
          type="number"
          name="Preço"
          placeholder="Preço"
          handleChange={handlePriceChange}
          value={price}
        />
      </StyledDivFlex>
      <StyledDivFlex>
        <Input
          type="text"
          name="Descrção"
          placeholder="Descrição do produto"
          handleChange={handleDescriptionChange}
          value={description}
        />
      </StyledDivFlex>
      <StyledDivFlex>
        <Input
          type="number"
          name="Quantidade"
          placeholder="Quantidade"
          handleChange={handleQuantityChange}
          value={quantity}
        />
      </StyledDivFlex>
      <StyledDivFlex>
        <Button innerText="Cadastrar" onClick={handleClick} />
      </StyledDivFlex>
    </StyledDiv>
  );
}

export default ProductForm;
