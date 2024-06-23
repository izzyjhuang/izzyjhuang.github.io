// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Email: contact@lavinialeemusicstudio.com</p>
      <p>Phone: (123) 456-7890</p>
    </section>
  );
};

export default Contact;
