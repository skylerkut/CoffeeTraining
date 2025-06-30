import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../AppContext';

function Navbar() {
  const { role } = useContext(AppContext);

  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              {/* Default Access */}
              <li>
                <Link to="/" className="nav-link text-white">Profiles</Link>
              </li>

              {/* Employee Access */}
              {role === 'employee' && (
                <>
              <li>
                <Link to="/EmployeeDash" className="nav-link text-white">Employee Dashboard</Link>
              </li>
              <li>
                <Link to="/Training" className="nav-link text-white">Games Menu</Link>
              </li>
              <li>
                <Link to="/Info" className="nav-link text-white">Info</Link>
              </li>
              </>
              )}

             {/* Manager Only Access  */}
             {role === 'manager' && (
                <>
              <li>
                <Link to="/ManagerDash" className="nav-link text-white">Manager Dashboard</Link>
              </li>
              </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;