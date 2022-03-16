import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryCard } from '../../componets/HistoryCard';
import { TransactionProps } from '../../componets/TransactionCard';
import { Container, Title, Header, CategoriesList, ChartContainer } from './styles';
import { categories } from '../../global/utils/categories';
import { useFocusEffect } from '@react-navigation/native';
import { VictoryPie } from 'victory-native';

interface CategoryProps {
  name: string;
  total: string;
  key: string;
  color: string;
  percent: number;
  percentString: string
}

export function Resume() {
  const [totalByCategory, setTotalByCategory] = useState<CategoryProps[]>([]);
  async function loadData() {
    const dataKey = '@gofinace:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions: TransactionProps[] = response
      ? JSON.parse(response)
      : [];

    const expensives = transactions.filter(
      (expensive) => expensive.type === 'negative'
    );
    const expensivesTotal = expensives.reduce((total: number, item: TransactionProps) => {
      return total + Number(item.amount)
    }, 0)
    const totalByCategoryList: CategoryProps[] = [];
    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive) => {
        if (expensive.categoryName === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      const percentCategory = Number((categorySum / expensivesTotal * 100).toFixed(0))
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
          percentString: percentCategory + '%'
        });
      }
    });
    setTotalByCategory(totalByCategoryList);
  }
  useEffect(() => {
    loadData();
  }, []);
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );
  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>
      <ChartContainer>
        <VictoryPie 
          data={totalByCategory}
          x='percentString'
          y='percent'
          colorScale={totalByCategory.map(category => category.color)}
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
    </Container>
  );
}
