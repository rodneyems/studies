import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryCard } from '../../componets/HistoryCard';
import { TransactionProps } from '../../componets/TransactionCard';
import { Container, Title, Header } from './styles';
import { categories } from '../../global/utils/categories';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

interface CategoryProps {
  name: string;
  total: string;
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
    const totalByCategory: CategoryProps[] = [];
    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive) => {
        if (expensive.categoryName === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        totalByCategory.push({
          name: category.name,
          total: categorySum.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
        });
      }
    });
    setTotalByCategory(totalByCategory);
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
      <FlatList
        data={totalByCategory}
        keyExtractor={(item, index)=>{
          return index.toString()
        }}
        renderItem={({ item }) => (
          <HistoryCard amount={item.total} color={categories.find(category => category.name === item.name)?.color || 'blue'} title={item.name} />
        )}
      />
    </Container>
  );
}
