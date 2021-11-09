import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import ReactDom from 'react-dom';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Register from './Components/Register'

function App() {
  return (
      <Router>
        <div className="App">
          <Navigation/>
            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>
          <Footer/>
        </div>
      </Router>
  );
}
// ReactDOM.render(
// )


export default App;
