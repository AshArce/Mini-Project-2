import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function FeaturedProduct() {
  return (
    
      <Grid container spacing={1} sx={{
        display: 'flex',
        alignItems: 'center',
        height: '95vh',
        margin: '0'
      }}>
        <Grid item xs={7}>
        <Box sx={{
              padding: '0 100px'
            }}>
            <Typography variant='h4' sx={{
              fontWeight: '700'
            }}>
            FEATURED PRODUCT
            </Typography>
            
            <Typography sx={{
              fontWeight: '300',
              padding: '10px 0px'
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam nam ipsa optio dolorem consequatur temporibus obcaecati, corrupti odio molestias.
            </Typography>
            <Typography>
              Price: $$$
            </Typography>
          <Button>read more</Button>
          <Button>add to cart</Button>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <img src='#'></img>
        </Grid>
      </Grid>
    
  )
}

export default FeaturedProduct