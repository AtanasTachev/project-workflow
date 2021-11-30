import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';

import * as authService from './services/authService'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Logout from './Components/auth/Logout';
import Home from './Components/Home.js';
import CreateProject from './Components/project/CreateProject';
import EditProject from './Components/project/EditProject';

function App() {
    const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});
    const [userData, setUserData] = useState({
      isAuthenticated: false, 
      specialty: '',
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });


    useEffect(() => {
      let user = authService.getUser();

      setUserInfo({
        isAuthenticated: Boolean(user),
        user
      })
      setUserData({
        isAuthenticated: Boolean(userData),
        userData
      })
    }, []);


const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    })
}

const onRegister = (userData) => {
  setUserData({
    isAuthenticated: true,
    specialty: userData.specialty,
    title: userData.title,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password
  })
  console.log(userData);
}

const onLogout = () => {
  setUserInfo({
    isAuthenticated: false,
    user: null,
    userData: null
  })
};

  return (
      <Router>
        <div className="App">
          <Navigation {...userInfo}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register onRegister={onRegister} />} />
              <Route path="/login" element={<Login onLogin={onLogin} /> } />
              <Route path="/logout" element={<Logout onLogout={onLogout} /> } />
              <Route path="/create-project" element={<CreateProject />} />
              <Route path="/edit-project" element={<EditProject />} />
            </Routes>
          <Footer/>
        </div>
      </Router>
  );
}



export default App;
