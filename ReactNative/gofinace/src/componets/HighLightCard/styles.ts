import styled, { css, ThemeProps } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View`
  background-color: ${({theme})=> theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
  background-color: ${({type} : TypeProps) => type === 'total' ? theme.colors.secondary : theme.colors.shape}
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({type} : TypeProps) => type === 'total' ? theme.colors.shape : theme.colors.dark};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  ${({type} : TypeProps) => type === "up" && css`
    color: ${({theme})=> theme.colors.sucess};
  ` } 

  ${({type} : TypeProps) => type === "down" && css`
    color: ${({theme})=> theme.colors.attention};

  ` } 
  ${({type} : TypeProps) => type === "total" && css`
    color: ${({theme})=> theme.colors.shape};
  ` } 
`;

export const Footer = styled.View`

`;

export const Amount = styled.Text`
  color: ${({type} : TypeProps) => type === 'total' ? theme.colors.shape : theme.colors.dark};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({type} : TypeProps) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;


