import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'; // Import if using React Router
import './stylesheet.css'; // Uncomment if you have an external CSS file

function Info() {

  return (
    <div>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossorigin="anonymous" 
      />

      {/* Navigation Bar */}
      <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/Profile" className="nav-link text-white">Profile</Link>
                </li>
                <li>
                  <Link to="/info" className="nav-link text-white">Info</Link>
                </li>
                <li>
                  <Link to="/training" className="nav-link text-white">Select Menu</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

    {/* Main Content */}
    <main class="container">
        {/* Jumbotron */}
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">Midterm Project</h1>
            <p className="lead my-3">Group 8 - Skyler Kutsch - Lincoln Kness</p>
          </div>
        </div>

        <div className="text-align">
            <p>
                SE/ComS319 Construction of User Interfaces, Spring 2023
            </p>
            <p>
                Skutsch@iastate.edu
            </p>
            <p>
                Lkness@iastate.edu
            </p>
            <p>
                12/4/2023
            </p>
        </div>

    </main>

    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary">&copy; Steam Boat Coffee -- COM S 319 Midterm Project</span>
          </div>
      </footer>
  </div>
  </div>
  );
}

export default Info;