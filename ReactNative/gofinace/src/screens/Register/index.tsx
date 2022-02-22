import React from "react";
import { Button } from "../../componets/Form/Button";
import { Input } from "../../componets/Form/Input";
import { 
  Container, 
  Header,
  Title,
  Form,
  Fields,
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
        </Fields>

        <Button title="Confirmar"></Button>
      </Form>
    </Container>
  ); 
}