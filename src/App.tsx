import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import GlobalStyled from './config/GlobalStyled';
import defaultTheme from './config/theme/Default';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
