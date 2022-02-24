import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  width: 48%;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid ${({theme})=> theme.colors.text};
  border-radius: 5px;
  padding: ${RFValue(16)}px ${RFValue(36)}px;
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

