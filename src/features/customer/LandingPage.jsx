
import React from 'react'
import Header from '../../components/Header'
import FeaturedProduct from '../../components/FeaturedProduct'
import PopularPicks from '../../components/PopularPicks'
import TopSelling from '../../components/TopSelling'
import RegisterBox from '../../components/RegisterBox'
import { Box } from '@mui/material'
import Footer from '../../components/Footer'

function LandingPage() {
  return (

    <>
      <Header />

      <FeaturedProduct />
      <Box sx={{
        boxShadow: '0',
        padding: '10vh 7%',
        backgroundImage: `url("/images/HeroVector.png")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }} >
        <PopularPicks />
        <TopSelling />
        <RegisterBox />
      </Box >
      <Footer />
    </>
  )
}

export default LandingPage