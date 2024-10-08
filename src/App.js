import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';

import Login from './views/Login'; 
import Home from './views/Home'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              // <RequireAuth redirectTo={'/login'}>
              <Navigate to='/member'/>
              // </RequireAuth>
            }
          ></Route>

          <Route 
            path='/login'
            element={
              // <NoRequireAuth redirectTo={'/member'}>
              <Login />
              // </NoRequireAuth>
            }
          ></Route>

          <Route 
            path='/home'
            element={
              // <RequireAuth redirectTo={'/member'}>
              <Home />
              // </RequireAuth>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
