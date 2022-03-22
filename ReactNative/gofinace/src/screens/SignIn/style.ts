import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
` 
export const Header = styled.View`
  width: 100%;
  height: 70%;
  padding: 20% 40px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 60px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
`;

export const Pitch = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(28)}px;
`;

export const SignInTitle = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  padding: 0px 25px;
`;

export const SocialWrapper = styled.View`
  margin-top: -30px;
`;