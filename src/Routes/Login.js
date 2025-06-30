import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../AppContext';
import './css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const { setRole } = useContext(AppContext);
  
  const handleRoleSelect = (role) => {
    // Remember what account was selected
    setRole(role);

    if (role === 'manager') {
      navigate('/ManagerDash'); //Nav to manager dashbaord
    } 
    if(role === 'employee'){
      navigate('/EmployeeDash'); //Nav to employee dashbaord
    }else {
      navigate('/'); 
    }
  };

   return (
    <div className="login-background">
        <div className="login-buttons">
          <button onClick={() => handleRoleSelect('employee')} className="login-button">
            <i class="bi bi-person-badge-fill"></i>
            <span>Employee</span>
          </button>
          <button onClick={() => handleRoleSelect('manager')} className="login-button">
            <i class="bi bi-door-open-fill"></i>
            <span>Manager</span>
          </button>
        </div>
      </div>

  );
};

export default Login;