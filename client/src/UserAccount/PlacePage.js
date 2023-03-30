import React from 'react'
import {Link} from "react-router-dom"
import './PlacePage.css'
import AddIcon from '@mui/icons-material/Add';

function PlacePage() {
  return (
   <div>

<div className='add-place'>
  <AddIcon />
    <Link className='addicon' to ={'/account/places/addplaces'}> Add Places</Link>
</div>

    my places
   </div>
  )
}

export default PlacePage