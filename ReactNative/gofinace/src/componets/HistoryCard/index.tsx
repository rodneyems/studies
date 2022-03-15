import React from 'react';
import { Container, Title, Amount } from './styles';

interface HistoryCardProps{
  title: string,
  amount: string,
  color: string,
}
export function HistoryCard(props: HistoryCardProps) {
  return (
    <Container color={props.color} >
      <Title>{props.title}</Title>
      <Amount>{props.amount}</Amount>
    </Container>
  )
}
