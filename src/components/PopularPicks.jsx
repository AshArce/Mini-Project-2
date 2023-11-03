import { Box, Button,  Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import * as styles from './style';

function PopularPicks() {

  return (
    
      <Box 
          justifyContent="center"
          alignItems="center"
          style={styles.popPicItem}>
      

      <Grid 
      container
      justifyContent="space-between"
      alignItems={'center'}>
        
        <Grid container spacing={2} xs={6}>
              <Grid item xs={6}>
                    <Paper 
                    sx={{ height: '200px'}}>
                      123
                    </Paper>
              </Grid>
              <Grid item xs={6}>
                    <Paper 
                    sx={{ height: '200px'}}>
                      123
                    </Paper>
              </Grid>
              <Grid item xs={6}>
                    <Paper 
                    sx={{ height: '200px'}}>
                      123
                    </Paper>
              </Grid>
              <Grid item xs={6}>
                    <Paper 
                    sx={{ height: '200px'}}>
                      123
                    </Paper>
              </Grid>
      </Grid>
        <Grid 
          container
          direction="column"
          textAlign='start'
          rowSpacing={7}
          xs={6}
          
          >
            <Grid style={styles.popText} item xs={2}>
              <Typography variant='h5'>
                Popular Items
              </Typography>
            </Grid>
            <Grid style={styles.popText} item xs={4}>
              <Typography variant='h3'>
                Hot Trending on this Week.
              </Typography>
            </Grid>
            <Grid style={styles.popText} item xs={4}>
              <Typography variant='h6'>
                Various kinds of products that are trending the trend will be reset every week. Don't miss out on the best of items every week.
              </Typography>
              <Grid>
              <Button>button</Button> 
              </Grid>            
            </Grid>
        </Grid>
      </Grid>
      </Box>
    
      
    
  )
}

export default PopularPicks