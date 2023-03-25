import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import React from 'react'
import './Cards.css'
// import { Link } from 'react-router-dom';


function Cards(props) {
  return (
    // <Link to="/room/6415770bbed42840203c4838">
    <div className="cards">

        <Carousel showThumbs ={false} autoPlay={true} interval={5000} infiniteLoop={true}>
        {props.src.map(image=>
         <div className="cards-image">
           <img src={image} alt="" /> 
         </div>
          )}
        </Carousel>
      
        <div className="card-info">
          <h2>{props.title}</h2>
          <h4>{props.description}</h4>
          <h3>{props.price}</h3>
        </div>

    </div>
    // </Link>
  )
}

export default Cards