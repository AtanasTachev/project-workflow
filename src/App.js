import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
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
import UserDetails from './Components/personal/UserDetails/UserDetails';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: ''
};

function App() {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

const login = (authData) => {
    setUser(authData);
}

const logout = () => {
  setUser(initialAuthState)
};

  return (
    <AuthContext.Provider value={{user, login, logout}}>
    <Router>
        <Navigation />
        <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login /> } />
              <Route path="/logout" element={<Logout /> } />
              <Route path="/:userId/myProfile" element={<MyProfile />} />
              <Route path="/users/:userId/details" element={<UserDetails />} />
              <Route path="/allUsers" element={<AllUsers />} />
              <Route path="/create-project" element={<CreateProject />} />
              <Route path="/:projectId/edit" element={<EditProject />} />
              <Route path="/projects/:projectId/details" element={<ProjectDetails />} />
            </Routes>
          <Footer/>
        </div>
    </Router>
    </AuthContext.Provider>
  );
}



export default App;
