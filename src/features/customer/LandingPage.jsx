
import React from 'react'
import Header from '../../components/Header'
import FeaturedProduct from '../../components/FeaturedProduct'
import PopularPicks from '../../components/PopularPicks'
import TopSelling from '../../components/TopSelling'
import RegisterBox from '../../components/RegisterBox'
import { Box, List, ListItem } from '@mui/material'
import Footer from '../../components/Footer'

function LandingPage() {
  return (

    <>
      <Header />

      <FeaturedProduct />
      <img
        src="public/images/HeroVector.png"
        alt=""
        style={{
          position: 'absolute',
          boxShadow: '0',
          padding: '0',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }} />

      <List>
        <ListItem>
          <PopularPicks />
        </ListItem>
        <ListItem>
          <TopSelling />
        </ListItem>
        <ListItem>
          <RegisterBox />
        </ListItem>

      </List>
      <Footer />
    </>
  )
}

export default LandingPage