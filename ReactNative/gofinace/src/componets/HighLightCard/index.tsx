import React from 'react';
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

interface Props {
  data: {
    type: 'up' | 'down' | 'total';
    title: string;
    amount: string;
    lastTransaction: string;
  }
}
const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

export function HighLightCard({ data }: Props) {
  return (
    <Container type={data.type}>
      <Header>
        <Title type={data.type}>{data.title}</Title>
        <Icon name={icon[data.type]} type={data.type} />
      </Header>

      <Footer>
        <Amount type={data.type}>{data.amount}</Amount>
        <LastTransaction type={data.type}>{data.lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
