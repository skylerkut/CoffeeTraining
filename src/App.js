import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Profile from './Profile';
import Info from './Info';
import Training from './Training';
import Login from './Login';


// Import the recipe components
import Breakfast from './recipes/Breakfast';
import ColdSandwiches from './recipes/ColdSandwiches';
import HotSandwiches from './recipes/HotSandwiches';
import Panning from './recipes/Panning';
import Pastries from './recipes/Pastries';
import Pizza from './recipes/Pizza';
import Salads from './recipes/Salads';
import Soup from './recipes/Soup';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  useEffect(() => {
    localStorage.removeItem('authToken');
    // Any other initialization code can go here
  }, []); // The empty array ensures this runs only once when the component mounts


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      console.log('Token from localStorage:', token);
      setIsLoggedIn(!!token);
    };
  
    checkAuthStatus();
  }, []);
// Function to update isLoggedIn state
const updateLoginStatus = (status) => {
  setIsLoggedIn(status);
};
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/Profile" /> : <Navigate to="/login" />} end />
          <Route path="/login" element={<Login onLoginSuccess={() => updateLoginStatus(true)} />} />
          <Route path="/Profile" element={<PrivateRoute element={<Profile />} isLoggedIn={isLoggedIn} />} />
          <Route path="/info" element={<PrivateRoute element={<Info />} isLoggedIn={isLoggedIn} />} />
          <Route path="/training" element={<PrivateRoute element={<Training />} isLoggedIn={isLoggedIn} />} />


          {/* Recipe Routes */}
          <Route path="/recipes/breakfast" element={<Breakfast />} />
          <Route path="/recipes/coldsandwiches" element={<ColdSandwiches />} />
          <Route path="/recipes/hotsandwiches" element={<HotSandwiches />} />
          <Route path="/recipes/panning" element={<Panning />} />
          <Route path="/recipes/pastries" element={<Pastries />} />
          <Route path="/recipes/pizza" element={<Pizza />} />
          <Route path="/recipes/salads" element={<Salads />} />
          <Route path="/recipes/soup" element={<Soup />} />

          {/* Recipes specific */}
          <Route path="/recipes/coldsandwiches/:sandwichId" element={<ColdSandwiches />} />
          <Route path="/recipes/breakfast/:breakfastId" element={<Breakfast />} />
          <Route path="/recipes/hotsandwiches/:hotsandwichId" element={<HotSandwiches />} />
          <Route path="/recipes/pizza/:pizzaId" element={<Pizza />} />
          <Route path="/recipes/salads/:saladsid" element={<Salads />} />
          <Route path="/recipes/soup/:soupid" element={<Soup />} />
          <Route path="/recipes/pastries/:pastriesid" element={<Pastries />} />
          <Route path="/recipes/panning/:panningid" element={<Panning />} />
          {/* ... other routes ... */}
        </Routes>
      </div>
    </Router>
  );
}

// PrivateRoute is a custom higher-order component (HOC) that checks authentication
function PrivateRoute({ element, isLoggedIn }) {
  return isLoggedIn ? element : <Navigate to="/login" />;
}

export default App;
