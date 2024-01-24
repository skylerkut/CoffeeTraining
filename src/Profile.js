import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function IndexComponent() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null); // State to store user profile data

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        console.log('Token from localStorage Profile:', token);
        if (!token) {
          // Handle the case where there's no JWT token
          console.error('No JWT token found in localStorage.');
          return;
        }
    
        const response = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
    
        if (response.status === 403) {
          console.error('Unauthorized access. JWT token may be invalid or expired.');
        } else if (response.ok) {
          const userData = await response.json();
          console.log('User Profile Data:', userData);
          setUserProfile(userData);
        } else {
          console.error('Failed to fetch user profile:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    
  
    fetchUserProfile();
  }, []);
  

  const handleLogout = () => {
    // Remove the token from local storage (or wherever it's stored)
    localStorage.removeItem('authToken');

    // Navigate to the login page
    navigate('/login');
  };

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
      <div className="container">
        <div className="main-body">
          {/* Profile and Details */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              {/* User Profile */}
              {userProfile && (
                 console.log('Rendered User Profile Data:', userProfile),
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{userProfile.fullName}</h4>
                        <p className="text-secondary mb-1">Guest Service Leader</p>
                        <p className="text-muted font-size-sm">{userProfile.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-8">
              {/* User Details */}
              {userProfile && (
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userProfile.fullName}
                      </div>
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userProfile.email}
                      </div>
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userProfile.phone}
                      </div>
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userProfile.address}
                      </div>
                      <div className="col-12 text-center mt-4">
                        <button onClick={handleLogout} className="btn btn-danger">
                          Logout
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* ... Additional personal details ... */}
                  </div>
                </div>
              )}

              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3">Training Progress</h6>
                  {/* ... Progress bars ... */}
                  {userProfile && (
                    <div>
                  <small>Hot Sandwich</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.HotSandwich}%` }} aria-valuenow={userProfile.HotSandwich} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small>Cold Sandwich</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.ColdSandwich}%` }} aria-valuenow={userProfile.ColdSandwich} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small>Pastries</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Pastries}%` }} aria-valuenow={userProfile.Pastries} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small>Salads</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Salads}%` }} aria-valuenow={userProfile.Salads} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small>Panning</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Panning}%` }} aria-valuenow={userProfile.Panning} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small>Pizza</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Pizza}%` }} aria-valuenow={userProfile.Pizza} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small>Breakfast</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Breakfast}%` }} aria-valuenow={userProfile.Breakfast} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small>Soup</small>
                  <div className="progress mb-3" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Soup}%` }} aria-valuenow={userProfile.Soup} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                 </div> )}
                  {/* ... Additional progress bars ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; Steam Boat Coffee -- COM S 319 Midterm Project</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default IndexComponent;

