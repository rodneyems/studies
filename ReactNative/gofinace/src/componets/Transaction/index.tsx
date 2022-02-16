import React from 'react';
import { ProgressViewIOSComponent } from 'react-native';

import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles';

interface Category {
  name: string;
  icon: string;
}
interface Props {
  title: string;
  amount: string;
  categoryName: Category;
  date: string;
}

export function Transaction({title, amount, categoryName, date} : Props)  {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
      <Footer>
        <Category>
          <Icon name={categoryName.icon}></Icon>
          <CategoryName>{categoryName.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}
