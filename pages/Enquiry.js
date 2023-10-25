// pages/enquiry.js
import React from 'react';
import styles from './Enquiry.module.css'; // Import your CSS styles
import Header from '../components/Header';
import Footer from '../components/Footer';

function Enquiry() {
  return (
    <div>
      <Header />
      <div className={styles.enquiryContainer}>
        <h1>Enquiry Form</h1>
        <form className={styles.form}>
          <div className={styles.formElement}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>

          <div className={styles.formElement}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>

          <div className={styles.formElement}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
      <div className={styles.new}>
    
        <Footer />
        </div>
      
    </div>
  );
}

export default Enquiry;
