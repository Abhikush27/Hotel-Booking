import React, { useContext } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import { UserContext } from './UserAccount/UserContext'

function Header() {
  const { user } = useContext(UserContext)
  return (
    <div className="header">
      <Link to="/">
        <div>
          <img
            className="header-logo"
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
            alt=""
          />
        </div>
      </Link>

      <div className="header-searchbar">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header-right">

        <LanguageIcon className='lang-icon'/>

        <Link to={user?'/account':'/login'}>
          <AccountCircleIcon style={{ color: 'black'}} />
          <div className='users'>{user && (<p>{user.name}</p>)}</div>
          
        </Link>
      </div>
    </div>
  )
}

export default Header
