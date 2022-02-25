import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './style';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}
const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
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
