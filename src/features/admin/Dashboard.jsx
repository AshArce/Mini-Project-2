import React from 'react'
import { Grid, Paper } from '@mui/material'
import AdminNavigations from './AdminNavigations'


function Dashboard() {
  return (
    <Grid container 
          justifyContent='center' 
          alignItems='center' 
          spacing={1} 
          sx={{
            height:'100vh',
          }}>
      
     <Grid
              item xs={3}
              container
              direction="column"
              justifyContent="space-evenly  "
              alignItems="stretch"
              sx={{
                backgroundColor:'#39A848',
                height:'100vh'}}
            >
            <Grid>Admin Dashboard</Grid>
            <AdminNavigations/>
            <Grid>Logout</Grid>
      </Grid>
      <Grid item xs={9} 
            sx={{
                height: 'auto'
                }}>
                  <Paper sx={{height:'50px',
                              backgroundColor: 'pink  '}}>
                    testing</Paper>
                  <Paper>testing2</Paper>
                  <Paper>testing3</Paper>
                  <Paper>testing4</Paper>
      </Grid>
    </Grid>
  )
}

export default Dashboard