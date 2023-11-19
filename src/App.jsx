
import React from 'react';
import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/index';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from './features/Styles/theme.js';

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
