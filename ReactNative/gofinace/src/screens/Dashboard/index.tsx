import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import { HighLightCard } from '../../componets/HighLightCard';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
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
  LoadContainer,
} from './styles';
import { useFocusEffect } from '@react-navigation/native';

export interface DataListProps extends TransactionProps {
  id: string;
}

interface HighLightCardData {
  entries: { amount: string, lastTransaction: string; };
  expensives: { amount: string, lastTransaction: string };
  total: { amount: string, lastTransaction: string };
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataListProps[]>([]);
  const [highLightCard, setHighLightCard] = useState<HighLightCardData>({
    entries: { amount: '0' },
    expensives: { amount: '0' },
    total: { amount: '0' },
  } as HighLightCardData);
  const theme = useTheme();
  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative'
  ) {
    const lastTransaction = new Date(Math.max.apply(
      Math,
      collection
        .filter((transaction) => transaction.type === type)
        .map((transaction) => new Date(transaction.date).getTime())
    ));

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', {month: 'long'})}`;
  }
  async function loadTransactions() {
    let entriesSum = 0;
    let expensiveSum = 0;
    const dataKey = '@gofinace:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];
    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesSum += Number(item.amount);
        } else {
          expensiveSum += Number(item.amount);
        }
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
          name: item.name,
          amount,
          type: item.type,
          categoryName: item.categoryName,
          date,
        };
      }
    );
    setData(transactionsFormatted);
    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive');
    const lastTransactionExpensives = getLastTransactionDate(transactions, 'negative');

    setHighLightCard({
      entries: {
        amount: entriesSum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: lastTransactionEntries
      },
      expensives: {
        amount: expensiveSum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: lastTransactionExpensives
      },
      total: {
        amount: (entriesSum - expensiveSum).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: lastTransactionEntries >= lastTransactionExpensives ? lastTransactionEntries : lastTransactionExpensives
      },
    });
    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size={'large'} />
        </LoadContainer>
      ) : (
        <>
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
                amount: highLightCard.entries.amount,
                lastTransaction: 'Última entrada realizada ' + highLightCard.entries.lastTransaction,
              }}
            />
            <HighLightCard
              data={{
                type: 'down',
                title: 'Saída',
                amount: highLightCard.expensives.amount,
                lastTransaction: 'Última saida realizada ' + highLightCard.expensives.lastTransaction,
              }}
            />
            <HighLightCard
              data={{
                type: 'total',
                title: 'Resumo',
                amount: highLightCard.total.amount,
                lastTransaction: 'De 01 à ' + highLightCard.total.lastTransaction,
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
        </>
      )}
    </Container>
  );
}
