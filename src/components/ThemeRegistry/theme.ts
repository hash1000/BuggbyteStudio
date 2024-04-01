import { createTheme } from '@mui/material/styles';
import { changa } from './fonts';

const theme = createTheme({
//   palette: {
//     mode: 'light',
//   },
  typography: {
    fontFamily: changa.style.fontFamily,
  },
});

export default theme;