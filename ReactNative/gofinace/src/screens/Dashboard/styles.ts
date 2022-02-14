import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background };
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: ${RFPercentage(42)}px;
  background-color: ${({theme}) => theme.colors.primary};  
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 8px;
`

export const User = styled.View`
  margin-left: 17px;
`

export const Greattings = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-bottom: -8px;
`

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`

export const PowerIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`