import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';

import * as authService from './services/authService'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login'
import Home from './Components/Home.js'
import CreateProject from './Components/project/CreateProject';
import EditProject from './Components/project/EditProject';

function App() {
    const [userInfo, setUserInfo] = useState({isAuthentocated: false, username: ''})

    useEffect(() => {
      let user = authService.getUser();

      setUserInfo({
        isAuthentocated: Boolean(user),
        user
      })
    }, [])
const onLogin = (username) => {
    setUserInfo({
      isAuthentocated: true,
      user: username
    })
}

  return (
      <Router>
        <div className="App">
          <Navigation/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login onLogin={onLogin}/> } />
              <Route path="/create-project" element={<CreateProject />} />
              <Route path="/edit-project" element={<EditProject />} />
            </Routes>
          <Footer/>
        </div>
      </Router>
  );
}



export default App;
