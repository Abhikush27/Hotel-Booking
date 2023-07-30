import React, { useState, useContext } from 'react'
import './LoginPage.css'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from './UserContext'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const { setUser } = useContext(UserContext)

  async function loginUser(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post('/login', {email,password});
      if(data)
      {setUser(data);
      setRedirect(true);}
      else{
        alert('Wrong credentials')
      }
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>

          <div>
            Don't have an account
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
