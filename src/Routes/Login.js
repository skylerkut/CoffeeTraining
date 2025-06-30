import { useNavigate } from 'react-router-dom';
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
    <div className="login-background">
        <div className="login-buttons">
          <button onClick={() => handleRoleSelect('employee')} className="login-button">
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