import React from 'react';
import './Styling/Contact.css';
import Socials from './Socials';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="content">
        <Socials/>
        <h2>Contact Us</h2>
        <p>Have questions or just want to say hi? Reach out to us at info@ojcoin.com</p>
        
      </div>
    </section>
  );
};

export default Contact;
