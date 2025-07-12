// Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for Home component

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to Our Application!</h2>
      <p className="home-description">
        This is the home page of our demonstration.
        It showcases a simple React component with its own dedicated styling.
      </p>
      <img
        src="https://placehold.co/600x300/ADD8E6/000000?text=Home+Page+Image"
        alt="Home Page Placeholder"
        className="home-image"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/ADD8E6/000000?text=Image+Not+Found"; }}
      />
      <div className="home-features">
        <h3>Key Features:</h3>
        <ul>
          <li>Independent component structure.</li>
          <li>Separate styling for clear separation of concerns.</li>
          <li>Dummy content for demonstration.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
