import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape };
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 12px;
`;
export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${RFValue(16)}px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background };
`;
export const LoginSocialIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
export const LoginSocialName = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium };
`;
