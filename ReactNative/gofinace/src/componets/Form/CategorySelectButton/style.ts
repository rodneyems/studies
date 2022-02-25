import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import {Feather} from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme})=> theme.colors.shape};
  padding: ${RFValue(18)}px ${RFValue(16)}px;
`;

export const Category = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;