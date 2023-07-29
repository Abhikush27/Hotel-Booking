import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PlaceSinglePage.css'

function PlaceSinglePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get('/account/places/'+id).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className='single'>
      <h1>{place.title}</h1>
      <a target="_blank" className='atag' href={`https://maps.google.com/?g=${place.address}`}>{place.address}</a>
      <img className='image' src={'http://localhost:7000/'+place.photos}></img>
      <h2 style ={{textAlign:'center',color:'black',paddingTop:'2vh'}}>Description</h2>
      <p style ={{textAlign:'center',color:'black'}}>{place.description}</p>

      <div style ={{textAlign:'center',color:'black',paddingTop:'2vh'}}>
        Check-in: {place.checkIn} <br/>
        Check-out: {place.checkOut} <br/>
        Max number of Guests: {place.maxGuest}       
      </div>

      <div className='booking'>
      <h3> <label>Check in:</label>
       <input type="date" />
       <br />
       <label>Check out:</label>
       <input type="date" />
       <br />
       <button>Book Now</button>
       </h3>
     </div>
    </div>
  );
}

export default PlaceSinglePage;
