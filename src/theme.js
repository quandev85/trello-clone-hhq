import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  trello: {
    height: {
      appBar: '48px',
      boardBar: '58px',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#1976d2',
        // },
        // secondary: {
        //   main: '#dc004e',
        // },
      },
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#000',
        // },
      },
    },
  },
});

export default theme;
