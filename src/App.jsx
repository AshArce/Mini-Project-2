
import React, { useState } from 'react';
import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/index';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a Material-UI theme
const theme = createTheme();

const router = createBrowserRouter(routes)

function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
