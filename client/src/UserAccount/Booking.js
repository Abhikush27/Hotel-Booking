import React from 'react';
// import axios from 'axios';
import {Navigate} from 'react-router-dom';

function Booking() {
  // const {id} = useParams();
  // const [checkIn, setCheckIn] = useState('');
  // const [checkOut, setCheckOut] = useState('');
  // const [Guests, setGuests] = useState(1);
  // const [phone, setPhone] = useState('');
  // const [redirect,setRedirect] =useState('');

  // useEffect(() =>{
  //   if(!id)
  //   {
  //     return;
  //   }
  //   console.log(id)
  //   axios.get('/bookings'+id).then(response =>{
  //     const{data}=response;
      
  //     setCheckIn(data.checkIn);
  //     setCheckOut(data.checkOut);
  //     setGuests(data.Guests);
  //     setRedirect(data.redirect);
  //   });
  //  },[id]);

  // const BookIt = async () => {
  //   const formData = new FormData()
  //       formData.append("checkIn",checkIn)
  //       formData.append("checkOut",checkOut)
  //       formData.append("Guests",Guests)
  //       formData.append("phone",phone)
  //       await axios.post("/places", formData,{headers:{'Content-Type':"multipart/form-data"}});
  //       setRedirect('/account/bookings');
  //       }
        
      
  //    if(redirect){
  //     return <Navigate to ={redirect}/>
  // };

const redirect = () =>{
  <Navigate to ={'/account/bookings'}/>
}


  return (
    <form className="places-form">
    <div className='booking'>
      <h3>
        <label>Check in:</label>
        <input type='date'  />
        <br />
        <label>Check out:</label>
        <input type='date' />
        <br />
        <label>Number Of Guests </label>
        <input type='number'  />
        <br />
        <label>Phone Number</label>
        <input type='tel' />
        <br />
        <button onClick={redirect}>Book Now</button>
      </h3>
    </div>
    </form>
  );
  }

export default Booking;
