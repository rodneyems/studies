import React from 'react';
import { FlatList } from 'react-native';
import { HighLightCard } from '../../componets/HighLightCard';
import {
  TransactionCard,
  TransactionProps,
} from '../../componets/TransactionCard';
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
  LogoutButton,
} from './styles';

export interface DataListProps extends TransactionProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de APP',
      amount: 'R$ 100.000,00',
      categoryName: { name: 'Vendas', icon: 'dollar-sign' },
      date: '10/11/2021',
    },
    {
      id: '2',
      type: 'positive',
      title: 'Desenvolvimento de APP',
      amount: 'R$ 2.000,00',
      categoryName: { name: 'Vendas', icon: 'dollar-sign' },
      date: '10/11/2021',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Desenvolvimento de APP',
      amount: 'R$ 13.000,00',
      categoryName: { name: 'Vendas', icon: 'dollar-sign' },
      date: '10/11/2021',
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
          <LogoutButton onPress={() => {}}>
            <PowerIcon name='power' />
          </LogoutButton>
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
          data={data}
          renderItem={({ item }) => (
            <TransactionCard data={item}></TransactionCard>
          )}
        />
      </Transactions>
    </Container>
  );
}
