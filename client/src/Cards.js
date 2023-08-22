// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import React, { useEffect, useState } from 'react'
import './Cards.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Cards() {
const [places,setPlaces]=useState([]);
  // to fetch all the places from database
  useEffect(()=>{
    axios.get('/account/places').then(({data}) =>{
      console.log(data);
    setPlaces(data);
    })
    
    },[]) ; 


  return (

    <div className="card">
      {places.length > 0 && places.map(place => (
        <Link to={'/place/'+place._id}>
          {/* <div className="context"> */}
          <div className="images2">
            {place.photos?.[0] && (
              <img src={`http://localhost:7000/${place.photos[0]}`} alt=""/>
            )}
          </div>

          <div className="text">
          <h2 className="address">{place.address}</h2>
          <h3>{place.title}</h3>
          <h4>{place.price}</h4>
          </div>
        </Link>
      ))}
    </div> 
  )
}

export default Cards
// called in home.js