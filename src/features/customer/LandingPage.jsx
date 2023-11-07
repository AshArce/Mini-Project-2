
import React from 'react'
import Header from '../../components/Header'
import FeaturedProduct from '../../components/FeaturedProduct'
import PopularPicks from '../../components/PopularPicks'
import TopSelling from '../../components/TopSelling'
import RegisterBox from '../../components/RegisterBox'
import { Box } from '@mui/material'

function LandingPage() {
  return (
    
    <>
      <Header />
      
      <FeaturedProduct/>
      <Box sx={{padding: '5vh',
                backgroundColor: 'green'}} >
      <PopularPicks/>
      <TopSelling />
      <RegisterBox />
      </Box>
    </> 
  )
}

export default LandingPage