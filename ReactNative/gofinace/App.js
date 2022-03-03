import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'; 
import AppLoading from 'expo-app-loading';
import { CategorySelect } from './src/screens/CategorySelect';
import { Register } from './src/screens/Register';
import { AppRoutes } from './src/routes/app.routes';
export default function App() {
  const [fontsLoaded] = useFonts ({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  if(!fontsLoaded){
    return <AppLoading></AppLoading>
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
  );
}