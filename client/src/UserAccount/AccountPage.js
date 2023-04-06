import React,{useContext, useState} from 'react'
import './AccountPage.css'
import {UserContext} from './UserContext'
import {Button} from "@mui/material" 
import axios from 'axios'
import '../Footer.css'
import {Navigate,Link,useParams} from "react-router-dom";
import PlacePage from './PlacePage'


function AccountPage() {

    const {ready,user,setUser} = useContext(UserContext);
const[redirect,setRedirect] = useState(null);

    // on clicking the link "My profile" in account page we will get "undirected" in the subpage
    let {subpage} = useParams();
    if(subpage === undefined){
    subpage ='profile'}


function logout(){
   axios.post('/logout');
   setUser(null);
setRedirect('/');
}

  if(ready && !user){
      return <Navigate to ={'/login'} />
    }

if(redirect){
  return <Navigate to ={redirect} />
}

 return (
     <div className='profile-css'>

    <nav>
      <Link className = "profile-links" to ="/account">My Profile</Link>
      <Link className="booking-css profile-links" to ="/account/bookings">My Bookings</Link>
      <Link className = "profile-links" to ="/account/places">My Accomodations</Link>
    </nav>

{/* SubPage for Profile */}
{subpage ==='profile' && (
 <div className='profile-content'>

  <h4>logged in as {user?.name} </h4>
  <Button variant="outlined" onClick={logout} >Logout</Button>

    </div>
     )}

{/* SubPage for Adding new Places */}
{subpage ==='places' && (
  <PlacePage />
)}

    </div>
  )
}

export default AccountPage