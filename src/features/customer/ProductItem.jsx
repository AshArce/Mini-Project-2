import React from 'react'
import Header from '../../components/Header'
import { Button, Grid, Input, Paper, Typography } from '@mui/material'
import { Input as BaseInput } from '@mui/base/Input';
import { Box } from '@mui/system'

function ProductItem() {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12}>

          <Grid item xs={12}>
            <img src="#" alt="sdadsa" />
          </Grid>

          <Grid item xs={12}>
          </Grid>
          <Paper>
            <Typography>Nike Air Jordan 1</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime hic est voluptas voluptatibus corrupti perspiciatis nemo ullam commodi aliquam?</Typography>
          </Paper>
          <Box>
            <Typography>$1500</Typography>
            <Button>Add too cart</Button>
          </Box>
          <Grid>

          </Grid>
        </Grid>

        <Grid item xs={12}>

          <Grid item xs={12}>
            <Box>
              <Typography>All Reviews</Typography>
              <Paper>
                <img src="#" alt="Stars" />
                <Typography>Username</Typography>
                <Typography>comments</Typography>

              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Paper>
              <Typography>
                Add a Review
              </Typography>
              <img src="#" alt="Stars" />
              <Box>
                <Input aria-label="Demo input" placeholder="Subject" />
                <Input aria-label="Demo input" placeholder="Description" />
              </Box>
            </Paper>
          </Grid>

        </Grid>

      </Grid>
    </>
  )
}

export default ProductItem