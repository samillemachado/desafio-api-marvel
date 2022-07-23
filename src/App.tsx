import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './config/GlobalStyled';
import Home from './pages/Home';

const temas = {
  dark: {
    color: '#fefefe',
    backgroundColor: '#202020',
    primary: '#EC1D24',
  },

  light: {
    color: '#333',
    backgroundColor: '#fefefe',
    primary: '#333',
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={temas}>
      <GlobalStyled />
      <Home />
    </ThemeProvider>
  );
};

export default App;
