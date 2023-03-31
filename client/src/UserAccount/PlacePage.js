import React from 'react'
import {Link} from "react-router-dom"
import './PlacePage.css'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
// import AddIcon from '@mui/icons-material/Add';

function PlacePage() {

const {action} = useParams();
console.log(action)

  return (

   <div>
    {action !=='addplaces' && (
<div className='add-place'>
    <Link className='addicon' to ={'/account/places/addplaces'}>  Add Places
     {/* <AddIcon/> */}
    </Link>
   
</div>

)}

{action ==='addplaces' &&(
   <div>
    <form className='places-form'>
      <h3>Title</h3>
      <p>title for your place</p>
      <input type="text" style={{height: "4vh",width:"92%"}} placeholder='title' />
      <h3>Address</h3>
      <p>Address to this place</p>
      <input type="text" style={{height: "4vh",width:"92%"}} placeholder='address' />
      <h3>Photos</h3>

      <div className='photo-css'>
        <input type="text" style={{height: "4vh",width:"84%"}} placeholder='Add image using "Link"' />
        <Button style={{color: "white", background: "black" ,margin:"2.2vh"}}>Add Photo</Button>
      </div>
      <div>
        <button style={{border: "2px solid grey", height:"10vh",width:"25vh"}}><b>Upload</b></button>
      </div>

      <h3>Description</h3>
      <textarea name="" id="" cols="90" rows="8"></textarea>

      <h3>Check in&out times</h3>
      <p>add checkin and checkout time</p>

      <div className='checkin-out'>
        <div className='checkin-input'>
          <h3>Checkin time</h3>
          <input type="text" />
        </div>
        <div className='checkin-input'>
          <h3>Checkin time</h3>
          <input type="text" />
        </div>
        <div className='checkin-input'>
          <h3>Checkin time</h3>
          <input type="text" />
        </div>
      </div>

    </form>
   </div>
)}
   </div>
  )
}

export default PlacePage