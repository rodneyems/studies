import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 5px;
  margin-bottom: 8px;
`;
