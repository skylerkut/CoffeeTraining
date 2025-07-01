import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';

function EmployeeDash () {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null); // State to store user profile data
 
  useEffect(() => {
    // Example profile data
    setUserProfile({
      fullName: "Jane Doe",
      email: "jane@coffee.com",
      phone: "123-456-7890",
      address: "123 Brew Street",
      role: "Guest Service Leader",
      HotSandwich: 80,
      ColdSandwich: 65,
      Pastries: 50,
      Salads: 70,
      Panning: 90,
      Pizza: 55,
      Breakfast: 60,
      Soup: 40
    });
  }, []);

  if (!userProfile) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">

        {/* Employee Info */}
        <Draggable>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Profile"
                className="rounded-circle mb-3"
                width="120"
              />
              <h5 className="card-title">{userProfile.fullName}</h5>
              <p className="text-muted">{userProfile.role}</p>
              <p className="small text-secondary">{userProfile.address}</p>
            </div>
          </div>
        </div>
        </Draggable>

        {/* Progress Bars */}
        <Draggable>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h6 className="mb-3">Training Progress</h6>
              {["HotSandwich", "ColdSandwich", "Pastries", "Salads", "Panning", "Pizza", "Breakfast", "Soup"].map((key) => (
                <div key={key} className="mb-2">
                  <small>{key.replace(/([A-Z])/g, ' $1')}</small>
                  <div className="progress" style={{ height: '5px' }}>
                    <div className="progress-bar bg-primary" role="progressbar"
                      style={{ width: `${userProfile[key]}%` }}
                      aria-valuenow={userProfile[key]} aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Draggable>
        
        {/* Buttons */}
        <Draggable>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h6>Quick Actions</h6>
              <button className="btn btn-outline-primary w-100 mb-2" onClick={() => navigate('/Training')}>
                Go to Training
              </button>
              <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => navigate('/Info')}>
                View Info
              </button>
              <button className="btn btn-danger w-100" onClick={() => navigate('/')}>
                Logout
              </button>
            </div>
          </div>
        </div>
        </Draggable>
      
      </div>
    </div>
  );
}

export default EmployeeDash;

