import React from 'react'
import { Grid, Link } from '@mui/material'
import LoginModal from '../features/login/LoginModal.jsx'
import { Item } from './style.js';







function NavigationBar() {
  return (
    
    <Grid container justifyContent='center' spacing={1} >
    <Grid item xs={3}>
      <Item>
        <Link>Home</Link>
      </Item>
    </Grid>
    <Grid item xs={3}>
      <Item>
        <Link>All Products</Link>
      </Item>
    </Grid>
    <Grid item xs={3}>
      <Item>
        <Link>
          Category
        </Link>
      </Item>
    </Grid>
    <Grid item xs={2}>
      <Item>
        <LoginModal />
      </Item>
    </Grid>
  </Grid>

    
  );
}

export default NavigationBar;
