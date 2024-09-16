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
      main: colors.wine.main
    },
    warning: { 
      main: colors.terracot.main,
    },
    info: {
      main: colors.marshmallows.main,
    },
    success: {
      main: colors.mint.main,
    }
  },
  typography: {
    fontFamily: 'Comfortaa',
    fontSize: 14,
    h1: {
        fontSize: 20,
        color: colors.purple[500],
    },
    h2: {
        fontSize: 16,
    },
    button: {
        fontSize: 15,
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