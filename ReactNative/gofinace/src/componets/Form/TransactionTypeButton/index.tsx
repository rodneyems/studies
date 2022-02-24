import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './style';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
}
const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}
export function TransactionTypeButton({
  title,
  type,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Icon name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
