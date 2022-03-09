import {createTheme} from "@mui/material";

export const emotionTheme = {
  colors: {
    black: '#070707',
    green: '#0DB145',
    white: '#ffffff',
    grey: '#ABABAB',
  },
  fontSizes: {
    sm: '10px',
    md: '12px',
    lg: '14px',
    xl: '48px',
    xxl: '72px',
  }
}

export const muiTheme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      }
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'main'},
          style: {
            width: '111px',
            height: '36px',
            textTransform: 'uppercase',
            fontWeight: 700,
            borderRadius: '36px',
            background: '#0DB145',
            border: '3px solid #0DB145'
          }
        }
      ]
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: 'inherit'
      }
    }
  }
})

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    main: true;
  }
}