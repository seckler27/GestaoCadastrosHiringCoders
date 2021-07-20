import { type } from "os";
import React, { useState } from "react";
import Input from "../input";
import { addToStorage } from "../../Utils/functions";
import { LocalStorageKeys } from "../../Utils/storageKeys";
import Button from "../Button";
import { StyledDiv } from "./styles";
import { StyledDivFlex } from "./styles";

class Product {
    name: string;
    price: string;
    description: string;
    quantity: string;
    constructor(name: string, price: string, description: string, quantity: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity
    }
}

function ProductForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleNameChange = function (event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setName(value);
    }
    const handlePriceChange = function (event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setPrice(value);
    }
    const handleDescriptionChange = function (event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setDescription(value);
    }
    const handleQuantityChange = function (event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setQuantity(value);
    }
    const resetState = function () {
        const initialState = '';
        setName(initialState);
        setPrice(initialState);
        setDescription(initialState);
        setQuantity(initialState);
    }
    const handleClick = function () {
        const product = new Product(name, price, description, quantity);
        addToStorage(product, LocalStorageKeys.products);
        resetState();
    }


    return (
        <StyledDiv className="ProductForm">
            <StyledDiv>
                <Input name="Nome" placeholder="Nome" handleChange={handleNameChange} value={name} />
            </StyledDiv>
            <StyledDiv>
                <Input name="Preço" placeholder="Preço" handleChange={handlePriceChange} value={price} />
            </StyledDiv>
            <StyledDiv>
                <Input name="Descrção" placeholder="Descrição do produto" handleChange={handleDescriptionChange} value={description} />
            </StyledDiv>
            <StyledDiv>
                <Input name="Quantidade" placeholder="Quantidade" handleChange={handleQuantityChange} value={quantity} />

            </StyledDiv>
            <StyledDivFlex>
                <Button onClick={handleClick} />
            </StyledDivFlex>



        </StyledDiv >

    );
}

export default ProductForm;
