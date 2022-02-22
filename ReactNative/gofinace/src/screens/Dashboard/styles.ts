import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background };
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  height: ${RFPercentage(40)}px;
  background-color: ${({theme}) => theme.colors.primary};  
`;

export const UserWrapper = styled.View`
  margin-top: ${RFPercentage(8)}px;
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

export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
  position: absolute;

  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
  align-items: flex-start;
`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;

`
export const TransactionsList = styled.FlatList`
  width: 100%;
` as unknown as typeof FlatList;