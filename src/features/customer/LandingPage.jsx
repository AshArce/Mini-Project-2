
import React from 'react'
import Header from '../../components/Header'
import FeaturedProduct from '../../components/FeaturedProduct'
import PopularPicks from '../../components/PopularPicks'
import * as styles from '../../components/style'
import { Box } from '@mui/material'

function LandingPage() {
  return (
    
    <>
      <Header />
      
      <FeaturedProduct/>
      <Box sx={{padding: '200px'}} style={styles.popPicItem}>
      <PopularPicks/>
      </Box>
    </> 
  )
}

export default LandingPage