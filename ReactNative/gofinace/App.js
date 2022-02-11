import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Dasboard } from './src/Dashboard/Dashboard';
import theme from './src/global/styles/theme';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'; 
import AppLoading from 'expo-app-loading';
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
      <Dasboard></Dasboard>
    </ThemeProvider>
  );
}