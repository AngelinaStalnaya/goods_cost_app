import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green.main,
      light: colors.green[300],
      dark: colors.green[700],
      contrastText: '#000000',
    },
    secondary: {
      main: colors.purple.main,
      light: colors.purple[300],
      dark: colors.purple[700],
      contrastText: '#ffffff',
    },
    error: {
      main: colors.wine[900]
    },
    warning: { 
      main: colors.wine[400],
    },
    info: {
      main: colors.mint[700],
    },
    success: {
      main: colors.terracot[500],
    }
  },
  typography: {
    fontFamily: 'Comfortaa',
    fontSize: 17,

    h1: {
        fontSize: 40,
        fontWeight: 700,
        color: colors.purple[900],
    },
    h2: {
        fontSize: 25,
    },
    button: {
        fontSize: 20,
    }
  },
  components: {},
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