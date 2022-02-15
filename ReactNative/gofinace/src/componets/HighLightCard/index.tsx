import React from "react";
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles"; 

export function HighLightCard(){
  return(
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name='arrow-up-circle' />
      </Header>

      <Footer>
        <Amount>R$: 20.000,00</Amount>
        <LastTransaction>Última entrada dia 14 de Fevereiro</LastTransaction>
      </Footer>
    </Container>
  )
}