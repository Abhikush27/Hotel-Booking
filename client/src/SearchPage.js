import React from 'react'
import {Button} from "@mui/material" 
import './SearchPage.css'
import Searchcard from './Searchcard'


function SearchPage() {
  return (
    <div className='SearchPage'>
      <div className="searchPage-info">
        <p>26 august to 29 august.2 guest</p>
        <h1>Stay nearby</h1>

        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>

      </div>
      <Searchcard  src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
      star="4.2"
      price="₹ 30/night"
      />

<Searchcard  src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
      star="4.2"
      price="₹ 30/night"
      />

<Searchcard  src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
      star="4.2"
      price="₹ 30/night"
      />
      
    </div>


  )
}
// called in App.js
export default SearchPage