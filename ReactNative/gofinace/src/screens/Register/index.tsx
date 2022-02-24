import React from "react";
import { Button } from "../../componets/Form/Button";
import { CategorySelect } from "../../componets/Form/CategorySelect";
import { Input } from "../../componets/Form/Input";
import { TransactionTypeButton } from "../../componets/Form/TransactionTypeButton";
import { 
  Container, 
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

export function Register(){
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome"/>
          <Input placeholder="Preço"/>
          <TransactionsTypes>
            <TransactionTypeButton type="up" title="Income"/>
            <TransactionTypeButton type="down" title="Outcome"/>
          </TransactionsTypes>
            <CategorySelect title={"Categoria"}></CategorySelect>
        </Fields>

        <Button title="Confirmar"></Button>
      </Form>
    </Container>
  ); 
}