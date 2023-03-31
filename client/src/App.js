import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import SearchPage from './SearchPage'
import LoginPage from './UserAccount/LoginPage';
import RegisterPage from './UserAccount/RegisterPage';
import AccountPage from './UserAccount/AccountPage';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { UserContextProvider } from './UserAccount/UserContext';
import axios from 'axios';


axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://localhost:7000"

function App() {


  return (

    // BEM
    <div className="app">
<UserContextProvider>

      <Router>
        <Header />

        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/search"  element={<SearchPage/>} />
          <Route path="/login"  element={<LoginPage/>} />
          <Route path="/register"  element={<RegisterPage/>} />
          <Route path="/account" element={<AccountPage/>} />
          <Route path="/account/:subpage" element={<AccountPage/>} />
          <Route path="/account/:subpage/:action" element={<AccountPage/>} />
        </Routes>
        
        <Footer />
      </Router>

      </UserContextProvider>
    </div>
  );
}

export default App;