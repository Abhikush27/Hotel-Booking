import React,{useState} from 'react'
import {Link} from "react-router-dom"
import './PlacePage.css'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import axios from 'axios'
// import AddIcon from '@mui/icons-material/Add';

function PlacePage() {

const {action} = useParams();
const [title,setTitle]=useState('');
const [address,setAddress]=useState('');
const [Photos,setPhotos]=useState([]);
const [description,setdescription]=useState('');
const [checkIn,setCheckIn]=useState('');
const [checkOut,setCheckOut]=useState('');
const [maxGuest,setMaxGuest]=useState(1);


 function addPhotoByLink(event){
  event.preventDefault()
const files = event.target.files;
const data = new FormData();

for(let i=0;i<files.length;i++){
  data.append('photos',files[i]);
}

console.log("hello")
axios.post('/upload',data,{
  headers:{'Content-type':'multipart/form-data'}
}).then(response =>{
  const{data:filenames} = response;
  setPhotos(prev =>{
    return [...prev, ...filenames];
  })
})
}


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
    <form onSubmit={e=>e.preventDefault()} className='places-form'>
      <h3>Title</h3>
      <p>title for your place</p>
      <input type="text" value ={title} onChange = {(e)=>setTitle(e.target.value)} style={{height: "4vh",width:"92%"}} placeholder='title' />
      <h3>Address</h3>
      <p>Address to this place</p>
      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} style={{height: "4vh",width:"92%"}} placeholder='address' />
      <h3>Photos</h3>

      <div>
        <label value={Photos} onChange={(e)=>setPhotos(e.target.value)} className='upload-photos'>
          <input type="file" multiple className='' onChange={addPhotoByLink} placeholder='Add image using "Link"' />
         <button style={{ color:"black", justifyContent:"center",textAlign:"center"}}>Upload</button>
          
          </label>
      </div>

      <h3>Description</h3>
      <textarea 
      value={description} onChange={(e)=>setdescription(e.target.value)}
      cols="90" rows="8"></textarea>

      <h3>Check in&out times</h3>
      <p>add checkin and checkout time</p>

      <div className='checkin-out'>
        <div className='checkin-input'>
          <h5>Checkin time</h5>
          <input type="text" value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} />
        </div>
        <div className='checkin-input'>
          <h5>Checkin time</h5>
          <input type="text" value={checkOut} onChange={(e)=>setCheckOut(e.target.value)}/>
        </div>
        <div className='checkin-input'>
          <h5>Checkin time</h5>
          <input type="text" value={maxGuest} onChange={(e)=>setMaxGuest(e.target.value)}/>
        </div>
      </div>

<Button style={{background:"red",color:'white'}}>Save</Button>

    </form>
   </div>
)}
   </div>
  )
}

export default PlacePage