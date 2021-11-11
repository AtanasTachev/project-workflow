import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import ReactDom from 'react-dom';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login'

function App() {
  return (
      <Router>
        <div className="App">
          <Navigation/>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          <Footer/>
        </div>
      </Router>
  );
}



export default App;
