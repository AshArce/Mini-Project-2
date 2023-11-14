import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // custom breakpoint for extra-small screens
      sm: 425, // custom breakpoint for small screens
      md: 768, // custom breakpoint for medium screens
      lg: 1280, // custom breakpoint for large screens
      xl: 1920, // custom breakpoint for extra-large screens
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    p: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },

    button: {
      textTransform: "none",
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
          backgroundColor: "#60894a",
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
