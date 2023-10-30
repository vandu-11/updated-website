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
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Person Icon">👤</span>
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
          </div>

          <div className={styles.formElement}>
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Phone Icon">☎</span>
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
            </div>
          </div>

          <div className={styles.formElement}>
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Email Icon">✉</span>
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
          </div>

          <div className={styles.formElement}>
            <div className={styles.inputWithSymbol}>
              <span role="img" aria-label="Message Icon">📝</span>
              <textarea id="message" name="message" placeholder="Your Message"></textarea>
            </div>
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
