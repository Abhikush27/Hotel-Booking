import React from 'react'
import Banner from './Banner'
import './Home.css'
import Cards from './Cards.js'
const images1 = ['img11.webp','img12.webp']
const images2 = ['img13.webp','img14.webp']
const images3 = ['img6.webp','img7.webp']
const images4=['img21.webp','img22.webp']
const images5 =['img23.webp','img24.webp']
const images6 =['img26.webp','img27.webp']

function Home() {

  return (
    <div className='home'>
      <Banner />
      
      <div className="home-cards">
        <Cards src = {images1}
        title="Mahali Mzuri, Masai Mara, Kenya"
        description="Uniqie activities we can do
        together, led by hosts"
        price="Rs.8,300 night"/>

       <Cards src = {images2}
        title="Capella Ubud, Bali, Indonesia"
        description="Uniqie activities we can do
        together, led by hosts"
        price="Rs.6,100 night"/>

       <Cards src = {images3}
        title="Four Seasons Beautiful Hotel"
        description="Uniqie activities we can do
        together, led by hosts"
        price="Rs.2,600 night"/>
        
      </div>
      <div className="home-cards">
        <Cards src={images5}
        title="penthouse"
        description="Uniqie activities we can do
        together, led by hosts"
        price="Rs.2,600 night"/>
        <Cards src={images4}
        title="1 Bedroom apartment"
        description="Uniqie activities we can do
        together, led by hosts"
        price="Rs.2,600 night"/>
        <Cards src={images6}
        title=""
        description="Uniqie activities we can do
        together, led by hosts"
        price="Rs.2,600 night"/>
      </div>

    </div>
  )
}

export default Home