import React from 'react';
import { categories } from '../../global/utils/categories';

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


export interface TransactionProps {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    categoryName: string;
    date: string;
}
interface Props {
  data: TransactionProps
}

export function TransactionCard({ data }: Props) {
  const [ category ] = categories.filter(item => {
    return item.key === data.categoryName
  })
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' ? '- ' : ''}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon}></Icon>
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
