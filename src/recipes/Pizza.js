import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheet.css'; // Uncomment if you have an external CSS file
import recipesData from './recipe.json';
function PizzaPage() {
    const { pizzaId } = useParams();
    const pizzaItem = recipesData.Pizza;

// Render a single pizza detail
const renderSandwichDetail = (id) => {
  const pizza = pizzaItem.find(s => s.id === id);
  if (!pizza) return <p>Pizza not found</p>;

  return (
      <div>
          <h3>{pizza.title}</h3>
          <div className="video-container">
              <video controls preload="metadata">
                  <source src={pizza.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
          <h4>Instructions:</h4>
          <ol>
              {pizza.instructions.map((step, index) => (
                  <li key={index}>
                      {typeof step === 'string' ? step : step.text}
                      {step.imageUrl && <img src={step.imageUrl} alt={`Step ${index + 1}`} />}
                  </li>
              ))}
          </ol>
      </div>
  );
};


    // Render the list of all pizzaes
    const renderSandwichList = () => {
        const rows = [];
        for (let i = 0; i < pizzaItem.length; i += 3) {
            const row = (
                <div className="row mb-2" key={`row-${i}`}>
                    {pizzaItem.slice(i, i + 3).map((pizza) => (
                        <div key={pizza.id} className="col-md-4">
                            <div className="card mb-4 shadow-sm">

                                <div className="card-body">
                                    <strong className="d-inline-block mb-2 text-primary-emphasis">Pizza - New!</strong>
                                    <h3 className="mb-0">{pizza.title}</h3>
                                    <p className="card-text mb-auto">{pizza.description}</p>
                                    <Link to={`/recipes/pizza/${pizza.id}`}>View {pizza.title}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
            rows.push(row);
        }

        return (
            <div>
                {/* Jumbotron */}
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fst-italic">Pizza</h1>
                        <p className="lead my-3">Recipes coming soon!</p>
                    </div>
                </div>

                {/* Render rows of pizzaes */}
                {rows}
            </div>
        );
    };

    return (
        <div>
          {/* Bootstrap CSS Link */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
          />
    
          {/* Favicon */}
          <link rel="icon" type="image/png" sizes="32x32" href="../myotherimages/boat_favicon.png" />
    
          {/* Page Title */}
          <title>Pizza</title>
    
          {/* External JavaScript */}
          <script src="index.js" type="text/javascript"></script>
    
          {/* External Stylesheet */}
          <link rel="stylesheet" href="style.css" />
    
          {/* Top Nav Bar */}
          <header>
          <div className="px-3 py-2 text-bg-dark border-bottom">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <Link to="/Profile" className="nav-link text-white">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/info" className="nav-link text-white">
                      Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/training" className="nav-link text-white">
                      Select Menu
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
    
          {/* Main Content */}
          <main className="container">
    
    
            {pizzaId ? renderSandwichDetail(pizzaId) : renderSandwichList()}
          </main>
    
          {/* Footer */}
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-body-secondary">
                  &copy; Steam Boat Coffee -- COM S 319 Midterm Project
                </span>
              </div>
            </footer>
          </div>
        </div>
      );
    }
    
    export default PizzaPage;
    