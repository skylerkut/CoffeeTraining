import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import if using React Router
import '../stylesheet.css'; // Uncomment if you have an external CSS file

function Training() {


  return (
    <div>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossorigin="anonymous" 
      />

      {/* Main Content */}
      <main className="container">
        {/* Jumbotron */}
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">Menu Selection</h1>
            <p className="lead my-3">Select any of the menus to see the recipes listed</p>
          </div>
        </div>

        {/* Cards */}
        <div className="text-center">
        <main className="container">
        {/* Cards Section */}
        <div className="text-center">
          {/* Row 1 */}
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-4">
              <img src="/image/ColdSandwich.webp" className="rounded-circle" width="140" height="140" alt="Cold Sandwich" />
              <h2 className="fw-normal">Cold Sandwich</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><Link to="/recipes/ColdSandwiches" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
            {/* Card 2 */}
            <div className="col-lg-4">
              <img src="/image/HotSandwich.webp" className="rounded-circle" width="140" height="140" alt="Hot Sandwich" />
              <h2 className="fw-normal">Hot Sandwich</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><Link to="/recipes/HotSandwiches" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
            {/* Card 3 */}
            <div className="col-lg-4">
              <img src="/image/pastries.webp" className="rounded-circle" width="140" height="140" alt="Pastries" />
              <h2 className="fw-normal">Pastries</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
              <p><Link to="/recipes/Pastries" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            {/* Card 4 */}
            <div className="col-lg-4">
              <img src="/image/Salads.webp" className="rounded-circle" width="140" height="140" alt="Salads" />
              <h2 className="fw-normal">Salads</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><Link to="/recipes/Salads" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
            {/* Card 5 */}
            <div className="col-lg-4">
              <img src="/image/panning.webp" className="rounded-circle" width="140" height="140" alt="Panning" />
              <h2 className="fw-normal">Panning</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><Link to="/recipes/panning" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
            {/* Card 6 */}
            <div className="col-lg-4">
              <img src="/image/pizza.webp" className="rounded-circle" width="140" height="140" alt="Pizza" />
              <h2 className="fw-normal">Pizza</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
              <p><Link to="/recipes/Pizza" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row">
            {/* Card 7 */}
            <div className="col-lg-4">
              <img src="/image/breakfast.webp" className="rounded-circle" width="140" height="140" alt="Breakfast" />
              <h2 className="fw-normal">Breakfast</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><Link to="/recipes/Breakfast" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
            {/* Card 8 */}
            <div className="col-lg-4">
              <img src="/image/soup.webp" className="rounded-circle" width="140" height="140" alt="Soup" />
              <h2 className="fw-normal">Soup</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><Link to="/recipes/Soup" className="btn btn-secondary" style={{ backgroundColor: '#1c2340' }}>View details &raquo;</Link></p>
            </div>
          </div>
        </div>
      </main>

        </div>
      </main>

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

export default Training;
