import React,{useState} from 'react'
import { Button } from "@mui/material";
import axios from "axios";


function PlacesForm() {

    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [Photos, setPhotos] = useState([]);
    const [description, setdescription] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuest, setMaxGuest] = useState(1);


    function addPhotoByLink(event) {
        // event.preventDefault();
        const files = event.target.files;
        setPhotos(files)
        // const data = new FormData();
    
        // for (let i = 0; i < files.length; i++) {
        //   data.append("photos", files[i]);
        // }
    
        // This will take the .post request from "uploadPhotoRoute"
        // axios.post("/upload", data, {
        //     headers: { "Content-type": "multipart/form-data" },
        //   })
        //   .then((response) => {
        //     const { data: filenames } = response;
        //     setPhotos((prev) => {
        //       return [...prev, ...filenames];
        //     });
        //   });
      }

    async function addNewPlaces(ev) {
        ev.preventDefault();
        // const placeData = {title,address,Photos,description,checkIn,checkOut,maxGuest };
        const formData = new FormData()

        formData.append("title",title)
         Array.from(Photos).forEach(img=>{formData.append("photos",img)})
        formData.append("address",address)
        formData.append("description",description)
        formData.append("checkIn",checkIn)
        formData.append("checkOut",checkOut)
        formData.append("maxGuest",maxGuest)
        await axios.post("/places", formData,{headers:{'Content-Type':"multipart/form-data"}});
    
      }


  return (
    
    <form onSubmit={addNewPlaces} className="places-form">
    <h3>Title</h3>
    <p>title for your place</p>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ height: "4vh", width: "92%" }} placeholder="title"/>
    <h3>Address</h3>
    <p>Address to this place</p>
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={{ height: "4vh", width: "92%" }} placeholder="address"/>
    <h3>Photos</h3>

    {/* upload photo functionality */}
    <div>
      <label value={Photos} className="upload-photos">
        <input type="file" multiple className="photos" onChange={addPhotoByLink} placeholder='Add image using "Link" '/>
      </label>
    </div>

    <h3>Description</h3>
    <textarea value={description} onChange={(e) => setdescription(e.target.value)} cols="90" rows="8"></textarea>

    <h3>Check in&out times</h3>
    <p>add checkin and checkout time</p>

    {/* check in check out */}
    <div className="checkin-out">
      <div className="checkin-input">
        <h5>Checkin time</h5>
        <input type="text" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}/>
      </div>
      <div className="checkin-input">
        <h5>CheckOut time</h5>
        <input type="text" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>
      <div className="checkin-input">
        <h5>Number of Guest</h5>
        <input type="text" value={maxGuest} onChange={(e) => setMaxGuest(e.target.value)}/>
      </div>
    </div>

    <Button type='submit' style={{ background: "red", color: "white" }}>Save</Button>
  </form>

  )
}

export default PlacesForm