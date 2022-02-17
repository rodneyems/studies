import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

interface Category {
  name: string;
  icon: string;
}
export interface TransactionProps {
  data: {
    title: string;
    amount: string;
    categoryName: Category;
    date: string;
  };
}

export function TransactionCard({ data }: TransactionProps) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <Icon name={data.categoryName.icon}></Icon>
          <CategoryName>{data.categoryName.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
