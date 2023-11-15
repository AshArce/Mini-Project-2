import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import styles from '../features/Styles/landpagestyle'

function FeaturedProduct() {
  return (

    <Grid justifyContent='center' alignContent='center' container sx={{

      height: '75vh',
      margin: '0'
    }}>
      <Grid item xs={8}>
        <Box sx={{
          padding: '0 10%'
        }}>
          <Typography variant='h1'>
            FEATURED PRODUCT
          </Typography>

          <Typography variant='p' sx={{

          }}>
            Elevate your style with the iconic Jordan 1 Pine Green Low. Classic design meets comfort for a timeless fashion statement.
          </Typography>
          <Typography>
            Price: $$$
          </Typography>
          <Grid container spacing={0}>
            <Grid item sm={12} md={6} >
              <Button
                style={styles.fpButton}
              >
                Add to Kart
              </Button>
            </Grid>
            <Grid item sm={12} md={6}>
              <Button
                style={styles.fpButton}

              >
                read more
              </Button>
            </Grid>

          </Grid>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <img style={styles.fpItem} src="./images/featureditem1.png"></img>
      </Grid>
    </Grid>

  )
}

export default FeaturedProduct