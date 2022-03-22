import React from 'react';
import {
  Container,
  Header,
  TitleWrapper,
  Logo,
  Title,
  Pitch,
  SignInTitle,
  Footer,
  SocialWrapper
} from './style';
import logo from '../../assets/logo.png';
import apple from '../../assets/apple.png';
import google from '../../assets/google.png';
import { SignInSocialButton } from '../../componets/SignInSocialButton';

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo source={logo} />
          <Title>gofinance</Title>
        </TitleWrapper>
        <Pitch>
          Controle suas 
          finanças de forma 
          muito simples.
        </Pitch>
        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <SocialWrapper>
          <SignInSocialButton name='Entrar com Google' image={google} />
          <SignInSocialButton name='Entrar com Apple' image={apple} />
        </SocialWrapper>
      </Footer>
    </Container>
  );
}
