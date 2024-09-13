import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple[200],
      light: colors.purple[100],
      dark: colors.purple[400],
      contrastText: '#fff',
    },
    secondary: {
      main: colors.purple[200],
      light: colors.purple[100],
      dark: colors.purple[400],
      contrastText: '#fff',
    },
    error: {

    },
    warning: { 

    },
    info: {

    },
    success: {

    }
  },
  typography: {
    fontFamily: '',
    fontSize: 14,
    h1: {
        fontSize: 20,
    },
    h2: {
        fontSize: 16,
    },
    button: {
        fontSize: 15,
    }

  },
  spacing: 6,
  breakpoints: {
    values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
    },
  }
});

export default theme;