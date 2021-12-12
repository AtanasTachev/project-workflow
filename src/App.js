import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthContext, AuthProvider } from './contexts/AuthContext';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Register from './Components/auth/Register/Register';
import Login from './Components/auth/Login/Login';
import Logout from './Components/auth/Logout';
import Home from './Components/Home.js';
import CreateProject from './Components/project/CreateProject/CreateProject';
import EditProject from './Components/project/EditProject/EditProject';
import ProjectDetails from './Components/project/ProjectDetails/ProjectDetails';
import MyProfile from './Components/personal/MyProfile/MyProfile'
import AllUsers from './Components/personal/AllUsers/AllUsers';
import UserDetails from './Components/personal/AllUsers/UserCard/UserDetails/UserDetails';
import Notification from './Components/common/Notification/Notification';
import { NotificationProvider } from './contexts/NotificationContext';
import GuardedRoute from './Components/common/GuardedRoute';



function App() {
    

  return (
  <AuthProvider>

    <NotificationProvider>
      <Router>
          <Navigation />
          <Notification />
          <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/logout" element={<Logout /> } />

                <Route element={<GuardedRoute />}> 
                  <Route path="/users/:userId/myProfile" element={<MyProfile />} />
                  <Route path="/users/:userId/details" element={<UserDetails />} />
                  <Route path="/create-project" element={<CreateProject />} />
                  <Route path="/projects/:projectId/details" element={<ProjectDetails />} />      
                  <Route path="/:projectId/edit" element={<EditProject />} />
                </Route>
                
                <Route path="/allUsers" element={<AllUsers />} />
              </Routes>
            <Footer/>
          </div>
      </Router>
    </NotificationProvider>
  </AuthProvider>
  );
}



export default App;
