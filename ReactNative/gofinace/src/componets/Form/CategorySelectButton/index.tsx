import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Category, Icon } from './style';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress} >
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  );
}
