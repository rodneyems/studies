import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './style';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'positive' | 'negative';
  isActive: boolean;
}
const icons = {
  positive: 'arrow-up-circle',
  negative: 'arrow-down-circle',
}
export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
