import React from 'react';
import { HighLightCard } from '../../componets/HighLightCard';
import { TransactionCard } from '../../componets/TransactionCard';
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
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export function Dasboard() {
  const transactionData = [
    {
      amount: 'R$ 100.000,00',
      categoryName: { name: 'Vendas', icon: 'dollar-sign' },
      date: '10/11/2021',
      title: 'Desenvolvimento de APP',
    },
    {
      amount: 'R$ 100.000,00',
      categoryName: { name: 'Vendas', icon: 'dollar-sign' },
      date: '10/11/2021',
      title: 'Desenvolvimento de APP',
    },
    {
      amount: 'R$ 100.000,00',
      categoryName: { name: 'Vendas', icon: 'dollar-sign' },
      date: '10/11/2021',
      title: 'Desenvolvimento de APP',
    },
  ];

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
          data={{
            type: 'up',
            title: 'Entrada',
            amount: 'R$ 50.000,00',
            lastTransaction: 'Última transação realizada dia 15/02/2022',
          }}
        />
        <HighLightCard
          data={{
            type: 'down',
            title: 'Saída',
            amount: 'R$ 50.000,00',
            lastTransaction: 'Última transação realizada dia 20/02/2022',
          }}
        />
        <HighLightCard
          data={{
            type: 'total',
            title: 'Resumo',
            amount: 'R$ 50.000,00',
            lastTransaction: 'Última transação realizada dia 28/02/2022',
          }}
        />
      </HighLightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          showsVerticalScrollIndicator={false}
          data={transactionData}
          renderItem={({ item }) => (
            <TransactionCard data={item}></TransactionCard>
          )}
        ></TransactionsList>
      </Transactions>
    </Container>
  );
}
