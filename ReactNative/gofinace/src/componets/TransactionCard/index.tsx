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
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    categoryName: Category;
    date: string;
}
interface Props {
  data: TransactionProps
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' ? '- ' : ''}
        {data.amount}
      </Amount>
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
