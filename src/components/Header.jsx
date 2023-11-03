import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import NavigationBar from './NavigationBar'
import SearchBar from './SearchBar'


function Header() {
  return (
      <Container>
      <Grid className='headerGrid'  
            container spacing={1} 
            justifyContent='center'
              sx={{padding: '2% 0px'}}>
        <Grid  item xs={3}>
          <Typography sx={{padding: '0px 25%'}}>
            Kartcheck
          </Typography>
        </Grid> 
        <Grid item xs={6}>
          <NavigationBar />
         </Grid>
        <Grid item xs={3}>
          <SearchBar />
        </Grid>
    </Grid>
    </Container>
  )
}

export default Header