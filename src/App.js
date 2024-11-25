import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';
import './App.css';

import Login from './views/Login'; 
import Home from './views/Home'; 


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Navigate to='/login'/>
            }
          ></Route>

          <Route 
            path='/login'
            element={
              <Login setIsLoggedIn = {setIsLoggedIn}/>
            }
          ></Route>

          <Route 
            path='/home'
            element={
              <Home />
              /* isLoggedIn ? <Home /> : <Navigate to = '/login' /> */
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
