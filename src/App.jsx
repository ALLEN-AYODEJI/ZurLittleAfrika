import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Explore from './Components/Explore/Explore'
import About from './Components/About/About'
import Comfort_home from './Components/Comfort_Home/Comfort_home'
import Pricing from './Components/Pricing/Pricing'
import Gallery from './Components/Gallery/Gallery'
import Booking from './Components/Booking/Booking'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Explore/>
      <About/>
      <Comfort_home/>
      <Pricing/>
      <Gallery/>
      <Booking/>
      <Footer/>
    </div>
  )
}

export default App