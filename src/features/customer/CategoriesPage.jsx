import React from 'react'
import Header from '../../components/Header'
import { Grid, List, ListItem, Paper, Typography } from '@mui/material'

function AllProducts() {
  return (
    <>
      <Header />
      <List>
        <ListItem>
          <Typography>Shoes</Typography>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                See more
              </Paper>
            </Grid>
          </Grid>
        </ListItem>

        <ListItem>
          <Typography>Tops</Typography>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                See more
              </Paper>
            </Grid>
          </Grid>
        </ListItem>

        <ListItem>
          <Typography>Bottoms</Typography>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                See more
              </Paper>
            </Grid>
          </Grid>
        </ListItem>

      </List>
    </>
  )
}

export default AllProducts