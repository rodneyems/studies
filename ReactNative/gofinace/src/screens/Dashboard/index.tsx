import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { HighLightCard } from '../../componets/HighLightCard';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
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
  const [data, setData] = useState<DataListProps[]>([]);
  async function loadTransactions() {
    const dataKey = '@gofinace:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    
    const transactions = response ? JSON.parse(response) : [];
    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          title: item.name,
          amount,
          transactionsType: item.type,
          categoryName: item.categoryName,
          date,
        };
      }
    );
    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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
