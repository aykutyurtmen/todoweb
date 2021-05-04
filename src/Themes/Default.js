import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1540,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: '#eff3f6',
    },
    text: {
      primary: '#354052',
      secondary: '#354052',
      hint: '#354052',
      disabled: '#354052',
    },
    primary: {
      main: '#222c3c',
      light: '#354052',
      dark: '#1D2531',
    },
    secondary: {
      main: '#7f8fa4',
    },
    accent: {
      main: '#2399F1',
    },
    info: {
      main: '#1786E8',
    },
  },
  typography: {
    h3: {
      fontSize: '1.4em',
      fontWeight: 400,
      lineHeight: '1.8em',
    },
    h4: {
      fontSize: '1.2em',
      fontWeight: 700,
      lineHeight: '1.6em',
    },
  },
  constants: {
    drawerWidth: 350,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey',
        },
      },
    },
    MuiStepIcon: {
      root: {
        '&$completed': {
          fill: '#66B92E',
          border: 'unset',
          '&$text': {
            fill: '#ffffff',
          },
        },
        '&$active': {
          fill: '#7F8FA4',
          border: 'unset',
          '& $text': {
            fill: '#ffffff',
          },
          '&$completed': {
            fill: '#1786E8',
          },
        },
        '&$text': {
          color: '#7F8FA4',
          fontSize: 14,
          fontWeight: 600,
        },
        color: 'transparent !important',
        border: '1px solid #7F8FA4;',
        borderRadius: '50%',
      },
      active: {},//needed so that the &$active tag works
      text: {
        fill: '#7F8FA4',
        fontSize: 14,
        fontWeight: 600,
      },
      completed: {
        color: '#00ff73',
        fill: 'pink',
      },
    },
    MuiStepLabel: {
      label: {
        color: '#848C98',
        fontSize: 14,
      },
    },
    MuiSelect: {
      select: {
        backgroundColor: 'transparent',
        padding: 'inherit',
        '&:focus': {
          borderRadius: 'none',
          borderColor: 'unset',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiInputBase: {
      input: {
        '&:focus': {
          width: '100%',
          height: 'auto',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        height: 'auto',
        minHeight: 36,
        boxSizing: 'border-box',
        boxShadow: 'inset 0 2px 1px 1px rgba(0,0,0,0.04)',
      },
      input: {
        padding: '0 14px',
        height: '100%',
      },
      inputMultiline:{
        padding: '7px 14px',
        height: '100%',
      },
      adornedEnd:{
        paddingRight:0
      }
    },

    MuiButton: {
      root: {
        marginLeft: 0,
        marginRight: 12,
        '&:hover': {
          backgroundColor: 'none',
        },
      },
    },
    MuiTypography: {
      subtitle2: {
        margin: '0 6px',
      },
    },
    MuiStepper: {
      root: {
        padding: '24px 0',
      },
    },
    MuiStepConnector: {
      horizontal: {
        display: 'none',
      },
    },
    MuiStep: {
      horizontal: {
        paddingRight: 32,
        paddingLeft: 0,
      },
    },
    MuiLinearProgress: {
      barColorSecondary: {
        backgroundColor: '#1786E8',
      },
    },
    MuiAutocomplete: {
      inputRoot: {
        marginLeft: 0,
      },
      input: {
        padding: '0 6px!important',
        fontSize: 14,
      },
    },
    MuiTableSortLabel: {
      root: {
        width: '100%',
        justifyContent: 'space-between'
      },
    },
  },
})
