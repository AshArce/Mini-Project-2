import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import * as styles from './style.js'

function FeaturedProduct() {
  return (
    
      <Grid justifyContent='center' alignContent='center' container sx={{
        
        height: '95vh',
        margin: '0'
      }}>
        <Grid item xs={7}>
        <Box sx={{
              padding: '0 15%'
            }}>
            <Typography  variant='h5' sx={{
              fontWeight: '700'
            }}>
            FEATURED PRODUCT
            </Typography>
            
            <Typography  sx={{
              fontWeight: '300',
              padding: '10px 0px',
              fontSize: '0.7rem'
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam nam ipsa optio dolorem consequatur temporibus obcaecati, corrupti odio molestias.
            </Typography>
            <Typography>
              Price: $$$
            </Typography>
            <Grid container>
          <Button>read more</Button>
          <Button>add to cart</Button>
          </Grid>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <img src='#'></img>
        </Grid>
      </Grid>
    
  )
}

export default FeaturedProduct