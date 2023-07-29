import React from 'react'
import Banner from './Banner'
import './Home.css'
import Cards from './Cards.js'


function Home() {

  return (
    <div className='home'>
      <Banner />
      <Cards/>
      
    </div>
  )
}

export default Home
// called in banner.js