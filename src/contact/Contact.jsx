// Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for Contact component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    console.log('Form submitted:', formData);
    setSubmissionStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
    setTimeout(() => setSubmissionStatus(''), 5000); // Clear status after 5 seconds
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        Have a question or want to get in touch? Fill out the form below!
      </p>

      {submissionStatus && <div className="submission-status">{submissionStatus}</div>}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Our Information:</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Demo Street, React City, RW 98765</p>
      </div>
    </div>
  );
};

export default Contact;
