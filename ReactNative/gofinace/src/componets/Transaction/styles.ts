import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  border-radius: 5px;
  padding: 17px 24px;
  background-color: ${({theme}) => theme.colors.shape};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`
export const Amount = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  font-family: ${({theme}) => theme.fonts.regular};
`
export const Footer = styled.View`
  margin-top: 19px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;

`

export const CategoryName = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-left: 17px;
`

export const Date = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`

