import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Dasboard } from './src/Dashboard/Dashboard';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dasboard></Dasboard>
    </ThemeProvider>
  );
}