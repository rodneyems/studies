import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({theme})=> theme.colors.secondary};
  padding: ${RFValue(18)}px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({theme})=> theme.colors.shape};
`

export const Teste = styled.View`
  width: 100%;
`
 
