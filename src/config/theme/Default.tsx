import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EC1D24',
      light: '#fff',
    },
    secondary: {
      main: '#202020',
    },
  },
  typography: {
    fontFamily: 'Francois One',
  },
});

export default defaultTheme;
