import React,{useContext} from 'react'
import {UserContext} from './UserContext'
import {Navigate,Link} from "react-router-dom";


function AccountPage() {
    const {ready,user} = useContext(UserContext);
   
    if(ready && !user){
      return <Navigate to ={'/login'} />
    }
  return (
     
    <nav >
      <Link to ={'/account'}>My Profile</Link>
      <Link to ={'/account/bookings'}>My Bookings</Link>
      <Link to ={'/account/accomodation'}>My Accomodations</Link>
    </nav>

  )
}

export default AccountPage