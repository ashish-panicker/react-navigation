// About.js
import React from 'react';
import './About.css'; // Import the CSS file for About component

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Our Application</h2>
      <p className="about-description">
        This application is a simple demonstration of React components and their
        independent styling. Each section, like Home, Users, About, and Contact,
        is built as a separate component with its own dedicated CSS file,
        showcasing a modular development approach.
      </p>
      <div className="about-sections">
        <section className="about-section">
          <h3>Our Mission</h3>
          <p>
            To provide clear and concise examples of modern React development practices,
            focusing on component reusability and maintainable code structures.
          </p>
        </section>
        <section className="about-section">
          <h3>Technology Stack</h3>
          <ul>
            <li>React for the user interface</li>
            <li>CSS Modules for component-specific styling</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </section>
        <section className="about-section">
          <h3>Future Enhancements</h3>
          <p>
            We plan to integrate advanced features such as state management,
            API integrations, and more complex UI patterns to further
            demonstrate React's capabilities.
          </p>
        </section>
      </div>
      <img
        src="https://placehold.co/600x250/C0C0C0/333333?text=About+Us"
        alt="About Us Placeholder"
        className="about-image"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x250/C0C0C0/333333?text=Image+Not+Found"; }}
      />
    </div>
  );
};

export default About;
