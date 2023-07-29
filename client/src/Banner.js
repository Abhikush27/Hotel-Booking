import React,{useState} from 'react'
import './Banner.css'
import {Button} from "@mui/material"  /*imp*/
import Date from'./Date'
import {useNavigate} from 'react-router-dom';

function Banner() {
const navigate = useNavigate();

const navigateTosearch = () => {
  navigate('/search');
};
// important

  const [show,select]=useState(false); 
  return (
    
    <div className='banner'>
        
          <div className="search-date">
            {/* important */}
            <Button  onClick={()=> select(!show)} className="search-button" variant='outlined'>{show ? "Hide" :"Search Dates"}</Button>
            {show && <Date />} 
            {/* important */}
          </div>

          <div className='banner-bg'>
            <h2>GET THE BEST YOU WANT</h2>
            <Button onClick={navigateTosearch}>Explore More</Button>
          </div>
        
    </div>
  )
}

export default Banner
// called in home.js