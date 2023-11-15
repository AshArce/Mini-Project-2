
import React from 'react'
import Header from '../../components/Header'
import FeaturedProduct from '../../components/FeaturedProduct'
import PopularPicks from '../../components/PopularPicks'
import TopSelling from '../../components/TopSelling'
import RegisterBox from '../../components/RegisterBox'
import { List, ListItem } from '@mui/material'
import Footer from '../../components/Footer'

function LandingPage() {
  return (

    <>
      <Header />

      <FeaturedProduct />
      <img
        src="/images/HeroVector.png"
        alt=""
        style={{
          objectFit: 'cover',
          position: 'absolute',
          boxShadow: '0',
          padding: '0',
          width: "100%",
          height: "230vh",
          zIndex: '0'
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
      <Footer style={{ zIndex: '1' }} />
    </>
  )
}

export default LandingPage