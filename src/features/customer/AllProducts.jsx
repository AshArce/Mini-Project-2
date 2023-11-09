import React from 'react'
import Header from '../../components/Header'
import { Grid, List, ListItem, Paper, Typography } from '@mui/material'

function AllProducts() {
  return (
    <>
      <Header />
      <List>
        <ListItem>
          <Grid container>
            <Grid item xs={6}>All Products</Grid>
            <Grid item xs={6}>Button</Grid>

          </Grid>
        </ListItem>

        <ListItem>
          <Grid container>
            <Grid xs={6}>
              <Paper elevation={2}>
                Item
              </Paper>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </>
  )
}

export default AllProducts