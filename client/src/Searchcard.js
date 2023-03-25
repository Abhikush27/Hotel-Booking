import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import './Searchcard.css'

function Searchcard(props) {
  return (
    <div className="searchcard">

      <img src={props.src} alt="" />
      <FavoriteBorderIcon className='favourite'/>


     <div className="combined-text">

     <div className="searchcard-info">
        <p>{props.location}</p>
        <h3>{props.title}</h3>
        <p>____</p>
        <p>{props.description}</p>

        </div>

        <div className="searchcard-additionalinfo">
          <StarIcon className='staricon'/>
          <p> <strong>
            {props.star}
            </strong></p>
          <h2 className='rate'>{props.price}</h2>
          
        </div>

    </div>

     </div>
      
  )
}

export default Searchcard