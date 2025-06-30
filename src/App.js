import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EmployeeDash from './Routes/EmployeeDash';
import Training from './Routes/Training';
import Login from './Routes/Login';
import ManagerDash from './Routes/ManagerDash';
import Navbar from './Components/Navbar';


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

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/EmployeeDash" element={<PrivateRoute element={<EmployeeDash />} />} />
          <Route path="/Training" element={<PrivateRoute element={<Training />} />} /> 
          <Route path="/ManagerDash" element={<PrivateRoute element={<ManagerDash />} />} />


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
        </Routes>
       <Navbar/>
      </div>
    </Router>
  );
}

//PrivateRoute is a custom higher-order component (HOC) that checks authentication
function PrivateRoute({ element }) {
  const role = localStorage.getItem('employee'); //Check if logged in
  return role ? element : <Navigate to="/" />; //Allow access if logged in
}

export default App;
