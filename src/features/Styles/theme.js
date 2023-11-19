import { createTheme } from "@mui/material/styles";

import "@fontsource/poppins";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1366,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#00b565",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h2: {
      fontSize: "1.7rem",
      fontWeight: 500,
      lineHeight: 1,
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.4rem",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1,
    },
    button: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 600,
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {},
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          padding: "3% 10%",
          margin: "5px",

          "@media (min-width:600px)": {},
        },
        text: {
          fontSize: "0.8rem",
          fontWeight: 700,
          whiteSpace: "nowrap",
          padding: "10% 40%",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#6d6d6d", // Customize link color
          fontWeight: 700,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

export default theme;
