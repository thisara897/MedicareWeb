import React from 'react'
import Navbar from '../components/Navbar'
import BackgroundPhoto from '../components/BackgroundPhoto'
import Section01 from '../components/Section01'
import ProductCards from '../components/ProductCards'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'


function Home() {
  return (
    <div>
      <Navbar/>
      <BackgroundPhoto/> 
      <Section01/>
      <ProductCards/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Home
