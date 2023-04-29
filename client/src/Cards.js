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
    // <Link to="/room/6415770bbed42840203c4838">
    // <div className="cards">

    //     <Carousel showThumbs ={false} autoPlay={true} interval={5000} infiniteLoop={true}>
    //     {props.src.map(image=>
    //      <div className="cards-image">
    //        <img src={image} alt="" /> 
    //      </div>
    //       )}
    //     </Carousel>
      
    //     <div className="card-info">
    //       <h2>{props.title}</h2>
    //       <h4>{props.description}</h4>
    //       <h3>{props.price}</h3>
    //     </div>

    // </div>
<div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {places.length > 0 && places.map(place => (
        <Link to={'/place/'+place._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {place.photos?.[0] && (
              <img className="rounded-2xl object-cover aspect-square"  src={`http://localhost:7000/${place.photos[0]}`} alt=""/>
            )}
          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1">
            <span className="font-bold">${place.price}</span> per night
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards