import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/login.css';

const Login = () => {
  const navigate = useNavigate();

    const handleRoleSelect = (account) => {
    // Remember what account was selected
    localStorage.setItem('employee', account);
    if (account === 'manager') {
      navigate('/ManagerDash'); //Nav to manager dashbaord
    } else {
      navigate('/EmployeeDash'); //to employee profile
    }
  };

  return (
    <div className="login-container">
      <h2>Select Profile</h2>
      <button onClick={() => handleRoleSelect('employee')}>Employee</button>
      <button onClick={() => handleRoleSelect('manager')}>Manager</button>
    </div>
  );
};

export default Login;