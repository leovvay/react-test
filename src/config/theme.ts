import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: '"Manrope", "Roboto", "Helvetica"'
  },
  // we can define and use the customization theme
  // color theme info should be implemented here.
});

export default theme;
