import React from 'react';
import Footer from './Footer';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access form data using e.target.elements
  };

  return (
    <div >
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='phno'>Phone Number:</label>
          <input type='text' id='phno' name='phno' required />

          <label htmlFor='message'>Message:</label>
          <textarea rows={8} id='message' name='message' required></textarea>

          <input type='submit' value='Submit' />
        </form>
      </div>
      <Footer />
    </div>
  );
}
