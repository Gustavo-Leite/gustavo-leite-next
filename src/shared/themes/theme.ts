import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A202C',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    body1: {
      fontWeight: 500,
      fontSize: '1.20rem',
    },
    body2: {
      fontWeight: 500,
      fontSize: '1.05rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});