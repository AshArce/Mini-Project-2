// ResponsiveComponents.jsx

import { styled } from "@mui/system";
import { Paper, Box, Link, Button, useTheme } from "@mui/material";

const ResponsivePaper = styled(Paper)(({ theme }) => ({
  // Responsive styling for Paper
  // ...
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  // Responsive styling for Box
  // ...
}));

const ResponsiveLink = styled(Link)(({ theme }) => ({
  // Responsive styling for Link
  // ...
}));

//BUTTONS
const ResponsiveButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: red[400],
  width: "200px", // Default color

  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[200],
    width: "500px",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
    width: "100px",
  },
}));

export { ResponsivePaper, ResponsiveBox, ResponsiveLink, ResponsiveButton };
