import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { HistoryCard } from '../../componets/HistoryCard';
import { TransactionProps } from '../../componets/TransactionCard';
import {
  Container,
  Title,
  Header,
  CategoriesList,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
} from './styles';
import { categories } from '../../global/utils/categories';
import { useFocusEffect } from '@react-navigation/native';
import { VictoryPie } from 'victory-native';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LoadContainer } from '../Dashboard/styles';
import theme from '../../global/styles/theme';

interface CategoryProps {
  name: string;
  total: string;
  key: string;
  color: string;
  percent: number;
  percentString: string;
}

export function Resume() {
  const [totalByCategory, setTotalByCategory] = useState<CategoryProps[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  function handleDate(action: 'next' | 'prev') {
    setIsLoading(true);
    if (action === 'next') {
      const newDate = addMonths(selectedDate, 1);
      setSelectedDate(newDate);
    } else {
      const newDate = subMonths(selectedDate, 1);
      setSelectedDate(newDate);
    }
  }

  async function loadData() {
    const dataKey = '@gofinace:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions: TransactionProps[] = response
      ? JSON.parse(response)
      : [];

    const expensives = transactions.filter(
      (expensive) =>
        expensive.type === 'negative' &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    );
    const expensivesTotal = expensives.reduce(
      (total: number, item: TransactionProps) => {
        return total + Number(item.amount);
      },
      0
    );
    const totalByCategoryList: CategoryProps[] = [];
    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive) => {
        if (expensive.categoryName === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      const percentCategory = Number(
        ((categorySum / expensivesTotal) * 100).toFixed(0)
      );
      if (categorySum > 0) {
        totalByCategoryList.push({
          name: category.name,
          total: categorySum.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
          key: category.key,
          color: category.color,
          percent: percentCategory,
          percentString: percentCategory + '%',
        });
      }
    });
    setTotalByCategory(totalByCategoryList);
    setIsLoading(false);
  }
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );
  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size={'large'} />
        </LoadContainer>
      ) : (
        <>
          <MonthSelect>
            <MonthSelectButton onPress={() => handleDate('prev')}>
              <MonthSelectIcon name='chevron-left' />
            </MonthSelectButton>
            <Month>
              {' '}
              {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}{' '}
            </Month>
            <MonthSelectButton onPress={() => handleDate('next')}>
              <MonthSelectIcon name='chevron-right' />
            </MonthSelectButton>
          </MonthSelect>
          <ChartContainer>
            <VictoryPie
              data={totalByCategory}
              x='percentString'
              y='percent'
              colorScale={totalByCategory.map((category) => category.color)}
              width={300}
            />
          </ChartContainer>
          <CategoriesList
            data={totalByCategory}
            renderItem={({ item }) => (
              <HistoryCard
                key={item.key}
                amount={item.total}
                color={item.color}
                title={item.name}
              />
            )}
          />
        </>
      )}
    </Container>
  );
}
