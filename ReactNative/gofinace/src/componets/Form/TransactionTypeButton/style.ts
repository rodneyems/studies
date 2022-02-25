import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
interface ContainerProps {
  isActive: boolean;
  type: string;
}
export const Container = styled(TouchableOpacity)<ContainerProps>`
  justify-content: center;
  width: 48%;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid ${({theme})=> theme.colors.text};
  border-radius: 5px;
  padding: ${RFValue(16)}px ${RFValue(36)}px;
  ${({isActive, type}) => isActive && type === 'up' ? css`background-color: ${({theme})=> theme.colors.sucess_light}` : css`${({theme})=> theme.colors.background}` };
  ${({isActive, type}) => isActive && type === 'down' ? css`background-color: ${({theme})=> theme.colors.attention_light}` : css`${({theme})=> theme.colors.background}` };
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

