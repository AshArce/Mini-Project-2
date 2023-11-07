import React from 'react'
import { Grid, Link } from '@mui/material'
import LoginModal from '../features/login/LoginModal.jsx'







function NavigationBar() {
  return (

    <Grid container justifyContent='center' spacing={1} >
      <Grid item xs={3}>

        <Link>Home</Link>

      </Grid>
      <Grid item xs={3}>

        <Link>All Products</Link>

      </Grid>
      <Grid item xs={3}>

        <Link>
          Category
        </Link>

      </Grid>
      <Grid item xs={2}>

        <LoginModal />

      </Grid>
    </Grid>

  );
}

export default NavigationBar;
