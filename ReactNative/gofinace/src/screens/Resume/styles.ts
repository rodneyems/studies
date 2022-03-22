import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const CategoriesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 15px;
  width: 100%;
` as unknown as typeof FlatList;

export const ChartContainer = styled.View`
  height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MonthSelect = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MonthSelectButton = styled.TouchableOpacity`
`;
export const MonthSelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;
export const Month = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: ${RFValue(20)}px;

`;