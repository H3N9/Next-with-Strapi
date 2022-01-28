import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default theme;
