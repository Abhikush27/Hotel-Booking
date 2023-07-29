import React,{useState} from 'react'
import {Link} from "react-router-dom"
import './LoginPage.css'
import axios from "axios"
// This popular library is used to communicate with the backend,Using Axios we make API requests in our application. Once the request is made we get the data in Return)


function RegisterPage() {

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');


// this function will submit the form on clicking the "register" button
 function registerUser(e){
  e.preventDefault();

try{
  // as we have our application on port 3000 ,so to communicate with different ports we use 'Cors'(called in app.js)
axios.post('http://localhost:7000/register',{
  name,
  email,
  password,
});
alert("Successfully Registered");
}
catch(e){
 alert("Registration Failed");
}
}


  return (
      <div class="register-page">
        <div class="form">
          <div class="register">
            <div class="register-header">
              <h3>Register</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="register-form" onSubmit={registerUser}>
            <input type="text" placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input type="email" placeholder="abc@gmail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            
            <input type="password" placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button>register</button>
        
        <div>
          Already a member?
          <Link to='/login'> Login</Link>
        </div>
        
          </form>
        </div>
      </div>
  )
}

export default RegisterPage