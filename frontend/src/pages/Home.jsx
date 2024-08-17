import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <>
    <div>
        <NavBar/>
    </div>
    <div>
        <Carousel/>
    </div>
    <div>
        <Card/>
    </div>
        <Footer/>
    </>
  )
}

export default Home