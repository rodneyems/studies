import React from 'react';
import {
  GestureHandlerRootView,
  RectButtonProps,
} from 'react-native-gesture-handler';
import { Container, Title } from './style';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ onPress, title, ...rest }: Props) {
  return (
    <GestureHandlerRootView>
      <Container onPress={onPress} {...rest}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
}
