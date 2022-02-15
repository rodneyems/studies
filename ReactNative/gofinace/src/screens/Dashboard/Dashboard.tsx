import React from 'react';
import { HighLightCard } from '../../componets/HighLightCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  Greattings,
  UserName,
  PowerIcon,
  HighLightCards,
} from './styles';

export function Dasboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://bit.ly/3oJ3okZ' }} />
            <User>
              <Greattings>Olá, </Greattings>
              <UserName>Rodney</UserName>
            </User>
          </UserInfo>
          <PowerIcon name='power' />
        </UserWrapper>
      </Header>
      <HighLightCards>
        <HighLightCard
          type='up'
          title='Entrada'
          amount='R$ 50.000,00'
          lastTransaction='Última transação realizada dia 15/02/2022'
        />
        <HighLightCard
          type='down'
          title='Saída'
          amount='R$ 19.000,00'
          lastTransaction='Última transação realizada dia 15/02/2022'
        />
        <HighLightCard
          type='total'
          title='Resumo'
          amount='R$ 20.000,00'
          lastTransaction='Última transação realizada dia 15/02/2022'
        />
      </HighLightCards>
    </Container>
  );
}
