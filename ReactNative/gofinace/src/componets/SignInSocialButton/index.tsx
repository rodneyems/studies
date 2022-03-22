import React from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  IconContainer,
  LoginSocialIcon,
  LoginSocialName
} from './styles'
interface Props extends RectButtonProps{
  image: ImageSourcePropType,
  name: string
}
export function SignInSocialButton(props: Props) {
  return (
    <Container>
      <IconContainer>
        <LoginSocialIcon source={props.image} />
      </IconContainer>
      <LoginSocialName>
        {props.name}
      </LoginSocialName>
    </Container>
  )
}
