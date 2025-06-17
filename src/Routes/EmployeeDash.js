import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function IndexComponent() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null); // State to store user profile data
 
useEffect(() => {
  // Simulate a logged-in user for now
  setUserProfile({
  });
}, []);

  return (
    <div>

      {/* Navigation Bar
      <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/Profile" className="nav-link text-white">Profile</Link>
                </li>
                <li>
                  <Link to="/Info" className="nav-link text-white">Info</Link>
                </li>
                <li>
                  <Link to="/Training" className="nav-link text-white">Select Menu</Link>
                </li>
                <li>
                  <Link to="/" className="nav-link text-white">Logins</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header> */}


      {/* Main Content */}
      <div className="container">
        <div className="main-body">
          {/* Profile and Details */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              {/* User Profile */}
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
                        {/* <h4>{userProfile.fullName}</h4> */}
                        <p className="text-secondary mb-1">Guest Service Leader</p>
                        {/* <p className="text-muted font-size-sm">{userProfile.address}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
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
                        {/* {userProfile.fullName} */}
                      </div>
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {/* {userProfile.email} */}
                      </div>
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {/* {userProfile.phone} */}
                      </div>
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {/* {userProfile.address} */}
                      </div>
                      <div className="col-12 text-center mt-4">
                        <button className="btn btn-danger">
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
{/*                   
                  //   <div>
                  // <small>Hot Sandwich</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.HotSandwich}%` }} aria-valuenow={userProfile.HotSandwich} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  // <small>Cold Sandwich</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.ColdSandwich}%` }} aria-valuenow={userProfile.ColdSandwich} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  // <small>Pastries</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Pastries}%` }} aria-valuenow={userProfile.Pastries} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  // <small>Salads</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Salads}%` }} aria-valuenow={userProfile.Salads} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  // <small>Panning</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Panning}%` }} aria-valuenow={userProfile.Panning} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  // <small>Pizza</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Pizza}%` }} aria-valuenow={userProfile.Pizza} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  // <small>Breakfast</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Breakfast}%` }} aria-valuenow={userProfile.Breakfast} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  // <small>Soup</small>
                  // <div className="progress mb-3" style={{ height: '5px' }}>
                  //   <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${userProfile.Soup}%` }} aria-valuenow={userProfile.Soup} aria-valuemin="0" aria-valuemax="100"></div>
                  // </div>
                  //  </div>  */}
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

